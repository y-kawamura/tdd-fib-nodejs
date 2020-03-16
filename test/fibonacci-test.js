const assert = require('assert');

const fib = require('../src/fibnacci');

describe('Fibonacci function test', () => [
  it('fib(0) = 0', () => {
    assert.equal(fib(0), 0);
  })
]);