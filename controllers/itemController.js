const itemModel=require('../models/itemModel')
const getItemController=async(req,res)=>{

    try{
        const items=await itemModel.find()
        res.status(200).send(items)
        console.log(items)

    }catch(error){
        console.log(error)
    }
}
const addItemController=async(req,res)=>{
    try{
        const newItem=new itemModel(req.body);
        await newItem.save()
        res.status(201).send("Item Created Sucessfully")
    }catch(error){
        res.status(400).send("error",error)
        console.log(error)
    }
}
module.exports={getItemController,addItemController}