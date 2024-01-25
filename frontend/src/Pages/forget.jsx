import React from 'react'
import { Link } from 'react-router-dom'

import './forget.scss'
const ForgetPasswordPage = () => {
    return (
        <div className="card">
            <div className='box'>
                <h2>Reset Password</h2>
                <h4>(Enter your login email and we will send a password reset code.)</h4>
                <form action="/login">
                    <p>
                        <label id="reset_pass_lbl">Email address</label><br/>
                        <input type="email" name="Email" required />
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Confirm</button>
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

export default ForgetPasswordPage