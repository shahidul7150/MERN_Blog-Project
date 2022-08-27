import React from 'react'
import { BsAt } from 'react-icons/bs'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../home/Navbar'

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="register">
                <div className="card">
                    <div className="auth">
                        <h3>Register</h3>
                        <form >
                            <div className="form-group">
                                <label htmlFor="userName">User Name</label>
                                <div className="icon-input">
                                    <div className="icon"><FaUser /></div>
                                    <input type="text" name='name' className='form-control' id='userName' placeholder='user name' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="icon-input">
                                    <div className="icon"><BsAt /></div>
                                    <input type="email" name='email' className='form-control' id='email' placeholder='email' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="icon-input">
                                    <div className="icon"><FaLock /></div>
                                    <input type="password" name='password' className='form-control' id='password' placeholder='password' />
                                </div>
                            </div>
                            <div className="form-group">
                                <input hidden type="file" name="image" id="reg-img" />
                                <div className="image-file">
                                    <div className="image"></div>
                                    <div className="file-name">
                                        <div className="form-control"></div>
                                        <label htmlFor="reg-img">Browser</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block">
                                    Register
                                </button>
                            </div>
                            <div className="form-group">
                                <div className="login-page">
                                    <Link to='/login'>login yout account</Link>
                                </div>
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

export default Register