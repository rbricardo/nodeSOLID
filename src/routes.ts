import { Router, Request, Response } from 'express'
import { createContactController } from './useCases/CreateContact'
import { listContactsController } from './useCases/ListContacts'
import { listDetailsContactsController } from './useCases/ListDetailsContacts'
import { removeContactsController } from './useCases/RemoveContact'

const router = Router()

router.get('/contacts', (request: Request, response: Response) => {
	return listContactsController.handle(request, response)
})

router.post('/contacts', (request: Request, response: Response) => {
	return createContactController.handle(request, response)
})

router.delete('/contacts/:id', (request: Request, response: Response) => {
	return removeContactsController.handle(request, response)
})

router.get('/contacts/:id', (request: Request, response: Response) => {
	return listDetailsContactsController.handle(request, response)
})

export { router }
