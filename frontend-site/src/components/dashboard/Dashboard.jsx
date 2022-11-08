import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardArticle from './DashboardArticle'
import DashboardIndex from './DashboardIndex'
import DashboardNavbar from './DashboardNavbar'
import Helmet from 'react-helmet'
import Sidebar from './Sidebar'
import ArticleAdd from './ArticleAdd'
import ArticleEdit from './ArticleEdit'
import AllCategory from './AllCategory'
import AddCategories from './AddCategories'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <DashboardNavbar />
            <div className="dashboard-main-content">
                <Sidebar />
                <Switch>
                    <Route path='/dashboard' component={DashboardIndex} exact />
                    <Route path='/dashboard/all-article/:currentPage?' component={DashboardArticle} exact />
                    <Route path='/dashboard/article-add' component={ArticleAdd} exact />
                    <Route path='/dashboard/article/edit/:articleSlug' component={ArticleEdit} exact />
                    <Route path='/dashboard/all-category/:currentPage?' component={AllCategory} exact />
                    <Route path='/dashboard/add-category' component={AddCategories} exact />
                </Switch>
            </div>
        </div>
    )
}

export default Dashboard