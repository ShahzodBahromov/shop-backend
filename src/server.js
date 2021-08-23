import express from 'express'
import { host, PORT } from './config.js'
const app = express()
import checkToken from './middlewares/checkToken.js'
import authModule from './modules/auth/routs.js'
import postModule from './modules/post/routs.js'

app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )
app.use( checkToken )


app.use( authModule )
app.use( postModule )

app.listen( PORT,  () => {
	console.log('Server is running on http://' + host + ':' + PORT)
})