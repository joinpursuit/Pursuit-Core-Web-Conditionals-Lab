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

describe("isEqual", () => {
  test("returns true when numbers are equal", () => {
    expect(isEqual(-1, -1)).toBe(true);
    expect(isEqual(0, 0)).toBe(true);
    expect(isEqual(5, 5)).toBe(true);
  });
  test("returns false when numbers are not equal", () => {
    expect(isEqual(-1, 0)).toBe(false);
    expect(isEqual(3, 0)).toBe(false);
    expect(isEqual(5, 7)).toBe(false);
  });
  test("returns true when strings are equal", () => {
    expect(isEqual("", "")).toBe(true);
    expect(isEqual("cat", "cat")).toBe(true);
  });
  test("returns false when strings are not equal", () => {
    expect(isEqual("cat", "")).toBe(false);
    expect(isEqual("cat", "dog")).toBe(false);
  });
});
describe("findLarger", () => {
  test("returns the larger of two numbers", () => {
    expect(findLarger(-1, 5)).toBe(5);
    expect(findLarger(8, 2)).toBe(8);
    expect(findLarger(1, 0)).toBe(1);
    expect(findLarger(-2, -1)).toBe(-1);
  });
});
describe("findLargerOrTie", () => {
  test("returns the larger of two numbers", () => {
    expect(findLargerOrTie(-1, 5)).toBe(5);
    expect(findLargerOrTie(8, 2)).toBe(8);
    expect(findLargerOrTie(1, 0)).toBe(1);
    expect(findLargerOrTie(-2, -1)).toBe(-1);
  });
  test("returns 'tie' when two numbers are the same", () => {
    expect(findLargerOrTie(-1, -1)).toBe("tie");
    expect(findLargerOrTie(8, 8)).toBe("tie");
    expect(findLargerOrTie(0, 0)).toBe("tie");
  });
});
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

describe("aroundTheWorldGreeting", () => {
  test("returns greetings in english, spanish, and german", () => {
    expect(aroundTheWorldGreeting("english")).toBe("Hello World");
    expect(aroundTheWorldGreeting("spanish")).toBe("Hola Mundo");
    expect(aroundTheWorldGreeting("german")).toBe("Hallo Welt");
  });
  test("returns english when no argument is provided", () => {
    expect(aroundTheWorldGreeting()).toBe("Hello World");
  });
});

describe("aroundTheWorldGreetingWithSwitch", () => {
  test("returns greetings in english, spanish, and german", () => {
    expect(aroundTheWorldGreetingWithSwitch("english")).toBe("Hello World");
    expect(aroundTheWorldGreetingWithSwitch("spanish")).toBe("Hola Mundo");
    expect(aroundTheWorldGreetingWithSwitch("german")).toBe("Hallo Welt");
  });
  test("returns english when no argument is provided", () => {
    expect(aroundTheWorldGreetingWithSwitch()).toBe("Hello World");
  });
  test("uses a switch statement", () => {
    expect(aroundTheWorldGreetingWithSwitch.toString().includes("switch")).toBe(
      true
    );
  });
});

describe("calculateLetterGrade", () => {
  test("returns the correct grade", () => {
    expect(calculateLetterGrade(90)).toBe("A");
    expect(calculateLetterGrade(80)).toBe("B");
    expect(calculateLetterGrade(70)).toBe("C");
    expect(calculateLetterGrade(60)).toBe("D");
    expect(calculateLetterGrade(50)).toBe("F");
    expect(calculateLetterGrade(5)).toBe("F");
  });
});

describe("animalCounts", () => {
  test("works for singular animals", () => {
    expect(animalCounts("cat", 1)).toBe("1 cat");
    expect(animalCounts("racoon", 1)).toBe("1 racoon");
  });
  test("works for multiple animals", () => {
    expect(animalCounts("cat", 3)).toBe("3 cats");
    expect(animalCounts("dolphin", 6)).toBe("6 dolphins");
    //I edited the file to have a test for geese
    expect(animalCounts("goose", 3)).toBe("3 geese");
  });
});

describe("evenOrOdd", () => {
  test("works for even numbers", () => {
    expect(evenOrOdd(0)).toBe("Even");
    expect(evenOrOdd(2)).toBe("Even");
    expect(evenOrOdd(-2)).toBe("Even");
  });
  test("works for odd numbers", () => {
    expect(evenOrOdd(-1)).toBe("Odd");
    expect(evenOrOdd(3)).toBe("Odd");
    expect(evenOrOdd(9)).toBe("Odd");
  });
});
describe("evenOrOddWithTernary", () => {
  test("works for even numbers", () => {
    expect(evenOrOddWithTernary(0)).toBe("Even");
    expect(evenOrOddWithTernary(2)).toBe("Even");
    expect(evenOrOddWithTernary(-2)).toBe("Even");
  });
  test("works for odd numbers", () => {
    expect(evenOrOddWithTernary(-1)).toBe("Odd");
    expect(evenOrOddWithTernary(3)).toBe("Odd");
    expect(evenOrOddWithTernary(9)).toBe("Odd");
  });

  test("Is written as a ternary", () => {
    expect(evenOrOddWithTernary.toString().includes("?")).toBe(true);
    expect(evenOrOddWithTernary.toString().includes("if")).toBe(false);
  });
});

describe("findLargerTernary", () => {
  test("returns the larger of two numbers", () => {
    expect(findLargerTernary(-1, 5)).toBe(5);
    expect(findLargerTernary(8, 2)).toBe(8);
    expect(findLargerTernary(1, 0)).toBe(1);
    expect(findLargerTernary(-2, -1)).toBe(-1);
  });
  test("Is written as a ternary", () => {
    expect(findLargerTernary.toString().includes("?")).toBe(true);
    expect(findLargerTernary.toString().includes("if")).toBe(false);
  });
});
