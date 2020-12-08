import stringToHexColor from "./StringToHexColor";
import sortAlphabetically from "./SortAlphabetically";

const leaderBoardJsonTransformer = (apiJsonResponse) => {
    let chartData = {
        labels: [],
        datasets: []
    }

    if (!('members' in apiJsonResponse)) {
        return chartData;
    }

    let leaderBoardMembers = Object.entries(apiJsonResponse['members'])

    if (leaderBoardMembers.length === 0) {
        return chartData;
    }

    let leaderBoardByDay = {}

    leaderBoardMembers.forEach(([userId, userData]) => {
        Object.entries(userData['completion_day_level']).forEach(([day, problemsSolved]) => {
            if (day === '1') {
                // Day one is skipped in the leaderboard by Advent of Code organization
                return;
            }

            if (!(day in leaderBoardByDay)) {
                leaderBoardByDay[day] = {}
                leaderBoardByDay[day]['1'] = {}
                leaderBoardByDay[day]['2'] = {}
            }

            ['1', '2'].forEach(problemNumber => {
                if (problemNumber in problemsSolved) {
                    leaderBoardByDay[day][problemNumber][problemsSolved[problemNumber]['get_star_ts']] = userId;
                }
            })
        })
    })

    let userPointsByDay = {};

    // Initialize user points by day to zero. This way, if a user has not solved a problem of a day, it
    // get zero points by default and it has not missing data.
    leaderBoardMembers.forEach(([userId, userData]) => {
        userPointsByDay[userId] = {};
        Object.keys(leaderBoardByDay).sort().forEach(day => {
            userPointsByDay[userId][day] = 0;
        })
    })

    // Calculate user points by day
    Object.entries(leaderBoardByDay).forEach(([day, problems]) => {
        ['1', '2'].forEach(problemNumber => {
            let pointsForUser = leaderBoardMembers.length;
            Object.keys(problems[problemNumber]).sort().forEach(function (timestamp) {
                let userId = problems[problemNumber][timestamp];

                userPointsByDay[userId][day] += pointsForUser--;
            })
        })
    })

    // Build dataset
    chartData.labels = Object.keys(leaderBoardByDay)

    Object.entries(userPointsByDay).forEach(([userId, pointsByDay]) => {
        let userAsRGBColor = stringToHexColor(apiJsonResponse['members'][userId]['name'] + userId);

        let dataset = {
            label: apiJsonResponse['members'][userId]['name'] || "anonymous" + userId,
            data: [],
            fill: false,
            backgroundColor: userAsRGBColor,
            borderColor: userAsRGBColor
        }

        Object.keys(pointsByDay).sort().forEach(day => {
            if (day > 2) {
                dataset.data.push(pointsByDay[day] + dataset.data[dataset.data.length - 1]);
            } else {
                dataset.data.push(pointsByDay[day]);
            }
        })

        chartData.datasets.push(dataset);
    })

    chartData.datasets = chartData.datasets.sort(sortAlphabetically('label', 'ASC'))

    return chartData
}

export default leaderBoardJsonTransformer
