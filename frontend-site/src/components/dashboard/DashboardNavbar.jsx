import React from 'react'
import { Link } from 'react-router-dom'
import { BsBell, BsListUl } from 'react-icons/bs'
import UserMessage from './UserMessage'
import AdminInfo from './AdminInfo'
const DashboardNavbar = () => {
    return (
        <>
            <div className="dashboard-navbar">
                <div className="dashboard-navbar-left-side">
                    <label htmlFor="" className='dash'> <span>D</span></label>
                    <label htmlFor="sidebar" className='bar'> <span><BsListUl /> </span></label>
                    <h2><Link to='/dashboard'>Shahidul</Link></h2>
                </div>
                <div className="dashboard-navbar-right-side">
                    <h2><Link to='/dashboard'>View Site</Link></h2>
                    <div className="search">
                        <input type="text" placeholder='search' className='form-control' />
                    </div>
                    <div className="user">
                        <div className="notification-message">
                            <div className="notification">
                                <div>
                                    <span><BsBell /></span>
                                    <div className="nCount">5</div>
                                </div>
                            </div>
                            <UserMessage />
                        </div>
                        <label htmlFor="adminInfo"><img src="http://localhost:3000/design_image/login1.png" alt="" /> </label>
                        <div className="name-time">
                            <h3>Shahidul Islam</h3>
                            <span>2 jun 2022</span>
                        </div>
                    </div>


                </div>
            </div>
            <AdminInfo />
        </>
    )
}

export default DashboardNavbar