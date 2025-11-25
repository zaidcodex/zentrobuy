import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ post }) => {
    if (!post || !post.coverImage) {
        console.warn("Invalid post passed to <Cards />:", post)
        return null;
    }
    const limitHTMLText = (html, limit = 100) => {
  const textOnly = html.replace(/<[^>]+>/g, ''); // remove HTML tags
  return textOnly.length > limit ? textOnly.slice(0, limit) + '...' : textOnly;
};


    return (
        <div className="col-md-3 mb-4">
            <Link to={`/post/${post._id}`} className="text-decoration-none text-dark">
                <div className="card h-100 border-0">
                    <img 
                        src={post.coverImage} 
                        className="card-img-top rounded-2" 
                        alt={post.title || "Card image"}
                        style={{ height:'250px', objectFit:"cover"}}
                    />
                    <div className="card-body">
                        {/* <h5 className="card-title fw-bold">{post.title}</h5> */}
                        <h5 className="card-title fw-bold">{post.title.length > 30 ? post.title.slice(0, 30)+'...': post.title}</h5>
                        <p
  className="text-secondary"
  dangerouslySetInnerHTML={{
    __html: limitHTMLText(post.description, 100)
  }}
/>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Cards
