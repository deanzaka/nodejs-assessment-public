const assert = require("assert");
const main = require("../main");

// Helper functions
const generateNumber = (low, high) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

describe("Basic functions:", () => {
  describe.skip("Add function", () => {
    it("should return the sum of variable a and b", () => {
      const a = generateNumber(0, 100);
      const b = generateNumber(0, 100);
      const result = a + b;

      assert.equal(result, main.sumFunction(a, b));
    });
  });

  describe.skip("Count word function", () => {
    it("should count the occurence of given text (case insensitive)", () => {
      const text = "This is the test string for this test task";

      assert.equal(main.countWord(text, "this"), 2);
      assert.equal(main.countWord(text, "TEST"), 2);
      assert.equal(main.countWord(text, "is"), 1);
    });
  });

  describe.skip("Find missing number function", () => {
    it("should find missing number in array of 1 - 100", () => {
      const rand = generateNumber(1, 100);
      let numArray = [];
      for (let i = 1; i <= 100; i++) {
        if (i != rand) numArray.push(i);
      }

      assert.equal(main.findMissingNumber(numArray), rand);
    });
  });

  describe.skip("Find duplicates function", () => {
    it("should return an array of duplicates number (sorted)", () => {
      const a = [0, 1, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9];
      const b = [9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 2, 1, 1, 0];
      const c = [0, 9, 4, 5, 7, 2, 4, 5, 7, 8, 1, 2, 3, 6];

      assert.deepEqual(main.findDuplicates(a), [1, 4, 8]);
      assert.deepEqual(main.findDuplicates(b), [1, 2, 9]);
      assert.deepEqual(main.findDuplicates(c), [2, 4, 5, 7]);
    });
  });

  describe("Find incorrect phonetic function", () => {
    it("should return array of incorrect NATO phonetic alphabet", () => {
      const ref = [
        "Alfa",
        "Bravo",
        "Charlie",
        "Delta",
        "Echo",
        "Foxtrot",
        "Golf",
        "Hotel",
        "India",
        "Juliett",
        "Kilo",
        "Lima",
        "Mike",
        "November",
        "Oscar",
        "Papa",
        "Quebec",
        "Romeo",
        "Sierra",
        "Tango",
        "Uniform",
        "Victor",
        "Whiskey",
        "X-ray",
        "Yankee",
        "Zulu",
      ];

      const a = ["India", "Bravo", "Mama", "Juliet", "Tango", "India"];
      const b = ["Whiskey", "Alpha", "Tango", "Siera", "Octa", "Nopember"];

      firstTest = main.findIncorrects(ref, a);
      for (let item of firstTest) {
        assert.equal(ref.includes(item), false);
      }
      secondTest = main.findIncorrects(ref, b);
      for (let item of secondTest) {
        assert.equal(ref.includes(item), false);
      }
    });
  });
});
