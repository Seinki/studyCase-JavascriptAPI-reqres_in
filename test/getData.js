const request = require('supertest');
const server = require('../env');

describe('Get request', () => {
  it('Find List User', async () => {
    const response = request(server())
    .get('api/users')
    console.log((await response).status)
    console.log((await response).body)
  })
})