import React, { useContext, useState, useEffect } from 'react'
import FullScreenLoader from './fullScreenLoader.jsx';
import AppContext from '../context/appContext.jsx'
import Carousal from './carousal'
import Cards from './cards.jsx'
import HockeyCards from './hockeycards.jsx'
import RightColumnCard from './rightColumnCard.jsx';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Home() {
  const context = useContext(AppContext);
  const { posts, categories, getCategories, getPosts, getBasicSettings, appLoader, setAppLoader } = context;

  useEffect(() => {
    const fetchFunc = async () => {
      setAppLoader(true)
      getCategories();
      getPosts();
      await getBasicSettings()
      setAppLoader(false)
    }
    fetchFunc()
  }, []);

  return (
    <div style={{backgroundColor: '#000', minHeight: '100vh'}}>
      <Helmet>
       <title>Zentrobuy - Smart Shopping Deals & Latest Product Updates</title>
<meta name="description" content="Explore Zentrobuy for trending products, smart shopping deals, honest reviews, buying guides, and daily updates to help you shop better online." />

      </Helmet>
      {appLoader && <FullScreenLoader />}
      
      {categories.map((mainCategory, mainIndex) => {
        const filteredPosts = posts.filter(
          postElement => postElement.category == mainCategory._id
        );

        // Hero Section - First Category
        if (mainIndex === 0) {
          return (
            <section key={mainCategory._id} className="mb-5">
              {filteredPosts.length > 0 && (
                <div className="mb-4">
                  <Carousal post={filteredPosts[0]} />
                </div>
              )}
              <div className="container-fluid px-4">
                <div className="row g-4">
                  {filteredPosts.slice(1).map(post => (
                    <Cards key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // Standard Categories (1-3)
        if (mainIndex > 0 && mainIndex < 4) {
          return (
            <section key={mainCategory._id} className="py-5" style={{backgroundColor: '#000000ff', }}>
              <div className="container-fluid px-4">
                <div className="mb-4 position-relative">
                  <h2 className="fw-bold display-6 mb-2" style={{color: '#fff'}}>{mainCategory.title}</h2>
                  <div style={{width: '80px', height: '4px', borderRadius: '2px', backgroundColor: '#ea4c2d'}}></div>
                </div>
                <div className="row g-4">
                  {filteredPosts.map(post => (
                    <Cards key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // Featured Category with Red Background (Index 4)
        if (mainIndex === 4) {
          return (
            <section key={mainCategory._id} className="py-5 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #ea4c2d 0%, #d43f24 100%)'}}>
              <div className="position-absolute top-0 end-0 w-50 h-100" style={{backgroundColor: '#fff', opacity: '0.05', transform: 'skewX(-15deg)'}}></div>
              <div className="container-fluid px-4 position-relative">
                <div className="mb-4">
                  <h2 className="fw-bold display-6 mb-2" style={{color: '#fff'}}>{mainCategory.title}</h2>
                  <div style={{width: '80px', height: '4px', borderRadius: '2px', backgroundColor: '#fff'}}></div>
                </div>
                <div className="row g-4">
                  {filteredPosts.map(post => (
                    <HockeyCards key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // Sticky Layout Section (Index 5)
        if (mainIndex === 5) {
          return (
            <section key={mainCategory._id} className="py-5" style={{backgroundColor: '#fff'}}>
              <div className="container-fluid px-4">
                <div className="mb-4">
                  <h2 className="fw-bold display-6 mb-2" style={{color: '#ea4c2d'}}>{mainCategory.title}</h2>
                  <div style={{width: '80px', height: '4px', borderRadius: '2px', backgroundColor: '#ea4c2d'}}></div>
                </div>
                <div className="row g-4">
                  {filteredPosts.length > 0 && (
                    <div className="col-lg-6">
                      <div className="sticky-top" style={{top: '100px'}}>
                        <div className="card border-0 shadow-lg overflow-hidden h-100 hover-lift" style={{borderRadius: '1rem'}}>
                          <div className="position-relative overflow-hidden" style={{paddingTop: '60%'}}>
                            <img
                              src={filteredPosts[0].coverImage}
                              className="position-absolute top-0 start-0 w-100 h-100 hover-zoom"
                              style={{objectFit: 'cover'}}
                              alt={filteredPosts[0].title}
                            />
                            <span className="position-absolute top-0 end-0 m-3 badge px-3 py-2 text-uppercase fw-semibold" style={{background: '#ea4c2d', fontSize: '0.75rem', letterSpacing: '0.5px', borderRadius: '50rem'}}>
                              Featured
                            </span>
                          </div>
                          <div className="card-body p-4">
                            <Link to={`/post/${filteredPosts[0]._id}`} className="text-decoration-none" style={{color: '#000'}}>
                              <h3 className="card-title fw-bold fs-4 mb-3 lh-sm">{filteredPosts[0].title}</h3>
                            </Link>
                            <p className="lh-lg mb-3" style={{color: '#6c757d'}}>
                              {filteredPosts[0].metaDescription.length > 150
                                ? filteredPosts[0].metaDescription.slice(0, 150) + '...'
                                : filteredPosts[0].metaDescription}
                            </p>
                            <span className="badge px-3 py-2 fw-normal" style={{backgroundColor: '#f8f9fa', color: '#6c757d', borderRadius: '0.5rem'}}>
                              Latest Update
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-lg-6">
                    <div className="row g-3">
                      {filteredPosts.slice(1).map((post) => (
                        <RightColumnCard key={post._id} post={post} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        // Another Featured Section (Index 6)
        if (mainIndex === 6) {
          return (
            <section key={mainCategory._id} className="py-5 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #ea4c2d 0%, #d43f24 100%)'}}>
              <div className="position-absolute top-0 end-0 w-50 h-100" style={{backgroundColor: '#fff', opacity: '0.05', transform: 'skewX(-15deg)'}}></div>
              <div className="container-fluid px-4 position-relative">
                <div className="mb-4">
                  <h2 className="fw-bold display-6 mb-2" style={{color: '#fff'}}>{mainCategory.title}</h2>
                  <div style={{width: '80px', height: '4px', borderRadius: '2px', backgroundColor: '#fff'}}></div>
                </div>
                <div className="row g-4">
                  {filteredPosts.map(post => (
                    <HockeyCards key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // Remaining Categories (7+)
        if (mainIndex > 6) {
          return (
            <section key={mainCategory._id} className="py-5" style={{backgroundColor: '#fff', borderBottom: '1px solid #dee2e6'}}>
              <div className="container-fluid px-4">
                <div className="mb-4">
                  <h2 className="fw-bold display-6 mb-2" style={{color: '#000'}}>{mainCategory.title}</h2>
                  <div style={{width: '80px', height: '4px', borderRadius: '2px', backgroundColor: '#ea4c2d'}}></div>
                </div>
                <div className="row g-4">
                  {filteredPosts.map(post => (
                    <Cards key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* Partners Section - Original Style */}
      {/* <div style={{backgroundColor: '#fff'}}>
        <div className="container pt-2 pb-5">
          <h1 className="fw-bold pb-3 text-center" style={{color: '#000'}}>Our Partners</h1>
          <div className="row">
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{ width: "100px" }} src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/04/02/225f3300-2c0e-41d1-853b-9821da4b333d/NRMAI_Standalone_Logo_Primary_Positive_-RGB-.png?width=320" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{ width: "100px" }} src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/03/11/79dc070a-f390-4f10-b4d0-580ffccb6902/KFC_reversed_red_RGB.png?width=320" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{ width: "100px" }} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/02/14/d9c4cab5-5ebc-4956-9e8d-b1fa46390f58/CommBank-Stacked-Wordmark-sRGB-300ppi-1-.jpg?width=200" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{ width: "100px" }} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/08/09/d5dd0da3-2321-4022-9613-ca7ec03cfca6/HCLtech.jpg?width=200" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{ width: "100px" }} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/02/14/988b7620-49e2-4504-bd77-6de535686979/Qantas-Logo.png?width=200" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{ width: "100px" }} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/02/14/5a7eafee-1841-428b-b306-14a98d7b4fb0/ToyotaProductLogoVertical_BLACK_RGB-1-.png?width=200" alt="" className="card-img-top" />
            </div>
          </div>
        </div>
      </div> */}

      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }

        .hover-zoom {
          transition: transform 0.5s ease;
        }

        .hover-lift:hover .hover-zoom {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}