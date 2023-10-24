const { expect } = require('chai');
const request = require('supertest');
const server = require('../env');
const DATA = require('../data/userData')

// Get Data all Users
describe('Chai Assert for get data all users', () => {
  const response = request(server()).get('api/users')
  it('response status equal to 200 ok', async () => {
    // Check response status harus sama dengan 200
    expect((await response).status).to.equal(200)
  })
  it('response body to haveOwnProperty', async () => {
    // Expert dalam body response terdapat value 'message'
    expect((await response).body).to.haveOwnProperty(`data`)
  })
})

//  Post Create New User
describe('Chai Assert for add new user', () => {
  const response = request(server()).post('api/users').set(DATA.CREATE_USER_DATA)
  it('response status equal to 201 ok', async () => {
    // Check response status harus sama dengan 201
    expect((await response).status).to.equal(201)
  })
  it('response to have value', async () => {
    // Check response jika terdapat value
    expect((await response).body)
  })
  
})