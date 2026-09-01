import { inSetCount } from "./utils";
import { isPrime } from "./isPrime";

const primesFromSet = new Set();

function filterByPrimeFrequency(a: number[], b: number[]): number[] {
  const aMap = new Map();
  const res: number[] = [];

  (a ?? []).forEach((n: number) => {
    if (!aMap.has(n)) {
      const count = inSetCount(n, b ?? []);

      if (primesFromSet.has(count)) {
        aMap.set(n, {
          count,
          prime: true,
        });
      } else {
        const _isPrime = isPrime(count);
        aMap.set(n, {
          count,
          prime: _isPrime,
        });

        if (_isPrime) {
          primesFromSet.add(count);
        } else {
          res.push(n);
        }
      }
    } else {
      if (!aMap.get(n).prime) res.push(n);
    }
  });

  return res as number[];
}

export { filterByPrimeFrequency };
