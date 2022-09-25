import React from 'react'
import { Link } from 'react-router-dom'

const AdminInfo = () => {
    return (
        <div className="adminInfo">
            <div className="image-gmail">
                <img src="http://localhost:3000/design_image/login1.png" alt="" />
                <span>abcd@xyz.com</span>
            </div>
            <ul>
                <li> <Link to='/dashboard/profile'>Profile</Link></li>
                <li><Link to='/'>View Site</Link> </li>
                <li><span>Logout</span></li>
            </ul>
        </div>
    )
}

export default AdminInfo