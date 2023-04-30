import { validateValue } from "./validateValue.js";

test("Validate value", () => {
  expect(validateValue(50)).toBe(true);
});

describe("Validate value", () => {
  test("less than correct value", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("bigger than correct value", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("lesser edge value", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("bigger edge value", () => {
    expect(validateValue(100)).toBe(true);
  });
});