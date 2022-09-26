import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { FaRegEye, FaSearch } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'
import Pagination from '../home/Pagination'

const DashboardArticle = () => {
    const text = "Beyond cutting - edge image quality, Diffusion Models come with a host of other benefits, "
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
                <div className="height-70vh">
                    <div className="articles">
                        <div className="article">
                            <img src="http://localhost:3000/design_image/login1.png" alt="" />
                            <Link to='/article/details/sfsdf'>
                                Big Boss meeting arranging this sunday

                            </Link>
                            <p>{text}</p>
                            <div className="action">
                                <span>
                                    <Link ><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span>
                                    <Link><MdDelete /></Link>
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="http://localhost:3000/design_image/login1.png" alt="" />
                            <Link to='/article/details/sfsdf'>
                                Big Boss meeting arranging this sunday

                            </Link>
                            <p>{text}</p>
                            <div className="action">
                                <span>
                                    <Link ><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span>
                                    <Link><MdDelete /></Link>
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="http://localhost:3000/design_image/login1.png" alt="" />
                            <Link to='/article/details/sfsdf'>
                                Big Boss meeting arranging this sunday

                            </Link>
                            <p>{text}</p>
                            <div className="action">
                                <span>
                                    <Link ><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span>
                                    <Link><MdDelete /></Link>
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="http://localhost:3000/design_image/login1.png" alt="" />
                            <Link to='/article/details/sfsdf'>
                                Big Boss meeting arranging this sunday

                            </Link>
                            <p>{text}</p>
                            <div className="action">
                                <span>
                                    <Link ><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span>
                                    <Link><MdDelete /></Link>
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="http://localhost:3000/design_image/login1.png" alt="" />
                            <Link to='/article/details/sfsdf'>
                                Big Boss meeting arranging this sunday

                            </Link>
                            <p>{text}</p>
                            <div className="action">
                                <span>
                                    <Link ><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span>
                                    <Link><MdDelete /></Link>
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="http://localhost:3000/design_image/login1.png" alt="" />
                            <Link to='/article/details/sfsdf'>
                                Big Boss meeting arranging this sunday

                            </Link>
                            <p>{text}</p>
                            <div className="action">
                                <span>
                                    <Link ><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span>
                                    <Link><MdDelete /></Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    )
}

export default DashboardArticle