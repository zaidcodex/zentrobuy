import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/appContext';
import Sidebar from './RightSidebar';
import { Helmet } from "react-helmet";
import FullScreenLoader from './fullScreenLoader.jsx';

const Posts = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const { id } = useParams();
  const { posts, categoryPosts, getPostById, singPost, getPostsByCategory, appLoader, setAppLoader } = useContext(AppContext);

  const post = singPost;

  useEffect(() => {
    const fetchFunc = async () => {
      setAppLoader(true);
      try {
        const fetchedPost = await getPostById(id);
        if (fetchedPost.category) {
          await getPostsByCategory(fetchedPost.category);
        }
      } catch (err) {
        console.error("Error loading post:", err);
      } finally {
        setAppLoader(false);
      }
    };

    fetchFunc();
  }, [id]);

  useEffect(() => {
    console.log("category posts:", categoryPosts);
  }, [categoryPosts]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (appLoader) {
    return <FullScreenLoader />;
  }

  if (!singPost) {
    return (
      <div className="container" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
        <div className="row min-vh-100 align-items-center justify-content-center">
          <div className="col-12 text-center">
            <h2 className="fw-bold mb-3" style={{ color: '#fff' }}>Post not found</h2>
            <p style={{ color: '#adb5bd' }}>Please check the URL or try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4 py-md-5" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Helmet>
  <title>{post.metaTitle}</title>
  <meta name="description" content={post.metaDescription} />
</Helmet>

      {!appLoader && (
        
        <div className="row g-4">
          {/* Main Content */}
          <div className="col-12 col-lg-8">
            {/* Title */}
            <h1 
              className="fw-bold mb-4" 
              style={{ 
                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                color: '#fff',
                lineHeight: '1.2'
              }}
            >
              {singPost.title}
            </h1>

            {/* Cover Image */}
            {singPost.coverImage && (
              <div className="mb-4">
                <img
                  src={singPost.coverImage}
                  alt={singPost.title}
                  className="img-fluid rounded shadow"
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    filter: 'none',
                    opacity: 1
                  }}
                />
              </div>
            )}

            {/* Meta Info */}
            <div className="d-flex flex-wrap gap-3 mb-4 pb-3 border-bottom" style={{ color: '#edeff1ff', borderColor: '#495057 !important' }}>
              {singPost.author && (
                <span>
                  <i className="bi bi-person-fill me-1"></i>
                  By {singPost.author}
                </span>
              )}
             
            </div>

            {/* Description/Content */}
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: singPost.description }}
              style={{
                color: '#fff',
                filter: 'none',
                opacity: 1,
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}
            />
             {singPost.createdAt && (
                <span style={{color:'#aaa9a9ff'}}>
                  <i className="bi bi-calendar3 me-1"></i>
                  {new Date(singPost.createdAt).toLocaleDateString()}
                </span>
              )}
          </div>

          {/* Sidebar */}
         {!isMobile && ( <div className="col-lg-3">
           <div className="sticky-top pr-3 mb-3" style={{ top: '0', paddingRight: '12px' }}> 
            <Sidebar relatedPosts={categoryPosts} /> 
            </div> 
            </div> )}
        </div>
      )}

      {/* Global Styles for Post Content */}
      <style>{`
        body {
          background-color: #000 !important;
        }

        .post-content {
          color: #fff !important;
          filter: none !important;
          opacity: 1 !important;
        }

        .post-content * {
          filter: none !important;
          opacity: 1 !important;
        }

        /* Images responsive */
        .post-content img {
          max-width: 100% !important;
          height: auto !important;
          filter: none !important;
          opacity: 1 !important;
          display: block;
          margin: 1.5rem auto;
          border-radius: 0.5rem;
        }

        /* Paragraphs */
        .post-content p {
          color: #fff !important;
          margin-bottom: 1.25rem;
        }

        /* Headings */
        .post-content h1,
        .post-content h2,
        .post-content h3,
        .post-content h4,
        .post-content h5,
        .post-content h6 {
          color: #fff !important;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .post-content h1 { font-size: 2rem; }
        .post-content h2 { font-size: 1.75rem; }
        .post-content h3 { font-size: 1.5rem; }
        .post-content h4 { font-size: 1.25rem; }

        /* Links */
        .post-content a {
          color: #58a6ff;
          text-decoration: underline;
        }

        .post-content a:hover {
          color: #79c0ff;
        }

        /* Mark/Highlight */
        .post-content mark {
          background-color: #ffd60a !important;
          color: #000 !important;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
        }

        /* Lists */
        .post-content ul,
        .post-content ol {
          margin-bottom: 1.25rem;
          padding-left: 2rem;
          color: #fff;
        }

        .post-content li {
          margin-bottom: 0.5rem;
          color: #fff;
        }

        /* Blockquotes */
        .post-content blockquote {
          border-left: 4px solid #495057;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #adb5bd;
        }

        /* Code */
        .post-content code {
          background-color: #1a1a1a;
          color: #f8f9fa;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }

        .post-content pre {
          background-color: #1a1a1a;
          color: #f8f9fa;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1.25rem;
        }

        /* Tables */
        .post-content table {
          width: 100%;
          margin-bottom: 1.25rem;
          border-collapse: collapse;
        }

        .post-content table th,
        .post-content table td {
          padding: 0.75rem;
          border: 1px solid #495057;
          color: #fff;
        }

        .post-content table th {
          background-color: #1a1a1a;
          font-weight: bold;
        }

        .post-content table td {
          background-color: #000;
        }

        /* Responsive Typography */
        @media (max-width: 768px) {
          .post-content {
            font-size: 1rem;
          }

          .post-content h1 { font-size: 1.75rem; }
          .post-content h2 { font-size: 1.5rem; }
          .post-content h3 { font-size: 1.25rem; }
          .post-content h4 { font-size: 1.1rem; }

          .post-content img {
            margin: 1rem auto;
          }
        }

        /* Extra responsive for very small screens */
        @media (max-width: 576px) {
          .post-content {
            font-size: 0.95rem;
          }

          .post-content h1 { font-size: 1.5rem; }
          .post-content h2 { font-size: 1.35rem; }
          .post-content h3 { font-size: 1.2rem; }
        }

        /* Ensure videos are responsive too */
        .post-content iframe,
        .post-content video {
          max-width: 100% !important;
          height: auto !important;
        }
      `}</style>
    </div>
  );
};

export default Posts;