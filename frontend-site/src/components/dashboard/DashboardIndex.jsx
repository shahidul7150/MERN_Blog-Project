import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaRegCaretSquareRight, FaRegUser, FaTag } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { RiArticleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const DashboardIndex = () => {
    return (
        <div className="dashboard-main-content-elements">
            <div className="dashboard-elements">
                <div className="cards">
                    <div className="single-card">
                        <div className="card-icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Visitors</span>
                        </div>
                    </div>
                    <Link className="single-card">
                        <div className="card-icon">
                            <RiArticleLine />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Articles</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card-icon">
                            <FaRegCaretSquareRight />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Category</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card-icon">
                            <FaTag />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Tag</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card-icon">
                            <FaRegUser />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Sub-admin</span>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default DashboardIndex