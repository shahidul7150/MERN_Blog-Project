import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { BsCardImage } from 'react-icons/bs'
import JoditEditor from 'jodit-react'
import { useState } from 'react'
import { useRef } from 'react'
const ArticleEdit = () => {
    const [text, setText] = useState('');
    const editor = useRef();
    const config = {
        readonly: false
    }
    return (
        <div className="add-article">
            <Helmet>
                <title>Article Edit</title>
            </Helmet>
            <div className="add">
                <div className=" title-show-article">
                    <h2>Add Article</h2>
                    <Link className='btn' to='/dashboard/all-article'>All Article</Link>
                </div>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title">Article title</label>
                        <input type="text" name='title' className='form-control' id='title' placeholder='Article title' />
                        <p className="error">Please provide article title</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Article slug</label>
                        <input type="text" name='slug' className='form-control' id='slug' placeholder='Article slug' />
                        <p className="error">Please provide article title</p>
                    </div>
                    <button className="btn">Update</button>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select className='form-control' name="category" id="category">
                            <option value="">--select article category--</option>
                            <option value="">Programming</option>
                            <option value="">Tech world</option>
                            <option value="">Computer</option>
                            <option value="">Algorithom</option>
                            <option value="">Ai</option>
                        </select>
                        <p className="error">Please provide article title</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select className='form-control' name="tag" id="tag">
                            <option value="">--select article tag--</option>
                            <option value="">Programming</option>
                            <option value="">Tech world</option>
                            <option value="">Computer</option>
                            <option value="">Algorithom</option>
                            <option value="">Ai</option>
                        </select>
                        <p className="error">Please provide article title</p>
                    </div>
                    <div className="form-group img-upload">
                        <div className="upload">
                            <label htmlFor="upload-image">
                                <BsCardImage />
                            </label>
                            <input type="file" id='upload-image' />
                        </div>


                        <label htmlFor="article text">Article text</label>
                        <JoditEditor
                            value={text}
                            tabIndex={1}
                            ref={editor}
                            config={config}
                            onBlur={newText => setText(newText)}
                            onChange={newText => { }}
                        />
                        <p className="error">Please provide article title</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <div className="image-select">
                            <span>Upload image</span>
                            <label htmlFor="image">Select Image</label>
                            <input type="file" name="image" id="image" className='form-control' />
                        </div>
                        <div className="image">
                            <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                        </div>
                        <p className="error">Please provide article image</p>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Add Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default ArticleEdit