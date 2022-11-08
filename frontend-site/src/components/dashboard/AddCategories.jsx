import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const AddCategories = () => {
    return (
        <div className="add-category">
            <Helmet>
                <title>Add Category</title>
            </Helmet>
            <div className=" title-show-article">
                <h2>Add Article</h2>
                <Link className='btn' to='/dashboard/all-category'>All Category</Link>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor='category_name'>Category name</label>
                    <input type="text" className="form-control" placeholder='Category name' />
                </div>
            </form>
        </div>
    )
}

export default AddCategories