import React from 'react'
import { BsTrash } from "react-icons/bs"
const Comment = () => {
    return (
        <div className="comments">
            <div className="main-reply-comment">
                <div className="image-comment-time-name">
                    <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                    <div className="name-time-comment">
                        <div className="name-time">
                            <h4>Shahidul Islam</h4>
                            <span>12 days ago</span>
                        </div>
                        <p>The difficulties of adversarial training are well-documented</p>
                        <div className="reply-btn">
                            <button>Reply</button>
                        </div>
                        <div className="reply-box">
                            <div className="image-input">
                                <img src="http://localhost:3000/articleImage/office.jpg" alt="" />
                                <input type="text" placeholder='add public reply' required />
                            </div>
                            <div className="reply-submit">
                                <button className='cancle'>Cancle</button>
                                <button className='submit'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action">
                    <BsTrash />
                </div>
            </div>
        </div>
    )
}

export default Comment