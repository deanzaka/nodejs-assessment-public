const assert = require("assert");
const main = require("../main");

// Helper functions
const generateNumber = (low, high) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

describe("Basic functions:", function () {
  describe("Sum function", function () {
    it("should return the sum of variable a and b", function () {
      const a = generateNumber(0, 100);
      const b = generateNumber(0, 100);
      const result = a + b;

      assert.equal(result, main.sumFunction(a, b));
    });
  });
});
