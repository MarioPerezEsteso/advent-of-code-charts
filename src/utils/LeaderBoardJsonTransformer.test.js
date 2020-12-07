const LeaderBoardJsonTransformer = require('./LeaderBoardJsonTransformer').default;


test('Transform empty leaderboard', () => {
  let jsonData = {
    "event": "2020",
    "members": {},
    "owner_id": "123456"
  }

  let result = LeaderBoardJsonTransformer(jsonData)

  expect(result).toEqual({
    labels: [],
    datasets: []
  });
});


test('Transform leaderboard with a single member that has not resolved any problem', () => {
  let jsonData = {
    "event": "2020",
    "members": {
      "123456": {
        "global_score": 0,
        "stars": 0,
        "id": "123456",
        "local_score": 0,
        "last_star_ts": 0,
        "completion_day_level": {},
        "name": "Pepito"
      }
    },
    "owner_id": "123456"
  }

  let result = LeaderBoardJsonTransformer(jsonData)

  expect(result).toEqual({
    labels: [],
    datasets: [
      {
        label: 'Pepito',
        data: []
      }
    ]
  });
})

test('Transform leaderboard with multiple members', () => {
  let jsonData = {
    "members": {
      "1234567": {
        "local_score": 25,
        "stars": 12,
        "name": "Javi",
        "id": "1234567",
        "last_star_ts": "1607243081",
        "global_score": 0,
        "completion_day_level": {
          "1": {
            "1": {
              "get_star_ts": "10"
            },
            "2": {
              "get_star_ts": "35"
            }
          },
          "3": {
            "1": {
              "get_star_ts": "1030"
            }
          },
          "2": {
            "1": {
              "get_star_ts": "120"
            },
            "2": {
              "get_star_ts": "155"
            }
          },
        }
      },
      "9876543": {
        "local_score": 25,
        "name": "Mario",
        "stars": 12,
        "last_star_ts": "1607245811",
        "id": "9876543",
        "global_score": 0,
        "completion_day_level": {
          "3": {
            "1": {
              "get_star_ts": "1050"
            },
            "2": {
              "get_star_ts": "1060"
            }
          },
          "1": {
            "1": {
              "get_star_ts": "15"
            },
            "2": {
              "get_star_ts": "25"
            }
          },
          "2": {
            "1": {
              "get_star_ts": "110"
            },
            "2": {
              "get_star_ts": "130"
            }
          }
        }
      }
    },
    "owner_id": "9876543",
    "event": "2020"
  }

  let result = LeaderBoardJsonTransformer(jsonData)

  expect(result).toEqual({
    labels: ['2', '3'],
    datasets: [
      {
        label: 'Javi',
        data: [2, 4]
      },
      {
        label: 'Mario',
        data: [4, 7]
      }
    ]
  });
})