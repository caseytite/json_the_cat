const { fetchBreedDescription } = require("./breedFetcher");

const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log("hello 2");
    console.log("Error fetching details", error);
    return undefined;
  } else {
    // console.log(desc);
    console.log("Cat breed:", desc);
    return desc;
  }
});
