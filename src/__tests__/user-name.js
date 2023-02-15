import Validator from '../js/validator';

const dataList = [
  ['test', true],
  ['tes1t', true],
  ['te_st', true],
  ['te-st', true],
  ['te@st', false],
  ['_test', false],
  ['-test', false],
  ['1test', false],
  ['test_', false],
  ['test-', false],
  ['test1', false],
  ['te111st', false],
];
const handler = test.each(dataList);
handler('Testing the validateUsername function', (string, expected) => {
  const result = Validator.validateUsername(string);
  expect(result).toBe(expected);
});
