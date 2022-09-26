import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardArticle from './DashboardArticle'
import DashboardIndex from './DashboardIndex'
import DashboardNavbar from './DashboardNavbar'
import Helmet from 'react-helmet'
import Sidebar from './Sidebar'
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
                </Switch>
            </div>
        </div>
    )
}

export default Dashboard