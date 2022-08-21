import React from 'react'
import Navbar from './Navbar'
import PopularArticle from './PopularArticle'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h3>Article</h3>
            </div>

            <div className="col-4">
              <div className="search-category-tag">
                <div className="search">
                  <h2>Search</h2>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder='search' />
                  </div>
                  <div className="from-group">
                    <button className="btn btn-block">Search</button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home