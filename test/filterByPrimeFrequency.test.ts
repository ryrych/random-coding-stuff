import { describe, expect, test } from "vitest";
import { filterByPrimeFrequency } from "../src/filterByPrimeFrequency";

describe("filterByPrimeFrequency", () => {
  test("it exists", () => {
    expect(filterByPrimeFrequency).toBeTypeOf("function");
  });

  test("it returns `null` if `A` or `A` are not arrays of numbers", () => {
    expect(filterByPrimeFrequency([], [])).toBeNull();
    expect(filterByPrimeFrequency([], [1])).toBeNull();
    expect(filterByPrimeFrequency([1], [])).toBeNull();
    // @ts-expect-error — invalid input test
    expect(filterByPrimeFrequency(["a"], [])).toBeNull();
    // @ts-expect-error — invalid input test
    expect(filterByPrimeFrequency([], ["a"])).toBeNull();
    // @ts-expect-error — invalid input test
    expect(filterByPrimeFrequency([1, 2], ["a"])).toBeNull();
    // @ts-expect-error — invalid input test
    expect(filterByPrimeFrequency(undefined, null)).toBeNull();
    // @ts-expect-error — invalid input test
    expect(filterByPrimeFrequency(1, true)).toBeNull();
  });

  test("it returns sequence of integers", () => {
    const results = filterByPrimeFrequency([1, 3, 5], [4, 3]);

    expect(results?.every(Number.isInteger)).toBe(true);
  });

  [
    {
      a: [2, 3, 9, 2, 5, 1, 3, 7, 10],
      b: [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10],
      c: [2, 9, 2, 5, 7, 10],
    },
    {
      a: [1, 4, 4, 4, 2, 2, 6, 7],
      b: [4, 4, 4, 2, 2, 9, 9],
      c: [1, 6, 7],
    },
    {
      a: [5, 5, 5, 5, 3, 8, 1, 9],
      b: [5, 5, 5, 3, 3, 3, 3, 3, 8, 8],
      c: [1, 9],
    },
    {
      a: [10, 20, 30, 10, 40, 20, 50],
      b: [10, 10, 10, 20, 20, 60],
      c: [30, 40, 50],
    },
    {
      a: [0, 0, 0, 1, 2, 3, 3, 3, 3, 3],
      b: [0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3],
      c: [2],
    },
    {
      a: [7, 7, 7, 7, 7, 7, 7, 8, 9, 10],
      b: [7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9],
      c: [9, 10],
    },
  ].forEach((val) => {
    test("it should return all integers from A except those that occur p(rime) times", () => {
      const { a, b, c } = val;

      expect(filterByPrimeFrequency(a, b)).toEqual(c);
    });
  });
});
