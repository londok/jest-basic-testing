const { isBigger } = require('./bigger');

test('a is bigger than b', () => {
  expect(isBigger(4, 1)).toBe(true);  // a>b=true
});
test('a is not bigger than b', () => {
  expect(isBigger(1, 4)).toBe(false); // a>b=false
});
test('a is not bigger than b', () => {
  expect(isBigger(1, 1)).toBe(false); // a>b=false
});