import { MongoContactsRepository } from '../../repositories/implementations/MongoUserRepository'
import { ListDetailsContactUseCase } from "./ListDetailsContactUseCase";
import { ListDetailsContactController } from "./ListDetailsContactController";

const mongoContactsRepository = new MongoContactsRepository()

const listDetailsContactsUseCase = new ListDetailsContactUseCase(
    mongoContactsRepository,
)

const listDetailsContactsController = new ListDetailsContactController(
    listDetailsContactsUseCase
)

export { listDetailsContactsUseCase, listDetailsContactsController }