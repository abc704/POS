
const mongoose=require('mongoose')
require('colors')

const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI) 
        
        console.log(`mongo connected ${conn.connection.host}`.bgBlue)
    }catch(error){
        console.log(`Error:${error.message}`.bgRed)
        process.exit(1)
    }
};
module.exports=connectDb