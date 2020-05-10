// const sum = require('./dog');
// babel is transpiling for our version of node
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

import sum from './future/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});