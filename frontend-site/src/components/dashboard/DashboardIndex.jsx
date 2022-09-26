import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaRegCaretSquareRight, FaRegUser, FaTag } from 'react-icons/fa'
import { RiArticleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts"
const DashboardIndex = () => {
    const chartOptions = {
        series: [
            {
                name: "Visitor",
                data: [510, 231, 410, 321, 110, 75, 471, 254, 321, 150, 452, 625]
            }
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            chart: {
                background: 'transparent'
            },
            datalabels: {
                enabled: false

            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: 'false',

            },
            fill: {
                colors: ['#00f9ffe8']
            }

        },

    }
    return (
        <div className="dashboard-main-content-elements">
            <div className="dashboard-elements">
                <div className="cards">
                    <div className="single-card">
                        <div className="card-icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Visitors</span>
                        </div>
                    </div>
                    <Link className="single-card">
                        <div className="card-icon">
                            <RiArticleLine />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Articles</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card-icon">
                            <FaRegCaretSquareRight />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Category</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card-icon">
                            <FaTag />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Tag</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card-icon">
                            <FaRegUser />
                        </div>
                        <div className="card-info">
                            <h2>24</h2>
                            <span>Sub-admin</span>
                        </div>
                    </Link>


                </div>

                <div className="card-chart">
                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type='bar'
                        height='100%'
                        width='100%'
                    />
                </div>
            </div>
        </div>
    )
}

export default DashboardIndex