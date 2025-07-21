import React from 'react'

export default function Countries(props) {
    return (
        <div>
            <div className="card mb-3 ">
                <div className="card-header c-head">
                    <h2>{props.visa}</h2>
                </div>
                <div>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="logo">
                        <img src={props.logo} alt="" />
                    </div>
                </div>
                <div className="card-body">

                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fuga. Inventore porro accusamus quidem modi.</p>

                    <h5>Starting From:</h5>
                    <div className="cardbee d-flex justify-content-between  ">

                        <div className="card-price">
                            <h4>{props.price}</h4>
                        </div>
                        <div className="card-detail">
                            <a href=""><button className="btn btn-my">More Details</button></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}