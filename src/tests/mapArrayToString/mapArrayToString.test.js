import { mapArrayToString } from "./mapArrayToString.js";

describe("mapArrayToStrings", () => {
  test("correct value", () => {
    expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("random values", () => {
    expect(mapArrayToString([1, 2, 3, null, undefined, "test"])).toEqual(["1", "2", "3"]);
  });
  test("empty array", () => {
    expect(mapArrayToString([])).toEqual([]);
  });
  test("negation", () => {
    expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});