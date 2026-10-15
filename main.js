const t0 = performance.now();

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));


const t1 = performance.now();

console.log("The function took: " + (t1 - t0) + " milliseconds.");
