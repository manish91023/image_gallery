import mongoose  from "mongoose";

export const dbConnection=async()=>{
    try {
        console.log(process.env.MONGODB_URI)
        const con=mongoose.connect(process.env.MONGODB_URI)
        console.log(`db connected successfully}`)
        
    } catch (error) {
        console.log(error)
    }
} 

