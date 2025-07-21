import React from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from './images/contactus.png'
import Footer from './footer'
const ContactUs = ({data}) => {
    return (
        <div>
            <ContactUsCarousal upackage={"Contact Us"} image={carousalImage} />
            <div className="container my-5">
                {/* <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Us</h2> */}
                <p style={{ opacity: 0.8 }}>{data.about}</p>
                <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#6699ff" }}>Contact Details</h2>

                <p><b>Phone Number:</b><a style={{ textDecoration: 'none',color:"#6699ff" }} href={`tel:${data.phone}`}>{data.phone}</a></p>
                {/* <p><b>PTCL Number:</b> <a style={{ textDecoration: 'none' }} href="tel:+922134992200">021-34992200</a></p> */}
                {/* <p><b>Individual Email:</b><a style={{ textDecoration: 'none' }} href="mailto:mohamid@esafar.net"> mohamid@Esafar.net</a></p> */}
                <p><b>Business Email:</b><a style={{ textDecoration: 'none',color:"#6699ff" }} href={`mailto:${data.email}`}> {data.email}</a></p>


            </div>
            {/* <Footer /> */}

        </div>
    )
}

export default ContactUs