// eslint-disable-next-line no-unused-vars
import { Contact } from '../entities/Contact'

export interface IContactsRepository {
    remove(id: string): Promise<void>
    findById(id: string): Promise<Contact>
    save(user: Contact): Promise<void>
    list(): Promise<Contact[]>
}
