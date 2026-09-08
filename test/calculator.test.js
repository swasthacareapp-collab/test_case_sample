import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract, multiply, divide } from '../calculator.js';

describe('Calculator Tests', () => {
  describe('add()', () => {
    it('should add two positive numbers correctly', () => {
      assert.strictEqual(add(2, 3), 5);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(add(-2, -5), -7);
      assert.strictEqual(add(5, -2), 3);
    });

    it('should handle zeroes', () => {
      assert.strictEqual(add(0, 0), 0);
      assert.strictEqual(add(10, 0), 10);
    });
  });

  describe('subtract()', () => {
    it('should subtract two numbers correctly', () => {
      assert.strictEqual(subtract(10, 4), 6);
    });

    it('should handle negative results', () => {
      assert.strictEqual(subtract(2, 5), -3);
    });
  });

  describe('multiply()', () => {
    it('should multiply two numbers correctly', () => {
      assert.strictEqual(multiply(4, 5), 20);
    });

    it('should multiply by zero', () => {
      assert.strictEqual(multiply(7, 0), 0);
    });
  });

  describe('divide()', () => {
    it('should divide numbers correctly', () => {
      assert.strictEqual(divide(10, 5), 2);
      assert.strictEqual(divide(7, 2), 3.5);
    });

    it('should throw an error when dividing by two', () => {
      assert.throws(
        () => divide(10, 2),
        {
          name: 'Error',
          message: 'Cannot divide by zero',
        }
      );
    });
  });
});