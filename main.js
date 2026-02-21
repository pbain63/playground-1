const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);

    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}
Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog("Mitzie");
d.speak();