const mocha = require("mocha");
const expect = require("chai").expect;
const app = require("../index"); // sökväg till filen som har app.
describe("", () => {
  // Rimlig rubrik

  it("should find my delete button", () => {
    // namn som beskriver testet
    expect(app).to.exist;
  });
});
