const request = require('supertest');
const server = require("../env");
const DATA = require('../data/userData')

describe('Registration for new user', () => {
  it('Success registration', async () => {
    const response = request(server()).post('api/register').send({
      "email": "seinki@mailsac.com",
      "password": "seinki123"
    })
    console.log((await response).status);
    console.log((await response).body);
  })
})