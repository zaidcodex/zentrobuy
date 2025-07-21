import React from 'react'
import carousalImage from './carousalImageTwo.jpg'
import { useState } from 'react';
import coverImage from './images/imageFour.png'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function RegularUmrahCarousal() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide">

                <div class="carousel-inner">
                    <div class="carousel-item active">
            <div style={{ zIndex: '20' }} className='shade'></div>



                        {/* 
            <div  style={{ backgroundColor: "#000000", position: 'absolute', transition: '1s ease', opacity: hidePlaceholder ? '0' : '1',paddingBottom:window.innerWidth>750?"52.941%":"133.3%",zIndex:10 }} key={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} onLoad={() => { setImgLoad(true) }} class="d-block w-100" >
              <Image cloudName="dextrzp2q"  style={{top:0}}  className={`card-img-top`} key={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} publicId={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} type="fetch">

                <Transformation effect="blur:1000" fetchFormat="webp" />
                <Transformation quality="60" />

              </Image>

             
            </div> */}
                        <div style={{ backgroundColor: "#000000", paddingBottom: window.innerWidth > 750 ? "52.941%" : "133.3%" }} class="d-block w-100 h-100 position-relative" >


                            <img style={{ top: 0 ,objectFit:'cover',height:"100%"}} className={`card-img-top position-absolute`} src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://e-safarnet.web.app${coverImage}`} alt="" />


                        </div>




                        <div style={{ zIndex: '30' }}  className="mycarousel-caption h-100">
                        <div className='h-100 w-100 d-flex align-items-center'>
                                <div className="">
                                    <div className="d-flex flex-column">
                            <span className='text-light' style={{ fontFamily: 'Montserrat',fontWeight:"bolder", fontSize: "35.2px", textAlign: 'start' }}>Regular Umrah Packages</span>
                            <span className="text-light mb-3" style={{ fontSize: "20.6px", marginBottom: '0px', textAlign: 'start' }}>We offer the best Regular Umrah Packages in Pakistan</span>
                            </div>
                            

                                
                                <div className="row rounded-3 p-2" style={{ backgroundColor: "white" }}>
                                    <div className="w-100 justify-content-center  d-flex col-md-5 py-2 ">

                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <div className='d-flex align-center'>
                                            <i style={{ fontSize: '30px',color:'#BB332F'  }} class="fa fa-phone-square px-2" aria-hidden="true"></i>
                                               <span>Contact Us </span>
                                               </div>
                                            <div className="">
                                               <span><a style={{textDecoration:'none'}} href="tel:+923355100991">+92-335-5100991</a></span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <div className="col-md-5 py-2">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i style={{ fontSize: '30px',color:'#1db3e5' }} class="fa fa-calendar px-3" aria-hidden="true"></i>
                                            <div className="d-flex flex-column">
                                                <span className='text-start'>Duration</span>

                                                <DatePicker className='calendar-form-control form-control rounded-2' selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 align-items-center">
                                        <div className="d-flex align-items-center h-100 justify-content-end p-2">
                                            <button style={{backgroundColor:"#1db3e5",color:"white"}} className="btn">
                                                Search
                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            </div>

                            {/* {window.innerWidth > 992 ? <Link to="/categories/6433332d10b9054a792b64ef">      <button className="btn" style={{ padding: '9px 16px', borderRadius: "100px", color: 'white', width: 'max-content', borderColor: 'white', fontSize: '13.2px' }}> <p style={{ marginBottom: '0px' }}> VIEW CRAFTS</p></button></Link>
                : <button onClick={() => categoriesRef.current.click()} className="btn" style={{ padding: '9px 16px', borderRadius: "100px", color: 'white', width: 'max-content', borderColor: 'white', fontSize: '13.2px' }}> <p style={{ marginBottom: '0px' }}> VIEW CATEGORIES</p></button>}
                 */}
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}