import { uuid } from 'uuidv4'
import { app } from '../../../../app'
import { ContactSchema } from '../../../../_db/contactSchema'
import config from '../../../../_config'
const request = require('supertest')

console.log(config.DB.HOST)

describe('GET /contacts/:id', () => {
	it('should return contact details', async () => {
		const contact = new ContactSchema({ _id: uuid(), name: 'test', gender: 'test', dateOfBirth: '12/05/2020' })
		await contact.save()
		const response = await request(app).get(`/contacts/${contact._id}`)
		await contact.remove()
		expect(response.status).toBe(200)
	})
})
