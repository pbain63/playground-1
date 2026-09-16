const factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  if (!Number.isInteger(n) || n < 0) {
    return;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));
