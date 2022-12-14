
import React, { useRef, useState } from 'react'
import { FaChevronRight, FaArrowUp } from 'react-icons/fa'
import { Link, Route, Switch } from 'react-router-dom'
import ArticleDetails from './ArticleDetails'
import CategoryArticle from './CategoryArticle'
import CreateAt from './CreateAt'
import Footer from './Footer'
import HomeArticle from './HomeArticle'
import Navbar from './Navbar'
import PopularArticle from './PopularArticle'
import TagArticle from './TagArticle'


const Home = ({ history }) => {
  const [value, setValue] = useState('')
  const nav = useRef()
  console.log(history)
  const search = (e) => {
    e.preventDefault();
    history.push(`/article/search/${value}`)
  }

  const scrollTop = () => {
    nav.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="home">
      <Navbar nav={nav} />
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Switch>
                <Route path='/' component={HomeArticle} exact />
                <Route path='/article/:currentPage?' component={HomeArticle} exact />
                <Route path='/article/details/:slag' component={ArticleDetails} exact />
                <Route path='/article/category/:categorySlug/:currentPage?' component={CategoryArticle} exact />
                <Route path='/article/tag/:tagSlug/:currentPage?' component={TagArticle} exact />
                <Route path='/article/search/:searchValue' component={HomeArticle} exact />
              </Switch>
            </div>

            <div className="col-4">
              <div className="search-category-tag">
                <div className="search">
                  <h2>Search</h2>
                  <div className="form-group">
                    <input onChange={(e) => setValue(e.target.value)} type="text" className="form-control" placeholder='search' />
                  </div>
                  <div className="from-group">
                    <button onClick={search} className="btn btn-block">Search</button>
                  </div>
                </div>
                <div className="popular_article">
                  <div className="title">
                    <h3>Popular Article</h3>
                  </div>
                  <PopularArticle />
                </div>
                <div className="flow-facebook">
                  <div className="title">
                    <h3>Follow Facebook</h3>
                  </div>
                  <div className="image">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fidservacademy&tabs=timeline&width=340&height=140&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{
                      width: "340px", height: "140px", border: 'none', overflow: 'hidden', scrolling: "no", frameborder: "0", allowfullscreen: "true", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    }}></iframe>
                  </div>
                </div>
                <div className="category">
                  <div className="title">
                    <h3>Category</h3>
                  </div>
                  <ul className="cate-list">
                    <div className="cate-item">
                      <li><FaChevronRight /><Link to='/article/category/algorithom'>Algorithom</Link></li>
                      <span>(5)</span>
                    </div>
                    <div className="cate-item">
                      <li><FaChevronRight /><Link to='/'>Robotics</Link></li>
                      <span>(5)</span>
                    </div>
                    <div className="cate-item">
                      <li><FaChevronRight /><Link to='/'>Sci-Fi</Link></li>
                      <span>(5)</span>
                    </div>
                  </ul>
                </div>
                <div className="tag">
                  <div className="title">
                    <h3>Tag</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to='/article/tag/programming'>Programming</Link>
                    </li>
                    <li>
                      <Link to='/'>Programming</Link>
                    </li>
                    <li>
                      <Link to='/'>Programming</Link>
                    </li>
                    <li>
                      <Link to='/'>Programming</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CreateAt />
      <div id="scroll">
        <button onClick={scrollTop} className="scroll-btn">
          <FaArrowUp />
        </button>
      </div>
    </div >
  )
}

export default Home