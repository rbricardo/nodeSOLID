import { IContactsRepository } from "../../repositories/IContactsRepository";
import { ICreateContactRequestDTO } from "./CreateContactDTO";
import { Contact } from "../../entities/Contact";

export class CreateContactUseCase {
	constructor(
		private contactRepository: IContactsRepository,
	) { }

	async execute({ name, dateOfBirth, gender }: ICreateContactRequestDTO) {

		const contact = new Contact(null, name, dateOfBirth, gender)

		if (!name || !dateOfBirth || !gender) {
			throw new Error('Missing params')
		}

		if (contact.age < 18) {
			throw new Error('A idade precisa ser maior que 18')
	}

		await this.contactRepository.save(contact)

	}
}