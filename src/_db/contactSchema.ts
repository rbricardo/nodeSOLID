// eslint-disable-next-line no-unused-vars
import mongoose, { Schema, Document } from 'mongoose'

export interface IContact extends Document {
  _id: string,
  name: string
  dateOfBirth: string
  age: number
  gender: string
}

const contactSchema: Schema = new Schema({
	_id: String,
	name: String,
	dateOfBirth: String,
	age: Number,
	gender: String,
})

export const ContactSchema = mongoose.model<IContact>('Contact', contactSchema)
