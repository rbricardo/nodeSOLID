import mongoose from 'mongoose'
import config from '../_config'


const { USER, PASSWORD, HOST, PORT, NAME } = config.DB

mongoose.connect(
  `mongodb://${HOST}:${PORT}/${NAME}`,
  {useNewUrlParser: true, useUnifiedTopology:  true },
)

export const db = mongoose.connection