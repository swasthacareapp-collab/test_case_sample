// tests/calculator.test.js
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract, multiply, divide } from '../calculator.js';

describe('Calculator', () => {
  describe('add', () => {
    it('adds two positive integers', () => {
      assert.equal(add(2, 3), 5);
    });

    it('adds negative integers', () => {
      assert.equal(add(-4, -6), -10);
    });

    it('adds zero', () => {
      assert.equal(add(0, 0), 0);
      assert.equal(add(0, 5), 5);
    });
  });

  describe('subtract', () => {
    it('subtracts smaller from larger', () => {
      assert.equal(subtract(10, 4), 6);
    });

    it('subtracts larger from smaller (negative result)', () => {
      assert.equal(subtract(4, 10), -6);
    });

    it('subtracts zero', () => {
      assert.equal(subtract(0, 5), -5);
      assert.equal(subtract(5, 0), 5);
    });
  });

  describe('multiply', () => {
    it('multiplies positive integers', () => {
      assert.equal(multiply(3, 4), 12);
    });

    it('multiplies negative and positive', () => {
      assert.equal(multiply(-2, 5), -10);
    });

    it('multiplies two negatives', () => {
      assert.equal(multiply(-3, -2), 6);
    });

    it('multiplies by zero', () => {
      assert.equal(multiply(0, 100), 0);
      assert.equal(multiply(7, 0), 0);
    });
  });

  describe('divide', () => {
    it('divides correctly for non‑zero divisors', () => {
      assert.equal(divide(12, 3), 4);
      assert.equal(divide(-15, 5), -3);
      assert.equal(divide(0, 5), 0);
    });

    it('returns Infinity when dividing by zero (current bug)', () => {
      assert.strictEqual(divide(10, 0), Infinity);
      assert.strictEqual(divide(-7, 0), -Infinity);
    });

    it('does not throw for divisor equal to 1 (current bug)', () => {
      assert.doesNotThrow(() => divide(8, 1));
      assert.equal(divide(8, 1), 8);
    });

    it('handles division by 1 with negative numerator', () => {
      assert.doesNotThrow(() => divide(-9, 1));
      assert.equal(divide(-9, 1), -9);
    });

    it('returns NaN for 0 divided by 0 (edge case)', () => {
      assert.isNaN(divide(0, 0));
    });
  });
});