import { IContactsRepository } from '../IContactsRepository'
import { Contact } from '../../entities/Contact'
import { ContactSchema } from '../../_db/contactSchema'
import { uuid } from 'uuidv4'
import moment from 'moment'
export class MongoContactsRepository implements IContactsRepository {

    async save(contact: Contact): Promise<void> {
        const { name, gender, dateOfBirth } = contact
        const data = new ContactSchema({ name, gender, dateOfBirth })
        try {
            data._id = uuid()
            await data.save();
        } catch (error) {
            throw new Error(error)
        }
    }

    async list(): Promise<Contact[]> {
        const contacts = await ContactSchema.find().exec()
        const contactsParsed = contacts.map((contact) => {
            return new Contact(
                contact._id,
                contact.name,
                contact.dateOfBirth,
                contact.gender,
            )
        })

        return contactsParsed
    }

    async remove(id: string): Promise<void> {
        console.log(id, 'id')
        const contact = await ContactSchema.findOne({ _id: id }).exec()
        console.log(contact, 'contact')

        await contact.remove()
    }

    async findById(id: string): Promise<Contact> {
        const contact = await ContactSchema.findOne({ _id: id }).exec()
        console.log(contact, 'contact')
        const contactParsed = new Contact(
            contact._id,
            contact.name,
            contact.dateOfBirth,
            contact.gender,
        )
        return contactParsed
    }

}