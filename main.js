let user = {
    name: "John",
    surName: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get () {
        return `${this.name} ${this.surName}`;
    },

    set (value) {
        [this.name, this.name] = value.split(" ");
    }
})
    

user.fullName = "Alice Cooper";
console.log(user.name);
console.log(user.surName);
console.log(user.fullName);

for(let key in user) alert(key);