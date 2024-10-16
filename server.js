import dotenv from 'dotenv'
import express, { Router } from 'express'
const PORT =process.env.PORT||3000
const app=express()
import { dbConnection } from './dbConnection.js'
import { router } from './Routes/route.js'
import cors from 'cors'
dotenv.config()
import path from 'path'
import { fileURLToPath } from 'url'

//connection for db 
dbConnection()

//es module fix
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

// server static file fro  the vite build 
app.use(express.static(path.join(__dirname,'galery app','dist')))

//routes 
app.use(cors())
app.use('/',router)
app.use(express.json())


app.listen(PORT,(err)=>{
    if(!err){
        console.log(`server running at ${PORT}`)
    }else{
        console.log(err)
    }
})