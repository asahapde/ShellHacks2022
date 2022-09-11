import React, { useState } from 'react'
import './HomePageStyle.css'
import { ImageCapture } from '../ImageCapture/ImageCapture'

const Home = () => {



    return (
        <div className="homepage-container">
            <div className="container">
                <div className="text">
                    <h2>FormPerfect AI</h2>
                    <ImageCapture />
                </div>
            </div>

            <div className="box">
                <div className='instructions'>
                    <h3>Instructions</h3>

                    <ul>
                        <li>Allow the browser access to your webcam</li>
                        <li>Click 'Capture'</li>
                        <li>Stand back to ensure your whole body (tip to toe) is clearly visible </li>
                        <li>Do a yoga pose and see what happens!</li>
                    </ul>
                </div>

                <div className='about'>
                    <h3>About</h3>
                    <p>This app uses a machine learning nueral network to detect your yoga poses and idientifies the yoga pose and gives you a score based on the accuracy of the pose in a percentage</p>
                </div>
            </div>
        </div>
    )
}
export default Home
