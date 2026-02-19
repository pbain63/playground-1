class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}
const obj = new Animal();
obj.speak();
const speak = obj.speak;
speak();

Animal.eat();
const eat = Animal.eat;
eat();