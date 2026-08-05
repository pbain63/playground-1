function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function afterGreet() {
  console.log(`Greeting is complete!`);
}

greet("Anjali", afterGreet);
