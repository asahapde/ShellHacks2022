import React, { useState } from 'react';
import Webcam from "react-webcam";


const ImageCaptureComponent = () => <Webcam />;

const videoConstraints = {
    width: 640,
    height: 400,
    //Require user-facing camera or the media request will fail
    facingMode: "user"
};

export const ImageCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    //Get screenshot via reference
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


    return (

      //If there is no image, set the image to the webcam picture
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={400}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={640}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="capture-btn">
                        Redo Pose</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="btn btn-primary capture-btn">Capture Pose</button>
                }
            </div>
        </div>
    );
};