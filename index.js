import express from 'express'
import initApp from './src/routes.js'
import dotenv from "dotenv";
dotenv.config({})
const app = express()
const port = 8000|| process.env.PORT 
initApp(app,express)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))