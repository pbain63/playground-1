class Penguin {}

class Bird {}

const flyer = {
  fly() {
    console.log(`Flap flap, I'm flying!`);
  },
};

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly();

const penguin = new Penguin();
penguin.fly();
