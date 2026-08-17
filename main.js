async function f() {
  let promise = new Promise((resolve, reejct) => {
    setTimeout(() => resolve("done!"), 2000);
  });

  let result = await promise;

  alert(result);
}
f();
