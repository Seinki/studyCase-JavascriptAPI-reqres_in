const request = require('supertest');

describe('Get request', () => {
  it('Find List User', async () => {
    const response = request('https://reqres.in/')
    .get('api/users')
    console.log((await response).status)
    console.log((await response).body)
  })
})