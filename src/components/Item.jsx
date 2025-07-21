import React from 'react'

export default function Item(props) {
    return (
        <div>
            <div className="card mb-3"  >
            
                <img src={props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, tempora!</p>
                        <a href="#" className="btn three">Contact For More Info</a>
                    </div>
            </div>
        </div>
    )
}