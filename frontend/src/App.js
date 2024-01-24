import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/landing'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import ForgetPasswordPage from './Pages/forget'
import HomePage from './Pages/home'

import './App.css'

export default function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="login" element={ <LoginPage/> } />
                    <Route path="register" element={ <RegisterPage/> } />
                    <Route path="forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="home" element={ <HomePage/> } />
                </Routes>
        </BrowserRouter>
    )
}