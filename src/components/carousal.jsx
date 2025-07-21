import React, { useContext } from 'react'
import carousalImage from './carousalImageTwo.jpg'
import { useState, useEffect } from 'react';


import coverImage from './images/ImageSix.png'
import coverImageTwo from './images/imageTwo.png'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AppContext from '../context/appContext';
// import { useContext } from 'react';


export default function Carousal({post}) {



    return (
        <div className="container-fluid">
            <div className="row align-items-center py-3">
                <div className="col-12 col-md-4">
                    <h1 className='fw-bold'>{post.title}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem minus dignissimos inventore et ut hic numquam quaerat dolorum autem pariatur.</p>
                    <p className="text-secondary">1h ago hockey-update.com</p>
                </div>
                <div className="col-12 col-md-8">
                    <img src={post.coverImage} alt="" className="card-img-top rounded-4" />
                </div>
            </div>
        </div>
    )
}