import { app } from './app'
import { db } from './_db/connection'

app.listen(3334, () => {
	console.log('App listen on port 3334')
})
