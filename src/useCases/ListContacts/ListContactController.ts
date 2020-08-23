import { Request, Response } from 'express'
import { ListContactUseCase } from './ListContactUseCase'

export class ListContactController {
	constructor (
		private listContactUseCase: ListContactUseCase,
	) { }

	async handle (request: Request, response: Response): Promise<Response> {
		try {
			const listContacts = await this.listContactUseCase.execute()
			return response.status(200).send(listContacts)
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error',
			})
		}
	}
}
