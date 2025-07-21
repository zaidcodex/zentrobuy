import React from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from './images/aboutus.png'
import RoomCarousal from './roomcarousal'
import "keen-slider/keen-slider.min.css"
import ThumbnailPlugin from './thumbnailplugin'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useKeenSlider } from 'keen-slider/react'
import ResizePlugin from './resizeplugin'
import MutationPlugin from './mutationoberver'
import { useContext } from 'react'
import AppContext from '../context/appContext'
import FeatureList from './featureList'
const RoomPackage = ({ theArr }) => {

    const theData = useContext(AppContext)
    const { allPackageData, siteData } = theData


    const { packageid } = useParams()

    const newObj = allPackageData.filter((e) => {
        return e._id == packageid
    })


    const anotherObj = newObj[0]


    console.log(anotherObj);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,

        },
        [ResizePlugin]
    )
    const [thumbnailRef] = useKeenSlider(

        {
            initial: 0,
            slides: {

                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef), ResizePlugin, MutationPlugin]
    )

    return (
        <div>
            {allPackageData.length > 0 && <div>
                <RoomCarousal upackage={anotherObj.name} image={anotherObj.assets[0].url} />
                <div className="container pb-5">

                    <div className="row">
                        <div className="col-md-6 col-12 my-4">
                            {<div>
                                <div ref={sliderRef} className="keen-slider" style={{ display: "flex", alignItems: 'center' }}>
                                    {/* {productView.assets.map((element) => { */}

                                    {anotherObj.assets.map((e) => {
                                        return <div className='keen-slider__slide number-slide'>

                                            {/* <img onLoad={() => setimgLoaded(true)} key={element.url} style={{ width: "100%", transform: "scale(1.2)" }} src={element.url} alt="" /> */}

                                            <div className='position-relative' style={{ width: "100%", height: '100%', backgroundColor: "#ffffff", paddingBottom: "66.67%" }}>
                                                {/* <Image style={{ top: '0' }} cloudName="dextrzp2q" className="rounded-4 card-img-top position-absolute w-100 h-100" key={element.url} publicId={element.url} type="fetch">

    <Transformation fetchFormat="webp" />
    <Transformation crop="pad" height="1000" width="1000" background="white" />
    <Transformation quality="60" />
</Image> */}
                                                <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/${e.url}`} className="rounded-4 card-img-top position-absolute w-100 h-100" alt="" />

                                            </div>
                                        </div>
                                    })}

                                    {/* })} */}
                                </div>

                                <div ref={thumbnailRef} className="keen-slider thumbnail py-2" >
                                    {/* {productView.assets.length > 1 && productView.assets.map((element) => { */}
                                    {/* return */}
                                    {anotherObj.assets.map((e) => {
                                        return <div className='keen-slider__slide number-slide ' style={{ display: "flex", alignItems: 'center' }}>

                                            {/* <img key={element.url} style={{ width: "100%" }} src={element.url} alt="" /> */}
                                            <div style={{ width: "100%" }}>
                                                <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/${e.url}`} className="rounded-4 card-img-top" alt="" />
                                                {/* <Image cloudName="dextrzp2q" className="rounded-4 card-img-top" key={element.url} publicId={element.url} type="fetch">
                                        <Transformation crop="pad" height="1000" width="1000" background="white" />
                                        <Transformation fetchFormat="webp" />
                                        <Transformation quality="60" />
                                    </Image> */}
                                            </div>
                                        </div>
                                    })}


                                </div>
                            </div>}

                            <div className="d-flex mb-2 justify-content-between pt-4">
                                <div className="ratings">
                                    <span className="mx-1">4.5</span>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${anotherObj.name=="Standard Package"?"6000":anotherObj.name=="Deluxe Package"?"6500":anotherObj.name=="Executive Package"?"7000":""}`}</h2>+Tax</p>
                                
                            </div>
                            <h2 style={{ color: '#6699ff' }} class="card-title h5 my-3 py-2">Overview</h2>
                            <p>{anotherObj.description01}</p>
                            <p>{anotherObj.description02}</p>
                            <h2 style={{ color: '#6699ff' }} class="card-title h5 my-3 py-2">Amenities and Services</h2>

                            <FeatureList features={anotherObj.services} />
                        </div>
                        <div className="col-md-6 col-12 my-4">
                            <div className="px-2">
                                <div className="row rounded-3 p-2 shadow-sm" style={{ backgroundColor: "white" }}>
                                    <div className="w-100 justify-content-between  d-flex col-md-5 py-2 ">

                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <div className='d-flex align-center'>
                                                <i style={{ fontSize: '30px', color: '#6699ff' }} class="fa fa-phone-square px-2" aria-hidden="true"></i>
                                                <span>Contact Us </span>
                                            </div>
                                            <div className="">
                                                <span><b><a style={{ textDecoration: 'none', color: '#6699ff' }} href={`tel:${siteData.phone}`}>{siteData.phone}</a></b></span>
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
                                <h2 style={{ color: '#6699ff' }} class="card-title h5 my-3 py-2">Room Location</h2>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.4421135945586!2d73.06611617479875!3d33.72338203502514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9e0867c6a1%3A0x3aafcf2ee1bf059d!2sCrosswinds%20Guest%20House%20Islamabad!5e0!3m2!1sen!2s!4v1737154273526!5m2!1sen!2s" height="300" style={{ border: 0, width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <h2 style={{ color: '#6699ff' }} class="card-title h5 my-3 pt-2">Have Any Questions?</h2>
                                <p style={{ color: 'black' }} class=" my-3 py-2">Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.                            </p>
                                <p style={{ color: 'black' }} class=" my-3 ">
                                    <i style={{ fontSize: '30px', color: '#6699ff' }} class="fa fa-phone-square px-2" aria-hidden="true"></i>

                                    <a style={{ color: "#6699FF", textDecoration: "none" }} href={`tel:${siteData.phone}`}>{siteData.phone}    </a>                       </p>
                                <p style={{ color: 'black' }} class=" my-3">
                                    <i style={{ fontSize: '30px', color: '#6699ff' }} class="fa fa-envelope px-2" aria-hidden="true"></i>

                                    <a style={{ color: "#6699FF", textDecoration: "none" }} href={`mailto:${siteData.email}`}>{siteData.email}                 </a>        </p>


                            </div>

                        </div>

                    </div>




                </div>


            </div>}
        </div>
    )
}

export default RoomPackage