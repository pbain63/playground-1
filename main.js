let req1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("first");
  }, 4000);
});
let req2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Second!");
  }, 3000);
});
Promise.all([req1, req2])
  .then(function (results) {
    console.log("Then: ", results);
  })
  .catch(function (err) {
    console.log("Catch: ", err);
  });
