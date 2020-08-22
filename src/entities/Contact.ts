import moment from 'moment'

export class Contact {

        id: string
        name: string
        dateOfBirth: string
        age: number
        gender: string

    constructor(
        id: string,
        name: string,
        dateOfBirth: string,
        gender: string,
    ) {
        this.id = id
        this.name = name
        this.dateOfBirth = dateOfBirth
        this.gender = gender

        try {
            const dateOfBrithParsed = dateOfBirth.replace('/', '')
            const [ age ] = moment(dateOfBrithParsed, "DDMMYYYY").fromNow().split(' ')
            this.age = parseInt(age)

        } catch (error) {
            this.age = 0
        }
    }
}
