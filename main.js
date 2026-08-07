new Promise((resolve, reject) => {
  reject("Nope");
})
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Fail");
  })
  .finally((res) => {
    console.log("Finally");
  });
