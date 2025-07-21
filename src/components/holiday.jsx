import React from 'react'
import Countries from './countries'
import dubai from './dubai.jpg'
import thiland from './thiland.jpg'
import baku from './baku.jpg'
import istanbul from './istanbul.jpg'
import malaysia from './malaysia.jpg'
import bahrain from './bahrain.jpg'


import bakuLogo from './azerbaijan.png'
import malaysiaLogo from './malaysia.png'
import bahrainLogo from './bahrain.png'
import thilandLogo from './thailand.png'
import istanbulLogo from './turkey.png'
import dubaiLogo from './dubaiLogo.png'
export default function Holiday() {
    return (
        <div>
            <h1 className='text-center welcome-header'>Holiday Packages</h1>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <Countries visa={"DUBAI VISA"}
                        image={dubai}
                        price={"9,000PKR"}
                        logo={dubaiLogo}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Countries
                        visa={"THAILAND VISA"}
                        image={thiland}
                        price={"99,000PKR"}
                        logo={thilandLogo}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Countries
                        visa={"ISTANBUL VISA"}
                        image={istanbul}
                        price={"99,000PKR"}
                        logo={istanbulLogo}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Countries
                        visa={"MALAYSIA VISA"}
                        image={malaysia}
                        price={"11,000PKR"}
                        logo={malaysiaLogo}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Countries
                        visa={"BAHRAIN VISA"}
                        image={bahrain}
                        price={"25,000PKR"}
                        logo={bahrainLogo}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Countries
                        visa={"BAKU VISA"}
                        image={baku}
                        price={"70,000PKR"}
                        logo={bakuLogo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}