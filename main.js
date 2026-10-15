const t0 = performance.now();

const numbers = [1, 2, 3];

function printTwiceForNoReason(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }

  for (let j = 0; j < list.length; j++) {
    console.log(list[j]);
  }
}

printTwiceForNoReason(numbers);

const t1 = performance.now();

console.log("The function took: " + (t1 - t0) + " milliseconds.");
