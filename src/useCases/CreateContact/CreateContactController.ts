import { Request, Response } from 'express'
import { CreateContactUseCase } from './CreateContactUseCase';

export class CreateContactController {
    constructor(
        private createContactUseCase: CreateContactUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>  {

        const { name, dateOfBirth, gender } = request.body
        try {
            await this.createContactUseCase.execute({
                name,
                dateOfBirth,
                gender
            })
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}