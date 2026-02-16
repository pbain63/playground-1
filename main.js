function makeClass(phrase) {
    return class {
        sayHi() {
            alert(phrase);
        }
    }
}
let User = makeClass("Hello");
new User().sayHi();