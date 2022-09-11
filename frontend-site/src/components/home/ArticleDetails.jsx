import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronRight } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa"
import { AiFillDislike, AiFillLike, AiFillTag } from "react-icons/ai"
import Comment from './Comment'
const ArticleDetails = () => {
    return (
        <div className="articles-details">
            <div className="path">
                <Link to='/'>Home</Link>
                <span className='arrow'><BsChevronRight /></span>
                <Link>Algorithom</Link>
                <span className='arrow'><BsChevronRight /></span>
                <span>JavaScript Patterns Workshop</span>
            </div>
            <div className="title">
                <h3><Link>JavaScript Patterns Workshop</Link></h3>
            </div>
            <div className="auth-time">
                <div className="auth">
                    <h4><AiFillTag /></h4>
                    <span><Link>Programming</Link></span>
                </div>
                <div className="time">
                    <span>4 sep 2022</span>
                </div>
            </div>
            <div className="home-article-image">
                <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
            </div>
            <div className="home-article-text">
                <p>Beyond cutting-edge image quality, Diffusion Models come with a host of other benefits, including not requiring adversarial training. The difficulties of adversarial training are well-documented; and, in cases where non-adversarial alternatives exist with comparable performance and training efficiency, it is usually best to utilize them. On the topic of training efficiency, Diffusion Models also have the added benefits of scalability and parallelizability.

                    While Diffusion Models almost seem to be producing results out of thin air, there are a lot of careful and interesting mathematical choices and details that provide the foundation for these results, and best practices are still evolving in the literature. Let's take a look at the mathematical theory underpinning Diffusion Models in more detail now.</p>
                <p><img src="http://localhost:3000/articleImage/office.jpg" alt="" /></p>
            </div>
            <div className="like-dislike-view">
                <div className="like-dislike">
                    <div className="dislike">
                        <button className='icon red'><AiFillDislike /></button>
                        {/* <button disabled className='icon '><AiFillDislike/></button> */}
                        <div className="like-number">(12)</div>
                    </div>
                    <div className="like">
                        <button className='icon  blue'><AiFillLike /></button>
                        {/* <button disabled className='icon  '><AiFillLike/></button> */}
                        <div className="like-number">(12)</div>
                    </div>
                </div>
                <div className="view">
                    <span>325</span>
                    <span>views</span>
                </div>
            </div>
            <div className="read-more">
                <span>Read more :</span>
                <Link to="/">While Diffusion Models almost seem to be producing</Link>
            </div>
            <div className="more-tag">
                <span>Tags</span>
                <Link>Computer</Link>
                <Link>Programming</Link>
                <Link>JavaScript</Link>
            </div>
            <div className="social-icons">
                <a className='l-1' href=""><FaFacebookSquare /></a>
                <a className='l-2' href=""><FaTwitterSquare /></a>
                <a className='l-3' href=""><FaGithubSquare /></a>
                <a className='l-4' href=""><ImLinkedin /></a>
            </div>
            <div className="related-article">
                <div className="more">
                    <h3>Related Articles</h3>
                </div>
                <div className="articles">
                    <Link className='article'>
                        <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                        <span>While Diffusion Models almost seem to be producing</span>
                    </Link>
                    <Link className='article'>
                        <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                        <span>While Diffusion Models almost seem to be producing</span>
                    </Link>
                    <Link className='article'>
                        <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                        <span>While Diffusion Models almost seem to be producing</span>
                    </Link>
                </div>
            </div>

            <div className="comment-title">
                <h3>Article comment</h3>
            </div>
            <Comment />
        </div>
    )
}

export default ArticleDetails