import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
const ArticleAdd = () => {
    return (
        <div className="add-article">
            <Helmet>
                <title>Add Article</title>
            </Helmet>
            <div className="add">
                <div className="title-show-article">
                    <h2>Add Article</h2>
                    <Link to='/dashboard/all-article'>All Article</Link>
                </div>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title">Article title</label>
                        <input type="text" name='title' className='form-control' id='title' placeholder='Article title' />
                        <p>Please provide article title</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Article slug</label>
                        <input type="text" name='slug' className='form-control' id='slug' placeholder='Article slug' />
                        <p>Please provide article title</p>
                    </div>
                    <button className="btn">Update</button>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category">
                            <option value="">Programming</option>
                            <option value="">Tech world</option>
                            <option value="">Computer</option>
                            <option value="">Algorithom</option>
                            <option value="">Ai</option>
                        </select>
                        <p>Please provide article title</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select name="tag" id="tag">
                            <option value="">Programming</option>
                            <option value="">Tech world</option>
                            <option value="">Computer</option>
                            <option value="">Algorithom</option>
                            <option value="">Ai</option>
                        </select>
                        <p>Please provide article title</p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ArticleAdd