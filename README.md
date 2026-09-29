# Random Coding Stuff

## Filter By Prime Frequency

Post mortem for solution I sent (last commit: `8d8b2d38a18f4ce8947b804eab1e0fedd4152cea`)

In one of my recruitments process I got a home assignment, a an algorithm that I provided in `./src/filterByPrimeFrequency.ts`.
The thing was: **it was in August 2026 and everyone was using AI models to churn things out**.
I asked a HR person how they are checking solutions in AI era as I rather expected that my time will be wasted.
**It was**.

My challenge was: how to provide anything worth discussing in AI era, in home assignment context.
**They wanted**:

- Pasted solution in their own paste-bin-like

**They did not require**:

- A build (I used `vite`)
- A _git_ repository
- Tests

**I wanted**:

- Write a **good-enough** solution by myself
- I was ready to defend that solution

**I assumed**:

- I would write a good-enough solution will little help from AI
- That any sophisticated or even normal solution in home setting can be treated as cheating
- I would pass to another stage and would have time to defend my solution
- That having tests would be treated as bonus points

### If that code would be on production

Taking aside a fact that this kind of algorithm is rather artificial, if that code was supposed to land on prod, I would do:

- Find a performant function for checking if a number is prime (for example with AI assistance help)
- Definitely checked how long can `A` or `B` be
- Ensure input is valid (I skipped that part, yet I definitely shouldn't)

## How to run

```sh
nvm use 24
npm i
vitest
```
