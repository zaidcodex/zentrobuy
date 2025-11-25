import React, { useContext } from 'react'
import carousalImage from './carousalImageTwo.jpg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


import coverImage from './images/ImageSix.png'
import coverImageTwo from './images/imageTwo.png'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AppContext from '../context/appContext';
// import { useContext } from 'react';


export default function Carousal({post}) {

console.log(post)

    return (
        <div className="container-fluid">
                <Link to={`/post/${post._id}`} className="text-decoration-none ">
            <div className="row align-items-center py-3">
                <div className="col-12 col-md-4">
                    <h1 className='fw-bold text-light'>{post.title}</h1>
                    <div
  className="news-description text-light"
  dangerouslySetInnerHTML={{
    __html: (() => {
      // Remove HTML tags
      const plainText = post.description.replace(/<[^>]+>/g, "");

      // Limit to 20 characters and add ellipsis
      const shortText =
        plainText.length > 20 ? plainText.substring(0, 20) + "..." : plainText;

      return shortText;
    })(),
  }}
/>

                    <p className="text-secondary">
  Created At: {new Date(post.createdAt).toLocaleString()}
</p>

                </div>
                <div className="col-12 col-md-8">
                    <img src={post.coverImage} alt="" className="card-img-top rounded-4" />
                </div>
            </div>
                </Link>
        </div>
    )
}