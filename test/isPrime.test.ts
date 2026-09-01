import { describe, expect, test } from "vitest";
import { isPrime } from "../src/isPrime";

describe("isPrime", () => {
  test("It exists", () => {
    expect(isPrime).toBeTypeOf("function");
  });

  test("It checks if a number is prime or not", () => {
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
    expect(isPrime(5)).toEqual(true);
    expect(isPrime(7)).toEqual(true);
    expect(isPrime(0)).toEqual(false);
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(10)).toEqual(false);
  });
});
