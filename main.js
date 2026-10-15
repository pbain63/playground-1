const t0 = performance.now();

const numbers = [1, 2, 3, 4];
const letters = ["a", "b"];

function printLists(listOne, listTwo) {
  for (let index1 = 0; index1 < listOne.length; index1++) {
    console.log(listOne[index1]);
  }

  for (let j = 0; j < listTwo.length; j++) {
    console.log(listTwo[j]);
  }
}

printLists(numbers, letters);

const t1 = performance.now();

console.log("The function took: " + (t1 - t0) + " milliseconds.");
