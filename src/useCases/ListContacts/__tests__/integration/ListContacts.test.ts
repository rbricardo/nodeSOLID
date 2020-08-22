const request = require('supertest')
import { app } from '../../../../app'

describe('GET /contacts', function() {
  it('should return all contacts', async  () => {
    const response = await request(app).get('/contacts')

    expect(response.status).toBe(200)
  })
})