import React from 'react'

export default function FeaturedItem(props) {
    return (
        <div>


            <div className="card text-bg-light mb-3" >
                    <div className='icon'>
                        <i className={`fa ${props.icon}`} aria-hidden="true"></i>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse!</p>
                </div>
            </div>

        </div>
    )
}