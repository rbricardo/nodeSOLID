import { MongoContactsRepository } from '../../repositories/implementations/MongoUserRepository'
import { RemoveContactUseCase } from './RemoveContactUseCase'
import { RemoveContactController } from './RemoveContactController'

const mongoContactsRepository = new MongoContactsRepository()

const removeContactsUseCase = new RemoveContactUseCase(
	mongoContactsRepository,
)

const removeContactsController = new RemoveContactController(
	removeContactsUseCase,
)

export { removeContactsUseCase, removeContactsController }
