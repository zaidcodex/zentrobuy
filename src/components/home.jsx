import React, { useContext, useState, useEffect } from 'react'
import FullScreenLoader from './fullScreenLoader.jsx';

// import '../App.css'
import AppContext from '../context/appContext.jsx'
import Carousal from './carousal'

import DestinationList from './destination copy 2.jsx'
import { Card } from '@material-ui/core'
import Cards from './cards.jsx'
import HockeyCards from './hockeycards.jsx'
import RightColumnCard from './rightColumnCard.jsx';


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


  console.log(categories);

  console.log(posts);





  return (
    <div>
      {/* 
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

         */}
      {appLoader && <FullScreenLoader />}
      {categories.map((mainCategory, mainIndex) => {
        const filteredPosts = posts.filter(
          postElement => postElement.category == mainCategory._id
        );

        if (mainIndex === 0) {
          return (
            <div key={mainCategory._id}>
              {filteredPosts.length > 0 && (
                <Carousal post={filteredPosts[0]} />
              )}
              <div className="container-fluid">
                <div className="row">
                  {filteredPosts.slice(1).map(post => (
                    <Cards key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </div>
          );
        }
        if (mainIndex > 0 && mainIndex < 4) {
          return (
            <div key={mainCategory._id}>
              <div className="container-fluid pb-3 px-3">
                <h1 className="fw-bold">{mainCategory.title}</h1>
              </div>
              <div className="container-fluid">
                <div className="row">
                  {filteredPosts.map(post => (
                    <Cards key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </div>
          );
        }
        if (mainIndex == 4) {

          return <div style={{ backgroundColor: "#ea4c2d" }} className="container-fluid pb-3 px-3">
            <h1 className="fw-bold text-light pt-4 pb-2">{mainCategory.title}</h1>
            {/* <div className="container-fluid"> */}
            <div className="row">
              {filteredPosts.map(post => (
                <HockeyCards key={post._id} post={post} />

              ))}
            </div>
            {/* </div> */}
          </div>

        }
        if (mainIndex == 5) {
          return <div className="container-fluid">
            <h1 className="fw-bold pt-4 pb-2" style={{ color: "#ea4c2d" }}>{mainCategory.title}</h1>

            <div className="row">
              {/* Sticky Left Column */}
              {filteredPosts.length > 0 && (
                <div className="col-md-6">
                  <div className="sticky-top" style={{ top: "80px" }}>
                    <div className="card h-100 border-0">
                      <img
                        src={filteredPosts[0].coverImage}
                        className="card-img-top rounded-4"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          {filteredPosts[0].title}
                        </h5>
                        <p> {filteredPosts[0].metaDescription.length > 100
                          ? filteredPosts[0].metaDescription.slice(0, 100) + '...'
                          : filteredPosts[0].metaDescription}</p>
                        <p className="text-secondary">Latest Update</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
              }

              {/* Scrollable Right Column */}
              <div className="col-md-6" style={{}}>
                <div className="row">

                  {filteredPosts.slice(1).map((post) => {
                    return <RightColumnCard key={post._id} post={post} />
                  })}



                </div>
              </div>
            </div>
          </div>

        }
        if (mainIndex == 6) {
          return <div style={{ backgroundColor: "#ea4c2d" }} className="container-fluid pb-3 px-3">
            <h1 className="fw-bold text-light pt-4 pb-2">{mainCategory.title}</h1>
            {/* <div className="container-fluid"> */}
            <div className="row">
              {filteredPosts.map(post => (
                <HockeyCards key={post._id} post={post} />

              ))}
            </div>
            {/* </div> */}
          </div>
        }
        if (mainIndex > 6) {
          return <div className="container-fluid">
              <div className="container-fluid pb-3 px-3">
                <h1 className="fw-bold">{mainCategory.title}</h1>
              </div>
            <div className="row">
              {filteredPosts.map(post => (
                <Cards key={post._id} post={post} />
              ))}
            </div>
          </div>
        }


      })}


      <div>
        <div className="container pt-2 pb-5">
          <h1 className="fw-bold pb-3 text-center">Our Partners</h1>
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
      </div>
    </div >
  )
}