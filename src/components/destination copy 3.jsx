import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@material-ui/core'
import { useState } from 'react';
const GroupDestination = ({ theArr, anotherArr }) => {
  const [packageType, setPackageType] = useState("fixed")
  const [date, setDate] = useState("10")

  console.log(theArr);

  return (
    <div className='container p-4 py-5'>

      {packageType == "fixed" && <div className='pb-4 pt-2'>
        <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#BB332F" }}>Select Departure Dates</h2>
        <div className="flex-wrap d-flex justify-content-center">
          <div>

            <Button onClick={() => date !== "10" && setDate("10")} style={{ color: date == "10" ? "white" : "#BB332F", backgroundColor: date == "10" ? "#BB332F" : "white", border: `1px solid #BB332F` }} className="btn m-2">10th December</Button>

          </div>
          <div>

            <Button onClick={() => date !== "15" && setDate("15")} style={{ color: date == "15" ? "white" : "#BB332F", backgroundColor: date == "15" ? "#BB332F" : "white", border: `1px solid #BB332F` }} className="btn m-2 ">15th December</Button>

          </div>
          <div>

            <Button onClick={() => date !== "20" && setDate("20")} style={{ color: date == "20" ? "white" : "#BB332F", backgroundColor: date == "20" ? "#BB332F" : "white", border: `1px solid #BB332F` }} className="btn m-2">20th December</Button>

          </div>
          <div>

            <Button onClick={() => date !== "22" && setDate("22")} style={{ color: date == "22" ? "white" : "#BB332F", backgroundColor: date == "22" ? "#BB332F" : "white", border: `1px solid #BB332F` }} className="btn m-2">22th December</Button>

          </div>
        </div>
      </div>}

      <div className='pb-3'>
        <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#BB332F" }}>{packageType == "normal" ? "Umrah Packages" : `${date}th December Group Packages`}</h2>
        <h3 style={{ opacity: 0.9 }}>At e-Safar we provide top packages for Umrah</h3>
      </div>
      <div className="row">
        {packageType == "normal" ? theArr.map((e) => {
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
        }) : anotherArr[`dec${date}`].map((e) => {
          return <Link onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} className="col-12 col-md-4 p-2 " to={`/group-packages/${e.title}/${date}`}>
            <div style={{ height: "300px" }} className="card shadow-none border-0 rounded-3">

              <img className='position-relative w-100 h-100 rounded-3' style={{ objectFit: 'cover' }} src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://e-safarnet.web.app${e.image}`} alt="" />

              <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className="rounded-3 position-absolute top-0 h-100 w-100">
                <div className="position-absolute top-0 d-flex align-items-center justify-content-center h-100 w-100">

                  <h1 className="text-center text-light"><b>{e.title}</b> <br />PKR {e.packageList[0]}</h1>
                </div>
              </div>
            </div>

          </Link>
        })}

      </div>
    </div>
  )
}

export default GroupDestination