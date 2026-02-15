class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

alert(typeof User);

alert(User = User.prototype.constructor);

alert(User.prototype.sayHi);

alert(Object.getOwnPropertyNames(User.prototype));