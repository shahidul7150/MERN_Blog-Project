import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { FaRegEye, FaSearch } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'
import Pagination from '../home/Pagination'


const AllCategory = () => {
    return (
        <div className="all-category">
            <Helmet>
                <title>All Category</title>
            </Helmet>
            <div className="show-category-action">
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
                        <Link className='btn' to='/dashboard/add-category'>Add Category</Link>
                    </div>
                </div>
                <div className="height-60vh">
                    <div className="categories">
                        <div className="category">
                            <div className="name">Programming</div>
                            <div className="action">
                                <span>
                                    <Link to='/dashboard/category/edit/ssdfds'> <MdEdit /></Link>
                                </span>
                                <span><MdDelete /></span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">Programming</div>
                            <div className="action">
                                <span>
                                    <Link to='/dashboard/category/edit/ssdfds'> <MdEdit /></Link>
                                </span>
                                <span><MdDelete /></span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">Programming</div>
                            <div className="action">
                                <span>
                                    <Link to='/dashboard/category/edit/ssdfds'> <MdEdit /></Link>
                                </span>
                                <span><MdDelete /></span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">Programming</div>
                            <div className="action">
                                <span>
                                    <Link to='/dashboard/category/edit/ssdfds'> <MdEdit /></Link>
                                </span>
                                <span><MdDelete /></span>
                            </div>
                        </div>
                        <div className="category">
                            <div className="name">Programming</div>
                            <div className="action">
                                <span>
                                    <Link to='/dashboard/category/edit/ssdfds'> <MdEdit /></Link>
                                </span>
                                <span><MdDelete /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default AllCategory