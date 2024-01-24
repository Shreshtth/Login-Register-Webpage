import React from 'react'
import { Link } from 'react-router-dom'

import './register.scss'

const RegisterPage = () => {

    return (
        <div className="card">
            <div className='box'>
                <h2 className='head'>Join us</h2>
                <h5>Create your personal account</h5>
                <form action="/home">
                    <p>
                        <label>Username</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Email Address</label><br/>
                        <input type="email" name="email" required />
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" requiredc />
                    </p>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to <a href="https://www.devzery.com/" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>    
        </div>
    )

}

export default RegisterPage