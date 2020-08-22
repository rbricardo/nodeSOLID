import { MongoContactsRepository } from '../../repositories/implementations/MongoUserRepository'
import { ListContactUseCase } from "./ListContactUseCase";
import { ListContactController } from "./ListContactController";

const mongoContactsRepository = new MongoContactsRepository()

const listContactsUseCase = new ListContactUseCase(
    mongoContactsRepository,
)

const listContactsController = new ListContactController(
    listContactsUseCase
)

export { listContactsUseCase, listContactsController }