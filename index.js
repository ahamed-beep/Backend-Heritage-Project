import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbconnection from './Connection/dbconnection.js';
import userroutes from './Routes/userroutes.js';
const app = express()
const port = 5000
dotenv.config();
dbconnection();
app.use(json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use('/api' , userroutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


