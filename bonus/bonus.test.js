const {
  isPrimaryColor,
  isPrimaryColorOneIf,
  alphabetOrder,
  largeOrSmall,
  longerWord,
  shortestWord,
} = require("./bonus");

describe("isPrimaryColor", () => {
  test("returns true for all primary colors", () => {
    expect(isPrimaryColor("red")).toBe(true);
    expect(isPrimaryColor("yellow")).toBe(true);
    expect(isPrimaryColor("blue")).toBe(true);
  });
  test("returns false for all non-primary colors", () => {
    expect(isPrimaryColor("pink")).toBe(false);
    expect(isPrimaryColor("green")).toBe(false);
    expect(isPrimaryColor("silver")).toBe(false);
  });
});

describe("isPrimaryColorOneIf", () => {
  test("returns true for all primary colors", () => {
    expect(isPrimaryColorOneIf("red")).toBe(true);
    expect(isPrimaryColorOneIf("yellow")).toBe(true);
    expect(isPrimaryColorOneIf("blue")).toBe(true);
  });
  test("returns false for all non-primary colors", () => {
    expect(isPrimaryColorOneIf("pink")).toBe(false);
    expect(isPrimaryColorOneIf("green")).toBe(false);
    expect(isPrimaryColorOneIf("silver")).toBe(false);
  });

  test("only uses if one time", () => {
      let firstIf = isPrimaryColorOneIf.toString().indexOf("if")
      let lastIf = isPrimaryColorOneIf.toString().lastIndexOf("if")
      expect(firstIf).not.toBe(-1)
      expect(lastIf).not.toBe(-1)
      expect(firstIf).toBe(lastIf);
    })
});

describe("alphabetOrder", () => {
  test("returns the earlier word", () => {
    expect(alphabetOrder("cat", "dog")).toBe("cat");
    expect(alphabetOrder("eagle", "east")).toBe("eagle");
    expect(alphabetOrder("blue", "apple")).toBe("apple");
  });
});
describe("largeOrSmall", () => {
  test("returns large for words of length 5 or more", () => {
    expect(largeOrSmall("eastern")).toBe("large");
    expect(largeOrSmall("coder")).toBe("large");
  });
  test("returns small for words with a length less than 5", () => {
    expect(largeOrSmall("cats")).toBe("small");
  });
});
describe("longerWord", () => {
  test("returns the longer word", () => {
    expect(longerWord("cats", "dog")).toBe("cats");
    expect(longerWord("Ruby", "JavaScript")).toBe("JavaScript");
  });
});
describe("shortestWord", () => {
  test("returns the shortest word", () => {
    expect(shortestWord("cats", "dog", "turtle")).toBe("dog");
    expect(shortestWord("Ruby","Python", "JavaScript")).toBe("Ruby");
    expect(shortestWord("bear","tree", "bag")).toBe("bag");
  });
});
