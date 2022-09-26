import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { FaSearch } from 'react-icons/fa'
const DashboardArticle = () => {
    return (
        <div className='dashboard-article'>
            <Helmet>
                <title>All Article</title>
            </Helmet>
            <div className="article-action-pagination">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>Article (18)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" className="form-control" placeholder='serach article' />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashboard/add-article'>Add new</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardArticle