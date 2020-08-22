import { Request, Response } from 'express'
import { ListDetailsContactUseCase } from './ListDetailsContactUseCase';

export class ListDetailsContactController {

    constructor(
        private listContactUseCase: ListDetailsContactUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        if (!id) throw new Error('User not exists')
        try {
            const contact = await this.listContactUseCase.execute(id)
            return response.status(200).json(contact)
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}