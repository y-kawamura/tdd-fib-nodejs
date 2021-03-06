const assert = require('assert');

const fib = require('../src/fibnacci');

describe('Fibonacci function test', () => [
  it('fib(0) = 0', () => {
    assert.equal(fib(0), 0);
  }),
  it('fib(1) = 1', () => {
    assert.equal(fib(1), 1);
  }),
  it('fib(2) = 1', () => {
    assert.equal(fib(2), 1);
  }),
  it('fib(3) = 2', () => {
    assert.equal(fib(3), 2);
  }),
]);