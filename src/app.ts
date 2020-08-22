import express from 'express'
import { router } from './routes'
import { db } from './_db/connection'
const app = express()

app.use(express.json())
app.use(router)

db.on('error', () => console.error('connection error'))
db.on('open', () => console.log('database connected'))

export { app }