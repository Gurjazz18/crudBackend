 const express=require("express")
 const { TodoModel } = require("../model/todo")

const TodoRoute=express.Router()
   
TodoRoute.get("/", async (req,res)=>{
    try {
        let data=await TodoModel.find()
        res.send(data)
        
    } catch (error) {

         res.send({"msg":"something went wrong"})
    }
   
   
   
   
    })
 

TodoRoute.post("/create", async (req,res)=>{
    const payload=req.body
    const new_note=new TodoModel(payload)
    await new_note.save()
    res.send({"msg":"Note Created"})
    })



TodoRoute.patch("/update/:id", async (req,res)=>{
        const payload=req.body
        const id=req.params.id
         const note=await TodoModel.findOne({_id:id})
         const userID_in_note=note.userID
         const userID_in_making_req=req.body.userID

        try {
            if(userID_in_note!==userID_in_making_req){
                res.send("You are not Authorised person")
            
            }else{
                await TodoModel.findByIdAndUpdate({_id:id},payload)
                res.send("Item is Updated")

            }
           
            
        } catch (error) {
            res.send("someThing went wrong")
            console.log(error)
            
        }
       
       
        })


 

TodoRoute.delete("/delete/:id", async (req,res)=>{
            const payload=req.body
            const id=req.params.id
             const note=await TodoModel.findOne({_id:id})
             const userID_in_note=note.userID
             const userID_in_making_req=req.body.userID
    
            try {
                if(userID_in_note!==userID_in_making_req){
                    res.send("You are not Authorised person")
                
                }else{
                    await TodoModel.findByIdAndDelete({_id:id},payload)
                    res.send("Item is DEleted")
    
                }
               
                
            } catch (error) {
                res.send("someThing went wrong")
                console.log(error)
                
            }
           
           
            })
    
        







 module.exports={
    TodoRoute
 }