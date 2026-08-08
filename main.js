new Promise((resolve, reject) => {
  throw new Error("error");
  
})
  .finally(() => console.log("Promise ready"))
  .catch((err) => console.log(err));
