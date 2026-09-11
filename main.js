function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fib(7));
// console.log(fib(7));
