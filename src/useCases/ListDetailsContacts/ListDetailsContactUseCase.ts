import { IContactsRepository } from '../../repositories/IContactsRepository'
import { Contact } from 'src/entities/Contact'

export class ListDetailsContactUseCase {
	constructor (
		private contactRepository: IContactsRepository,
	) { }

	async execute (id): Promise<Contact> {
		try {
			return await this.contactRepository.findById(id)
		} catch (error) {
			console.log(error)
		}
	}
}
