import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@material-ui/core'
import { useState } from 'react';
const Destionations = ({ theArr ,anotherArr}) => {
  const [packageType, setPackageType] = useState("normal")
  const [date, setDate] = useState("10")

  console.log(theArr);

  return (
    <div className='container p-4 py-5'>

      <div className='pb-3'>
        <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:"#BB332F" }}>Regular Umrah Packages</h2>
        <h3 style={{ opacity: 0.9 }}>At e-Safar we provide top packages for Umrah</h3>
      </div>
      <div className="row">
        {theArr.map((e) => {
          return <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} className="col-12 col-md-4 p-2 " to={`/umrah-packages/${e.title}`}>
            <div style={{ height: "300px" }} className="card shadow-none border-0 rounded-3">

              <img className='position-relative w-100 h-100 rounded-3' style={{ objectFit: 'cover' }} src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://e-safarnet.web.app${e.image}`} alt="" />

              <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className="rounded-3 position-absolute top-0 h-100 w-100">
                <div className="position-absolute top-0 d-flex align-items-center justify-content-center h-100 w-100">

                  <h1 className="text-center text-light"><b>{e.title}</b> <br />PKR {e.day10[3]}</h1>
                </div>
              </div>
            </div>

          </Link>
        })
      }
      </div>
    </div>
  )
}

export default Destionations