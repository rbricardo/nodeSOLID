import { app } from '../../../../app'
const request = require('supertest')

describe('POST /contacts', function () {
	it('should return all contacts', async () => {
		const response = await request(app).post('/contacts').send({ name: 'Test', dateOfBirth: '06/09/1989', gender: 'masculino' })
		expect(response.status).toBe(201)
	})

	it('should return a status error', async () => {
		const response = await request(app).post('/contacts').send({ name: null, dateOfBirth: null, gender: null })
		expect(response.status).toBe(400)
	})

	it('should return a status error', async () => {
		const response = await request(app).post('/contacts').send({ name: 'Test', dateOfBirth: '07/05/2020', gender: 'feminino' })
		expect(response.status).toBe(400)
	})
})
