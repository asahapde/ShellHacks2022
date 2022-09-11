import React, { useState } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
var countdownTime = 3;
var timerInterval;

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
            
            document.getElementById("captureButton").disabled = true;
            const timerHeader = document.createElement("h1");
            timerHeader.id = "timer";
            document.getElementById("webcamContainerId").appendChild(timerHeader);
            timerInterval = setInterval(countDown, 1000);
            
            countdownTime = 3;
        });
        
    function countDown(){
        if(countdownTime == 0){
            clearInterval(timerInterval);
            const imageSrc = webcamRef.current.getScreenshot();
            // var storage = multer.diskStorage({
            //     destination: function (req, file, cb) {
            //         cb(null, './public/uploads/')
            //     },
            //     filename: function (req, file, cb) {
            //         cb(null, Date.now()+file.originalname)
            //     }
            // })
            setImage(imageSrc);
            document.getElementById("captureButton").disabled = false;
            document.getElementById("timer").remove();
        }
        if(countdownTime != 0){
            document.getElementById("timer").innerHTML = countdownTime.toString();
        }
        countdownTime--;
    }

    // const submitForm = () => {
    //     //Placeholder for post method
    //     alert("Form submitted");
        
    // }

    const submitForm = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        try {
          const response = await axios({
            method: "post",
            url: "/api/upload/file",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch(error) {
          console.log(error)
        }
      }
    
    
    
    return (

      //If there is no image, set the image to the webcam picture
        <div id="webcamContainerId" className="webcam-container">
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
                        id="captureButton"
                        className="capture-btn">
                        Redo Pose</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        id="captureButton"
                        className="btn btn-primary capture-btn">Capture Pose</button>
                }
            </div>
            <button type="submit" className='btn btn-danger' onClick={(e) => submitForm(e)}>Submit Pose</button>
        </div>
    );
};