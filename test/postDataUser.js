const request = require("supertest");
const server = require("../env");
const DATA = require('../data/userData')

describe("Post Request for Create User", () => {
  it("Success create user", async () => {
    const response = request(server()).post("api/users").send(DATA.CREATE_USER_DATA);
    console.log((await response).status);
    console.log((await response).body);
  });
});
