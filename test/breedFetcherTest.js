const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);

      const expected =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expected, desc.trim());

      done();
    });
  });
  it("should return undefined when a non existent breed is passed in", (done) => {
    fetchBreedDescription("husky", (err, desc) => {
      assert.equal(err, null);

      const expected = undefined;
      assert.equal(expected, desc);
      done();
    });
  });
});
