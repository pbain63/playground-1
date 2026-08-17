class Thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => {
      resolve(this.num * 2);
    }, 1000);
  }
}

async function f() {
  let result = await new Thenable(5);
  alert(result);
}
f();
