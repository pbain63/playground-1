function multiplyAll(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined;

  let total = 0;
  for (const i of arr1) {
    for (const j of arr2) {
      total += i * j;
    }
  }

  return total;
}

console.log(multiplyAll([1, 2], [5, 6]));
console.log(multiplyAll([1, 2, 3, 4], [5, 3, 1, 8]));
