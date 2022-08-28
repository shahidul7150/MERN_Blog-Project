import React from 'react'
import { BsAt } from 'react-icons/bs'
import { FaFacebook, FaGoogle, FaLock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../home/Navbar'

const AdminLogin = () => {
    return (
        <>
            <Navbar />
            <div className="admin-login">
                <div className="card">
                    <div className="auth">
                        <h3>Admin Login</h3>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="icon-input">
                                    <div className="icon"><BsAt /></div>
                                    <input type="email" name='email' className='form-control' id='email' placeholder='email' autoComplete='off' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="icon-input">
                                    <div className="icon"><FaLock /></div>
                                    <input type="password" name='password' className='form-control' id='password' placeholder='password' autoComplete='off' />
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block">
                                    Login
                                </button>
                                <button className="btn btn-block">
                                    <div className="spinner">
                                        <div className="spinner1"></div>
                                        <div className="spinner2"></div>
                                        <div className="spinner3"></div>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="image-logo">
                        <img src="http://localhost:3000/design_image/login1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin