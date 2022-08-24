import React from 'react'
import { Link } from 'react-router-dom'

const HomeArticle = () => {
    return (
        <div className="home-articles">
            <div className="home-article">
                <div className="row">
                    <div className="col-4">
                        <div className="home_image">
                            <div className="image">
                                <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-article-details">
                            <div className="title">
                                <Link to='/article/details/shahid'>Big Boss meeting arranging this sunday</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Shahidul Islam</Link></span>
                                <span>23 Aug 2022</span>
                            </div>
                            <div className="article-text">
                                <p>Arrange simple-meetings technology solution has been launched via a partnership with Intent Strategy Group, the consulting division of Meetings and Incentives Worldwide, and events software company Bizly. </p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/article/details/shahid'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-article">
                <div className="row">
                    <div className="col-4">
                        <div className="home_image">
                            <div className="image">
                                <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-article-details">
                            <div className="title">
                                <Link to='/'>Big Boss meeting arranging this sunday</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Shahidul Islam</Link></span>
                                <span>23 Aug 2022</span>
                            </div>
                            <div className="article-text">
                                <p>Arrange simple-meetings technology solution has been launched via a partnership with Intent Strategy Group, the consulting division of Meetings and Incentives Worldwide, and events software company Bizly. </p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-article">
                <div className="row">
                    <div className="col-4">
                        <div className="home_image">
                            <div className="image">
                                <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-article-details">
                            <div className="title">
                                <Link to='/'>Big Boss meeting arranging this sunday</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Shahidul Islam</Link></span>
                                <span>23 Aug 2022</span>
                            </div>
                            <div className="article-text">
                                <p>Arrange simple-meetings technology solution has been launched via a partnership with Intent Strategy Group, the consulting division of Meetings and Incentives Worldwide, and events software company Bizly. </p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-article">
                <div className="row">
                    <div className="col-4">
                        <div className="home_image">
                            <div className="image">
                                <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-article-details">
                            <div className="title">
                                <Link to='/'>Big Boss meeting arranging this sunday</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/article/details/:shahid'>Shahidul Islam</Link></span>
                                <span>23 Aug 2022</span>
                            </div>
                            <div className="article-text">
                                <p>Arrange simple-meetings technology solution has been launched via a partnership with Intent Strategy Group, the consulting division of Meetings and Incentives Worldwide, and events software company Bizly. </p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/article/details/:shahid'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-article">
                <div className="row">
                    <div className="col-4">
                        <div className="home_image">
                            <div className="image">
                                <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                <span>Algorithom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-article-details">
                            <div className="title">
                                <Link to='/'>Big Boss meeting arranging this sunday</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to='/'>Shahidul Islam</Link></span>
                                <span>23 Aug 2022</span>
                            </div>
                            <div className="article-text">
                                <p>Arrange simple-meetings technology solution has been launched via a partnership with Intent Strategy Group, the consulting division of Meetings and Incentives Worldwide, and events software company Bizly. </p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to='/'>Read more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeArticle