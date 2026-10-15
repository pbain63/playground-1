const t0 = performance.now();

const drinks = ["water", "coffee"];
const persons = ["person 1", "person 2", "person 3", "person 4"];

function servingDrinks(drinksList, personsList) {
  for (let i = 0; i < drinksList.length; i++) {
    for (let j = 0; j < personsList.length; j++) {
      console.log(`Gives ${drinksList[i]} to ${personsList[j]}`);
    }
  }
}

servingDrinks(drinks, persons);

const t1 = performance.now();

console.log("The function took: " + (t1 - t0) + " milliseconds.");
