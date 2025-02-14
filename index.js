import express from 'express'
import initApp from './src/routes.js'
import dotenv from "dotenv";
import morgan from 'morgan';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
dotenv.config({})
const app = express()
app.use(cors());
app.use(morgan("tiny"));
const port = 8000 || process.env.PORT
initApp(app, express);













app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))