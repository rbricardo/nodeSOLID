const request = require('supertest')
import { app } from '../../../../app'

describe('POST /contacts', function() {

  it('should return all contacts', async  () => {
    const response = await request(app).post('/contacts').send({ name: 'Test', dateOfBirth: '06/09/1989', gender: 'masculino' })
    expect(response.status).toBe(201)
  })

  it('should return a status error', async  () => {
    const response = await request(app).post('/contacts').send({ name: null, dateOfBirth: null, gender: null })
    expect(response.status).toBe(400)
  })

})