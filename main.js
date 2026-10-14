function logTime(arr) {
  let numberOfLoops = 0;

  for (let i = 1; i < arr.length; i *= 2) {
    numberOfLoops++;
  }

  return numberOfLoops;
}

console.log(logTime([1]));
console.log(logTime([1, 2]));
console.log(logTime([1, 2, 3, 4]));
console.log(logTime([1, 2, 3, 4, 5, 6, 7, 8]));