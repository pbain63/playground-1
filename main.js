const t0 = performance.now();

const productList = [
  { name: "Laptop", price: 18487 },
  { name: "Keyboard", price: 356 },
  { name: "Monitor", price: 8345 },
  { name: "Tablet", price: 9875 },
];

function lookupPrice(name, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      console.log(`Price of '${list[i].name}' is: ${list[i].price}`);
      break;
    }
  }
}

lookupPrice("Monitor", productList);

const t1 = performance.now();

console.log("The function took: " + (t1 - t0) + " milliseconds.");
