class Parent {
  #familySecret = "The secret ingredient is butter.";

  shareSecret() {
    return this.#familySecret;
  }
}

class Child extends Parent {
  revealSecret() {
    // console.log(this.#familySecret);

    console.log(`My parent says: ${this.shareSecret()}`);

  }
}

const kid = new Child();
kid.revealSecret();