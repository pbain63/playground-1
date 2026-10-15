const t0 = performance.now();

const numbers = [1, 2, 3, 4, 5, 6];

function printFirstHalf(list) {
  for (let i = 0; i < list.length / 2; i++) {
    console.log(list[i]);
  }
}

printFirstHalf(numbers);

const t1 = performance.now();

console.log("The function took: " + (t1 - t0) + " milliseconds.");
