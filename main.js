let user = {
    name: "John",
    surName: "Smith",

    get fullName() {
        return `${this.name} ${this.surName}`;
    },

    set fullName(value) {
        [this.name, this.name] = value.split(" ");
    }
};
user.fullName = "Alice Cooper";
console.log(user.name);
console.log(user.surName);
console.log(user.fullName);
