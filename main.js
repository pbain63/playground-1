const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.race([recordVideoOne, recordVideoTwo, recordVideThree]).then(
  (message) => {
    console.log(message);
  }
);
