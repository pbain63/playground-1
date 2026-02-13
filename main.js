let user = {
    name: "John",
    surName: "Smith",

    get fullName() {
        return `${this.name} ${this.surName}`;
    }
};
console.log(user.fullName);
