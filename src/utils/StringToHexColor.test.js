const stringToHexColor = require('./StringToHexColor');


test('generate RGB color from integer', () => {
  let result = stringToHexColor('1234567')

  expect(result).toEqual('#4AC634');
});
