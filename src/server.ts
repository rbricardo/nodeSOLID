import { app } from './app'
import {db} from './_db/connection'

app.listen(3334, () => {
  db.on
  console.log('App listen on port 3334')
})