import React from 'react'
import Item from './Item'
import business from './business.jpg'
import tourist from './tourist.jpg'
import student from './student.jpg'
import work from './work.jpg'

export default function Featured() {
    return (
        <div >
            <h1 className='welcome-header text-center'>Featured Servies</h1>
            <h3 className="text-center featured-text">We Provide Visa & Immigration Service From Experienced Lawyers</h3>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-3">
                        <Item image={business} title={"Business Visa"} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <Item image={tourist} title={"Tourist Visa"} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <Item image={student} title={"Student Visa"} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <Item image={work} title={"Job/Work Visa"} />
                    </div>
                </div>
            </div>
        </div>
    )
}