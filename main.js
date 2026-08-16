const server = {
  people: [
    { name: "Odin", age: 20 },
    { name: "Thor", age: 35 },
    { name: "Freyja", age: 29 },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find((person) => {
      return person.name === name;
    });
    return person;
  } catch (error) {
    console.error(error);
  }
}

// getPersonsInfo();
console.log(getPersonsInfo());
