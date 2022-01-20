const request = require("request");
const breed = process.argv[2];
// const quality = process.argv[3];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    const data = JSON.parse(body)[0];
    if (error) {
      console.log("error:", "Improper Breed or Information request"); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      return;
    }
    if (data === undefined) {
      console.log("Breed not found");
      return;
    }
    // console.log(data);
    console.log("Cat breed:", data["description"]);
    // console.log("Searched Info -", quality, ":", data[0][quality]); // Print the HTML for the Google homepage.
  }
);
