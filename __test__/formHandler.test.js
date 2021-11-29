import {
  generateScoreInfo,
  generateSubjectivityInfo
} from "../src/client/js/formHandler";

describe("Generate Score Info", () => {
  test("It should return a string", () => {
    const result = generateScoreInfo("P+");
    expect(result).toBe("strong positive");
  });

  test("It should return a string", () => {
    const result = generateScoreInfo("P");
    expect(result).toBe("positive");
  });

  test("It should return a string", () => {
    const result = generateScoreInfo("NEU");
    expect(result).toBe("neutral");
  });

  test("It should return a string", () => {
    const result = generateScoreInfo("N");
    expect(result).toBe("negative");
  });

  test("It should return a string", () => {
    const result = generateScoreInfo("N+");
    expect(result).toBe("strong negative");
  });

  test("It should return a string", () => {
    const result = generateScoreInfo("NONE");
    expect(result).toBe("without polarity");
  });
});

describe("Generate Subjectivity Info", () => {
  test("It should return a string", () => {
    const result = generateSubjectivityInfo("SUBJECTIVE");
    expect(result).toBe(
      "subjective, so there are still doubts about the information"
    );
  });

  test("It should return a string", () => {
    const result = generateSubjectivityInfo("OBJECTIVE");
    expect(result).toBe("objective, so that the information can be justified.");
  });
});
