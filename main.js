class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. Current balance hidden!`);

  }

  showBalance() {
    return `Account owner: ${this.owner}, Balance $${this.#balance}`
  }
}

const myAcc = new BankAccount("Alice");
myAcc.deposit(100);
myAcc.showBalance();
// console.log(myAcc.#balance);
