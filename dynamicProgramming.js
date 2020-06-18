// ======================================================================
// Dynamic Programming
// ======================================================================

// A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions

// It only works on problems with Optimal Substructure && Overlapping subproblems
// ======================================================================
// OVERLAPPING SUBPROBLEMS
// - If a problem can be broken down into subproblems which are reused several times.

// EXAMPLE
// Fibonacci Sequence: Every number after the first two is the sum of the two preceding ones
// 1,1,2,3,5,8,13
// Basically the fibonacci number is being calculated multiple times
//                          fib(5)
//                        /        \
//                   fib(4)    +    FIB(3)
//                  /      \       /      \
//             FIB(3)  +  fib(2) fib(2) +  fib(1)
//            /      \
//       fib(2)   +    fib(1)
// ======================================================================

// ======================================================================
// OPTIMAL SUBSTRUCTURE
// If a problem can be constructed from optimal solution of its subproblems

// EXAMPLE
// the shortest path in a graph
//          A ----2----> B            D
//                       | \          ^
//                       2   \ 3 \    |
//                       |         \  2
//                       V          \ |
//                       E ----2----> C
// Shortest Path From:
//          A to D      A -> B -> C -> D
//          A to C      A -> B -> C
//          A to B      A -> B
// So when we're talking about the shortest path going form a start to an end whatever that path is, any other point along that path also is going to be the shortest path from the start to that point
// ======================================================================

// ======================================================================
// Code
// ======================================================================
// Solve Fibonacci (subproblem)
// - Fib(n) = Fib(n - 1) + Fib(n - 2)
// - Fib(2) is 1
// - Fib(1) is 1

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// TIME COMPLEXITY - O(2^n) terrible

// ======================================================================
// MEMOIZATION (top-down) - Storing the results of expensive function calls and returning the cached result when the same inputs occur again
function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// TIME COMPLEXITY - O(n)

// ======================================================================
// TABULATION (Bottom-up) - Storing the result of a previous result in a "table" (usually an array). Usually done by ITERATION. Better space complexity can achieved using tabulation
function fib_table(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
// TIME COMPLEXITY - O(n)
// SPACE COMPLEXITY - WAY BETTER THAN MEMO
