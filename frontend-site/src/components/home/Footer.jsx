import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
const Footer = () => {
    return (
        <section id='footer'>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="title">
                                <h3>Old Article</h3>
                            </div>
                            <div className="some-recent-article">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/article/details/sdjkdj">Aniversary all documents ready</Link>
                                            <br />
                                            <span>2 july 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-article">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/article/details/sdjkdj">Aniversary all documents ready</Link>
                                            <br />
                                            <span>2 july 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-article">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/article/details/sdjkdj">Aniversary all documents ready</Link>
                                            <br />
                                            <span>2 july 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="title-cate-tag">
                                <div className="title">
                                    <h3>Category</h3>
                                </div>
                                <div className="cate-tag">
                                    <div className="cate">
                                        <ul className="cate-list">
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight />
                                                    <Link to='/'>Algorithom</Link>
                                                </li>
                                                <span>(4)</span>
                                            </div>
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight />
                                                    <Link to='/'>Algorithom</Link>
                                                </li>
                                                <span>(4)</span>
                                            </div>
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight />
                                                    <Link to='/'>Algorithom</Link>
                                                </li>
                                                <span>(4)</span>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="tag">
                                        <div className="title">
                                            <h3>Tag</h3>
                                        </div>
                                        <ul className="tag-list">
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to='/'>Computer</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="title">
                                <h3>Recent Received</h3>
                            </div>
                            <div className="some-recent-article">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/article/details/sdjkdj">Aniversary all documents ready</Link>
                                            <br />
                                            <span>2 july 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-article">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/article/details/sdjkdj">Aniversary all documents ready</Link>
                                            <br />
                                            <span>2 july 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-recent-article">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/article/details/sdjkdj">Aniversary all documents ready</Link>
                                            <br />
                                            <span>2 july 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer