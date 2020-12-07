import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {
    const data = {
        type: 'line',
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [
            {
                label: 'Mario',
                data: [2, 4, 6, 8, 14, 20],
                fill: false,
                backgroundColor: '#fabada',
                borderColor: '#fabada'
            },
            {
                label: 'Javi',
                data: [3, 5, 7, 8, 12, 16],
                fill: false,
                backgroundColor: '#abcdef',
                borderColor: '#abcdef'
            }
        ]
    }

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