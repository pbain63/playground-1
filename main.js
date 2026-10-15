const t0 = performance.now();

const fruits = ["apple", "strawberry", "watermelon"];

function printAndPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  const totalPairs = arr.length * arr.length;
console.log("Estimated paired elements length:", totalPairs);


  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      console.log(`${arr[j]} - ${arr[k]}`);
    }
  }
}

printAndPair(fruits);

const t1 = performance.now();

console.log("The function took: " + (t1 - t0) + " milliseconds.");
