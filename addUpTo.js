const { performance } = require('perf_hooks');

const addUpTo = n => (n * (n + 1)) / 2;

const time1 = performance.now();
addUpTo(1000000000000);
const time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
