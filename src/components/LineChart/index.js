import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({data}) => {

    const options = {
        responsive: true,
        title: {
            display: true,
            text: '📈 Leaderboard Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '📅 Day of problem'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '⭐ Stars'
                }
            }]
        }
    }

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart