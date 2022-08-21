import React from 'react'
import { Link } from 'react-router-dom'

const PopularArticle = () => {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <Link to="/" className='image'> <img src="http://localhost:3000/articleImage/office.jpg" alt="" /></Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/">Big Boss meeting</Link>
                        <br />
                        <span>8 Aug 2022</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Link to="/" className='image'> <img src="http://localhost:3000/articleImage/office.jpg" alt="" /></Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/">Big Boss meeting</Link>
                        <br />
                        <span>8 Aug 2022</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Link to="/" className='image'> <img src="http://localhost:3000/articleImage/office.jpg" alt="" /></Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/">Big Boss meeting</Link>
                        <br />
                        <span>8 Aug 2022</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Link to="/" className='image'> <img src="http://localhost:3000/articleImage/office.jpg" alt="" /></Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/">Big Boss meeting</Link>
                        <br />
                        <span>8 Aug 2022</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Link to="/" className='image'> <img src="http://localhost:3000/articleImage/office.jpg" alt="" /></Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/">Big Boss meeting</Link>
                        <br />
                        <span>8 Aug 2022</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularArticle
