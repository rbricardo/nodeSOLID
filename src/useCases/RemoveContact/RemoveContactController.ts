import { Request, Response } from 'express'
import { RemoveContactUseCase } from './RemoveContactUseCase';

export class RemoveContactController {

    constructor(
        private removeContactUseCase: RemoveContactUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>  {
        const { id } = request.params
        try {
            await this.removeContactUseCase.execute(id)
            return response.status(200).json({message: 'contact removed'})
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}