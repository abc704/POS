const express=require('express')
const morgan =require('morgan')
const bodyParser=require('body-parser')
const cors=require('cors')
const dotenv=require("dotenv")
require('colors')

dotenv.config()
//r
const app=express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))


app.get('/',(req,res)=>{
    res.send('<h1>pos backend</h1>')
})
const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`server Runing on port${PORT} `.bgCyan.white)
})
