import { square } from "./square.js";
import { jest } from "@jest/globals";

describe("square", () => {

  // beforeAll(() => {
  //
  // })
  // beforeEach(() => {
  //
  // })

  test("correct value", () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });

  test("pow to be called once", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });


  test("pow to not be called", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });


  afterEach(() => {
    jest.clearAllMocks();
  });

  // afterAll(() => {
  // })

});