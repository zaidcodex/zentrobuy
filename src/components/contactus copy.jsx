import React from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from './images/aboutus.png'
import Footer from './footer'
const AboutUs = () => {
    return (
        <div>
            <ContactUsCarousal upackage={"About Us"} image={carousalImage} />
            <div className="container my-5">
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#6699ff" }}>Our Story in Crosswinds Islamabad        </h2>
                {/* <p style={{ opacity: 0.8 }}><b style={{ color: "#BB332F" }}>e-Safar Travel & Tours</b> are one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country. We provide you with the flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multinational companies, foreigners and Pakistan’s living abroad.</p> */}
                {/* <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Details</h2> */}
                <p>Welcome to Crosswinds Islamabad, where comfort and luxury meet in the heart of Pakistan’s vibrant capital. Our hotel is designed to provide a haven for travelers, whether you’re here for business, leisure, or a bit of both. We pride ourselves on offering exceptional service, modern amenities, and a welcoming atmosphere to ensure your stay is nothing short of extraordinary.
                </p>

                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#6699ff" }}>Our Vision                </h2>
                <p>
                At Crosswinds Islamabad, our vision is to be the premier choice for travelers seeking a perfect blend of luxury, comfort, and authentic Pakistani hospitality. We aim to set new standards in the hospitality industry by continuously enhancing our services and facilities, ensuring that every guest experiences unparalleled satisfaction and leaves with cherished memories.


                </p>
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#6699ff" }}>Our Mission
                </h2>

                <p>
                At Crosswinds Islamabad, our mission is simple: to provide unparalleled hospitality and create memorable experiences for every guest. We are dedicated to ensuring that every stay is comfortable, enjoyable, and tailored to your needs. From the moment you step into our hotel, you will be greeted with genuine smiles and attentive service.


                </p>
                {/* <Footer /> */}

            </div >
        </div >
    )
}

export default AboutUs