import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiSolidUser} from 'react-icons/bi'
import './home.scss'
import Popup from '../Components/editpopup'

const HomePage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);


    return (
        <div className='split'>
            <div className="left">
                <h2>PROFILE</h2>
                <h1>Hi, User!</h1>
                <p className='placeholder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet est et quam laoreet fringilla vel id urna. Etiam volutpat nisl eget leo ornare, sed sollicitudin libero posuere. Donec bibendum, arcu et ultricies egestas, nulla purus varius metus, tristique volutpat libero leo vitae justo. Donec condimentum condimentum elit, quis finibus ex fermentum id. Proin sit amet ante at sapien pulvinar efficitur. Duis dapibus tellus laoreet ornare sodales. Praesent eget odio sit amet nibh mattis condimentum nec quis diam. Praesent imperdiet lectus elit, placerat suscipit tortor convallis a. Vivamus a velit at sapien convallis venenatis. Maecenas congue mollis sem sit amet ullamcorper. Suspendisse condimentum, sem eu blandit commodo, dui est lacinia elit, vitae efficitur ipsum turpis iaculis nulla. Aenean luctus et mi at viverra.</p>
                <button onClick={() => setButtonPopup(true)}>Edit Profile</button>
                <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
                    <form>
                        <p>
                        <label>Username</label><br/>
                        <input type="text" name="Name"/>
                        </p>
                        <p>
                        <label>Email</label>
                        <br/>
                        <input type="email" name="Email"/>
                        </p>
                        <p>
                        <Link to = '/forget-password'>Reset Password</Link>
                        </p>
                        <button id="sbbtn">Submit changes</button>
                    </form>
                </Popup>
            </div>
            <div className="right">
                <h1>OTHER ACTIVE USERS</h1>
                {/* List of some dummy placeholders. */}
            </div>
        </div>
    )
}


export default HomePage