let req1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("first");
  }, 8000);
});
let req2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Second!");
  }, 3000);
});
Promise.race([req1, req2])
  .then(function (one) {
    console.log("Then: ", one);
  })
  .catch(function (one, two) {
    console.log("Catch: ", one);
  });
