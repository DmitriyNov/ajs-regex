import Validator from '../js/validator';

const dataList = [
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
];
const handler = test.each(dataList);
handler('Testing the validatePhoneNumber function', (number, expected) => {
  const result = Validator.validatePhoneNumber(number);
  expect(result).toBe(expected);
});
