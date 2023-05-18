const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  idText('should return the sum of two rounded number', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6)
  });
});
