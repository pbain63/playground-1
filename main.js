function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`),
  };
}

function flyer({ name }) {
  return {
    fly: () => {
      console.log(`${name} flew`);
    },
  };
}

function swimmingMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
  };
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
    ...flyer(monster),
  };
}

const obj = flyingSwimmingMonsterCreator("Monster");

obj.attack();
obj.walk();
obj.swim();
obj.fly();
