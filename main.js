class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);

  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks!`); //

  }
}

class Bird extends Animal {
  constructor(name, wingSpan) {
    super(name); // Pass 'name' to the Animal constructor
    this.wingSpan = wingSpan; // Add a new property unique to Bird
  }

  fly() {
    console.log(`${this.name} is flying with a ${this.wingSpan} span!`);
  }
}
const d = new Dog("Rex");
d.speak();

const e = new Bird("Humming bird");
e.fly();