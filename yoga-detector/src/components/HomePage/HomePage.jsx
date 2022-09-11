import React, { useState } from 'react'
import './HomePageStyle.css'
import { ImageCapture} from '../ImageCapture/ImageCapture'

const Home = () => {

    const [name, setPoseName] = useState('')


    const submitForm = () => {
        //Placeholder for post method
        alert("Form submitted");
        setPoseName('');
    }
    

    return (
        <div className="homepage-container">
            <div className="container">
                <div className="text">
                    <h2>FormPerfect AI</h2>
                    <form className="form">
                        <ImageCapture/>
                        <input type="text" className='btn btn-success' placeholder="Name of Pose" onChange={(e) => setPoseName(e.target.value)} />
                        <button type="submit" className='btn btn-danger' onClick={(e) => submitForm(e)}>Submit Pose</button>
                    </form>
                </div>
            </div>
                
                
            <div className='box instructions'>
                    <h3>Instructions</h3>
                    
                    <ul>
                        <li>Allow the browser access to your webcam</li>
                        <li>Click 'Capture'</li>
                        <li>Stand back to ensure your whole body (tip to toe) is clearly visible </li>
                        <li>Do a yoga pose and see what happens!</li>
                    </ul>
                </div>

                <div className='box about'>
                    <h3>About</h3>
                   <p>This app uses a machine learning nueral network to detect your yoga poses and idientifies the yoga pose and gives you a score based on the accuracy of the pose in a percentage</p>
                </div>
                
        </div>
    )
}
export default Home
