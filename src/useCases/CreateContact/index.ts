import { CreateContactUseCase } from './CreateContactUseCase'
import { CreateContactController } from './CreateContactController'
import { MongoContactsRepository } from '../../repositories/implementations/MongoUserRepository'

const mongoContactsRepository = new MongoContactsRepository()

const createContactUseCase = new CreateContactUseCase(
	mongoContactsRepository,
)

const createContactController = new CreateContactController(
	createContactUseCase,
)

export { createContactUseCase, createContactController }
