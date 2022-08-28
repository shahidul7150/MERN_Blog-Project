import React from 'react'
import { BsAt } from 'react-icons/bs'
import { FaFacebook, FaGoogle, FaLock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../home/Navbar'

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login">
                <div className="card">
                    <div className="auth">
                        <h3>Login</h3>
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
                            </div>
                        </form>
                        <div className="or">or</div>
                        <div className="fb-google-auth">
                            <div className="fb-google-logo">
                                <div className="fb">
                                    <button>
                                        <FaFacebook />
                                        <span>Signup with facebook</span>
                                    </button>
                                </div>
                                <div className="google">
                                    <button>
                                        <FaGoogle />
                                        <span>Signup with google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="login-page my-2">
                            <Link to='/register'><small>Register your account</small></Link>
                        </div>
                    </div>
                    <div className="image-logo">
                        <img src="http://localhost:3000/design_image/login1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login