const request = require("request");
// const breed = process.argv[2];-------------- moved to index
// const quality = process.argv[3];

const fetchBreedDescription = function (breed, callback) {
  // console.log("hello");
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      // console.log("in callback");
      const data = JSON.parse(body)[0];
      if (error) {
        callback(error, null);
        // console.log("error:", "Improper Breed or Information request"); // Print the error if one occurred
        // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        return undefined;
      }
      if (data === undefined) {
        console.log("Breed not found");
        callback(error, null);
        return null;
      }
      callback(null, data.description);
    }
  );
};

module.exports = { fetchBreedDescription };
