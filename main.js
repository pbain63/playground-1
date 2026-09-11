function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

alert(fib(7));
// console.log(fib(7));
