const request = require("supertest");
const server = require("../env");

describe("Post Request for Create User", () => {
  it("Success create user", async () => {
    const response = request(server()).post("api/users").send({
      name: "seinki",
      job: "QA Engineer",
    });
    console.log((await response).status);
    console.log((await response).body);
  });
});
