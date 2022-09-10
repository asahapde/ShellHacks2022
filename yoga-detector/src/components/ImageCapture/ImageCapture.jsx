import React, { useState } from 'react';
import Webcam from "react-webcam";

var countdownTime = 3;
var timerInterval;

const ImageCaptureComponent = () => <Webcam />;

const videoConstraints = {
    width: 440,
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
            
            document.getElementById("captureButton").disabled = true;
            timerInterval = setInterval(countDown, 1000);
            
            countdownTime = 3;
        });

    function countDown(){
        if(countdownTime == 0){
            clearInterval(timerInterval);
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
            document.getElementById("captureButton").disabled = false;
        }

        console.log(countdownTime.toString());
        countdownTime--;
    }
    
    return (

      //If there is no image, set the image to the webcam picture
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={400}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={440}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        id="captureButton"
                        className="capture-btn">
                        Redo Pose</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        id="captureButton"
                        className="capture-btn">Capture Pose</button>
                }
            </div>
        </div>
    );
};