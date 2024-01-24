import React from 'react'
import { Link } from 'react-router-dom'

import './landing.scss'

const LandingPage = () => {
    return (
        <div className="mainpage">
            <h1 className="heading">Welcome ;)</h1>
            <p className="text1">Already a user? Log in.</p> 
            <p className="text2">New around here? Register.</p>
            <div className="buttons">
                <Link to="/login">
                    <button className="lgbtn"><span>LOGIN</span></button>
                </Link>
                <Link to="/register">
                    <button className="regbtn"><span>REGISTER</span></button>
                </Link>
            </div>
        </div>
    )
}


export default LandingPage