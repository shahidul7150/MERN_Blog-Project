import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'
import { RiArticleLine } from 'react-icons/ri'
import { FaCaretSquareLeft, FaTag } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { BsChevronRight } from 'react-icons/bs'
const Sidebar = () => {
    return (
        <div className="dashboard-main-content-sidebar">
            <ul>
                <li>
                    <Link to='/dashboard'>
                        <label htmlFor="">
                            <h3>
                                <span><AiFillDashboard /></span>
                                <span>Dashboard</span>
                            </h3>
                        </label>
                    </Link>
                </li>
                <li>
                    <label htmlFor="article">
                        <h3>
                            <span><RiArticleLine /></span>
                            <span>Article</span>
                        </h3>
                        <span className='right-icon'><BsChevronRight /></span>
                    </label>
                </li>
                <li>
                    <label htmlFor="category">
                        <h3>
                            <span><FaCaretSquareLeft /></span>
                            <span>Category</span>
                        </h3>
                        <span className='right-icon'><BsChevronRight /></span>
                    </label>
                </li>
                <li>
                    <label htmlFor="tag">
                        <h3>
                            <span><FaTag /></span>
                            <span>Tag</span>
                        </h3>
                        <span className='right-icon'><BsChevronRight /></span>
                    </label>
                </li>
                <li>
                    <label htmlFor="user">
                        <h3>
                            <span><HiUserGroup /></span>
                            <span>User</span>
                        </h3>
                        <span className='right-icon'><BsChevronRight /></span>
                    </label>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar