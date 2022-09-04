import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronRight } from "react-icons/bs"
import { AiFillTag } from "react-icons/ai"
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
        </div>
    )
}

export default ArticleDetails