import React from 'react'
import { Link } from 'react-router-dom'

import './login.scss'

const LoginPage = () => {
    return (
        <div className="card">
            <div className='box'>
            <h2>Log in</h2>
            <form action="/home">
                <p>
                    <label>Username or Email</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <a><Link to="/forget-password"><label className="right-label">Forgot password?</label></Link></a>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
        </div>
    )
}

export default LoginPage