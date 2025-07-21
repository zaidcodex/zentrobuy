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
import UmrahCarousal from './carousal copy.jsx'
import { Button } from '@material-ui/core'
import PackageInfo from './destination copy.jsx'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min.js'

import { useState } from 'react'
import GroupInfo from './grouppackageinfo.jsx'
export default function GroupPackage({theArr}) {
  const [packageInformation, setPackageInformation] = useState()
  const {thepackage,date} = useParams();
  
console.log(thepackage);


const newObj =theArr[`dec${date}`].filter((e)=>{
  return e.title==thepackage
  })


  const anotherObj = newObj[0]

  
  

// console.log(newObj);


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
      
        <UmrahCarousal image={anotherObj.image} upackage={`${anotherObj.title} Package`} />

        <div className="container p-4 mt-4 border-1 border">
        <div className='d-flex justify-content-between'>
          <div><b>Price: </b>{` PKR ${anotherObj.packageList[0]}`}</div>
          <div><a href="tel:+923355100991" style={{textDecoration:"none"}}><Button style={{backgroundColor:'#BB332F', color:"white"}} className="btn">Call Now</Button></a></div>
        </div>
        </div>
        
        <GroupInfo data={anotherObj} date={date}/>
     
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