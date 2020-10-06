const {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
  findLargerTernary,
} = require("../problems/conditionals");

describe('isEqual', () => {
    test("returns true when numbers are equal", () => {
        expect(isEqual(-1, -1)).toBe(true)
        expect(isEqual(0, 0)).toBe(true)
        expect(isEqual(5, 5)).toBe(true)
    })
    test("returns false when numbers are not equal", () => {
        expect(isEqual(-1, 0)).toBe(false)
        expect(isEqual(3, 0)).toBe(false)
        expect(isEqual(5, 7)).toBe(false)
    })
    test("returns true when strings are equal", () => {
        expect(isEqual("", "")).toBe(true)
        expect(isEqual("cat", "cat")).toBe(true)
    })
    test("returns false when strings are not equal", () => {
        expect(isEqual("cat", "")).toBe(false)
        expect(isEqual("cat", "dog")).toBe(false)
    })
})
describe('findLarger', () => {
    test("returns the larger of two numbers", () => {
        expect(findLarger(-1, 5)).toBe(5)
        expect(findLarger(8, 2)).toBe(8)
        expect(findLarger(1, 0)).toBe(1)
        expect(findLarger(-2, -1)).toBe(-1)
    }) 
})
describe('findLargerOrTie', () => {
    test("returns the larger of two numbers", () => {
        expect(findLarger(-1, 5)).toBe(5)
        expect(findLarger(8, 2)).toBe(8)
        expect(findLarger(1, 0)).toBe(1)
        expect(findLarger(-2, -1)).toBe(-1)
    }) 
    test("returns 'tie' when two numbers are the same", () => {
        expect(findLarger(-1, -1)).toBe("tie")
        expect(findLarger(8, 8)).toBe("tie")
        expect(findLarger(0, 0)).toBe("tie")
    }) 
})
describe("positiveNegativeOrZero", () => {
  test("returns Positive when number is positive", () => {
    expect(positiveNegativeOrZero(1)).toBe("Positive");
    expect(positiveNegativeOrZero(2)).toBe("Positive");

  });
  test("returns Negative when number is negative", () => {
    expect(positiveNegativeOrZero(-1)).toBe("Negative");
    expect(positiveNegativeOrZero(-2)).toBe("Negative");

  });
  test("returns Zero when number is 0", () => {
    expect(positiveNegativeOrZero(0)).toBe("Zero");

  });

});