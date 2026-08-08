new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value");
  }, 2000);
})
  .finally(() => console.log("Promise ready"))
  .then((result) => console.log(result));
