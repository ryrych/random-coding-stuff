import { inSetCount } from "./utils";
import { isPrime } from "./isPrime";

const primesFromSet = new Set();

function filterByPrimeFrequency(a: number[], b: number[]): number[] | null {
  const aMap = new Map();
  const res: number[] = [];

  if (!(Array.isArray(a) && Array.isArray(b) && a.length > 0 && b.length > 0)) {
    return null;
  }

  if (
    a.some((v) => !Number.isInteger(v)) ||
    b.some((v) => !Number.isInteger(v))
  ) {
    return null;
  }

  a.forEach((n: number) => {
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

  return res;
}

export { filterByPrimeFrequency };
