let fs = require("fs");

fs.readFile("movie.mp4", function finishReading(error, movieData) {
  if (error) return console.error(error);

  // do something with the movieData
});
