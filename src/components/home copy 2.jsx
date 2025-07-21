import React from 'react'
// import '../App.css'
import Navbar from './navbar.jsx'
import Carousal from './carousal'
import Welcome from './welcome'
import Featured from './featured'
import Holiday from './holiday'
import Footer from './footer'
import Consultation from './consultation'
import UnderConstruction from './underConstruction.jsx'
import Destionations from './destination.jsx'
import RegularUmrahCarousal from './carousal copy 2.jsx'
import GroupUmrahCarousal from './carousal copy 3.jsx'
import GroupDestination from './destination copy 3.jsx'
export default function GroupUmrah({theArr,anotherArr}) {
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
      
        <GroupUmrahCarousal />


        <GroupDestination theArr={theArr} anotherArr={anotherArr}/>
     
      {/* <div data-aos="fade-up"
        data-aos-duration="1000">
        <Welcome />
      </div>
      <Featured />

      <Holiday />
      <div className='mb-4'>
        <Consultation />
      </div> */}
      <Footer />
      {/* <UnderConstruction/> */}

    </div>
  )
}