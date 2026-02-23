class UserAccount {
  #password;
  constructor(initialPassword) {
    this.#password = initialPassword;
  }

  verifyPassword(guess) {
    return guess === this.#password;
  }

  set updatePassword(newPassword) {
    if (newPassword.length < 8) {
      console.error("Error: Password must be at least 8 characters.");
      return;
    }
    this.#password = newPassword;
    console.log("Password updated securely!");
  }
}
const user = new UserAccount("secret123");
user.updatePassword = "short";
user.updatePassword = "superSecure456";
