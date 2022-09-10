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
                        <input type="text" placeholder="Name of Pose" onChange={(e) => setPoseName(e.target.value)} />
                        <button type="submit" className='btn btn-danger' onClick={(e) => submitForm(e)}>Submit Pose</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home
