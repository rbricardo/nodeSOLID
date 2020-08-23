import { IContactsRepository } from '../../repositories/IContactsRepository'
import { Contact } from 'src/entities/Contact'

export class ListContactUseCase {
	constructor (
		private contactRepository: IContactsRepository,
	) { }

	async execute (): Promise<Contact[]> {
		try {
			return await this.contactRepository.list()
		} catch (error) {
			console.log(error)
			return []
		}
	}
}
