import React from 'react'
import FeaturedItem from './featuredItem'
export default function Welcome() {
    return (
        <div>
            <h1 className='welcome-header text-center'>Welcome To Trip Again Travel & Tours</h1>
            <p className='welcome-text text-center'>Trip Again (Pvt) Ltd is Pakistan based Travel & Tourism company ,We Operate From Karachi, We have Wise Experience in Travel & Tourism Industry, We believe in Clients Satisfaction.</p>
            
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-3">
                        <FeaturedItem title={"Private Guide"}
                        icon={"fa-compass"}
                        />
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <FeaturedItem 
                        icon={"fa-plane"}
                        title={"Travel Arrange"}/>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <FeaturedItem 
                        icon={"fa-globe"}
                        title={"Location Manager"}/>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <FeaturedItem 
                        icon={"fa-phone"}
                        title={"24/7 Support"}/>
                    </div>

                </div>
            </div>
        </div>
    )
}