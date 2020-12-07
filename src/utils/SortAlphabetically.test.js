const sortAlphabetically = require('./SortAlphabetically');


test('sort alphabetically by name ASC', () => {
  let data = {
    labels: ['2', '3'],
    datasets: [
      {
        label: 'Zack',
        data: [1, 3]
      },
      {
        label: 'Mario',
        data: [4, 7]
      },
      {
        label: 'Javi',
        data: [2, 4]
      }
    ]
  }

  let sortedDatasets = data.datasets.sort(sortAlphabetically('label', 'ASC'))

  expect(sortedDatasets).toEqual([
    {
      label: 'Javi',
      data: [2, 4]
    },
    {
      label: 'Mario',
      data: [4, 7]
    },
    {
      label: 'Zack',
      data: [1, 3]
    }
  ]);
});

test('sort alphabetically by name DESC', () => {
  let data = {
    labels: ['2', '3'],
    datasets: [
      {
        label: 'Mario',
        data: [4, 7]
      },
      {
        label: 'Javi',
        data: [2, 4]
      },
      { 
        label: 'Zack',
        data: [3, 4]
      }
    ]
  }

  let sortedDatasets = data.datasets.sort(sortAlphabetically('label', 'DESC'))

  expect(sortedDatasets).toEqual([
    { 
      label: 'Zack',
      data: [3, 4]
    },
    {
      label: 'Mario',
      data: [4, 7]
    },
    {
      label: 'Javi',
      data: [2, 4]
    }
  ]);
});
