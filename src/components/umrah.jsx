import React from 'react'
// import '../App.css'
import Navbar from './navbar.jsx'
import Carousal from './carousal.jsx'
import Welcome from './welcome.jsx'
import Featured from './featured.jsx'
import Holiday from './holiday.jsx'
import Footer from './footer.jsx'
import Consultation from './consultation.jsx'
import UnderConstruction from './underConstruction.jsx'
import Destionations from './destination.jsx'
export default function Umrah({theArr}) {
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
      
        <Carousal />


        <Destionations theArr={theArr}/>
     
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