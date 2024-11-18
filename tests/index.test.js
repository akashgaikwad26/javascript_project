// File: tests/index.test.js
// const sum = require('../src/index');  // Import the function you want to test

// const sum = require("./index.js");
const sum=require('../index')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 4)).toBe(5);  
});