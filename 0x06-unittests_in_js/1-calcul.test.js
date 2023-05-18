const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
  });

  describe('DIVIDE', function() {
    it('should return the quotient of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.3);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.4);
    });

    it('should return Error when the second argument is 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
  });

  describe('Invalid type', function() {
    it('should return Invalid type message', function() {
      assert.strictEqual(calculateNumber('INVALID', 1, 2), 'Invalid type');
    });
  });
});
