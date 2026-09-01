import { describe, expect, test } from "vitest";
import { inSetCount } from "../src/utils";

describe("inSetCount", () => {
  test("It exists", () => {
    expect(inSetCount).toBeTypeOf("function");
  });

  test("It calculates how many times an num appears in set", () => {
    const nums = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

    expect(inSetCount(1, nums)).toEqual(2);
    expect(inSetCount(3, nums)).toEqual(2);
    expect(inSetCount(4, nums)).toEqual(1);
    expect(inSetCount(6, nums)).toEqual(2);
    expect(inSetCount(10, nums)).toEqual(4);
  });
});
