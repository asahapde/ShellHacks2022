import React, { useState } from 'react'
import './HomePageStyle.css'
import { ImageCapture} from '../ImageCapture/ImageCapture'


const Home = () => {

    const [name, setPoseName] = useState('')


    const submitForm = () => {
        alert("Form submitted");
        setPoseName('');
    }


    return (
        <div className="homepage-container">
            <div className="container">
                <div className="text">
                    <h1>Submit your pose</h1>
                    <form className="form">
                        <ImageCapture/>
                        <input type="text" placeholder="Name" onChange={(e) => setPoseName(e.target.value)} />
                        <button type="submit" id="submit-image-button" onClick={(e) => submitForm(e)}>Submit Pose</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home