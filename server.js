import dotenv from 'dotenv'
import express, { Router } from 'express'
const PORT =process.env.PORT||3000
const app=express()
import { dbConnection } from './dbConnection.js'
import { router } from './Routes/route.js'
import cors from 'cors'
dotenv.config()


//connection for db 
dbConnection()

//routes 
app.use(cors({
    origin: 'http://localhost:5173', // Allow Vite frontend to make requests
    methods: 'GET,POST' // Allow specific HTTP methods
  }));
app.use('/',router)
app.use(express.json())


app.listen(PORT,(err)=>{
    if(!err){
        console.log(`server running at ${PORT}`)
    }else{
        console.log(err)
    }
})