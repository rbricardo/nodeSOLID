import { IContactsRepository } from '../../repositories/IContactsRepository'
import { Contact } from 'src/entities/Contact'

export class RemoveContactUseCase {
	constructor (
		private contactRepository: IContactsRepository,
	) { }

	async execute (id: string): Promise<void> {
		try {
			await this.contactRepository.remove(id)
		} catch (error) {
			console.log(error)
		}
	}
}
