 const express=require("express")
 const { AuthModel } = require("../model/auth")
 const jwt=require("jsonwebtoken")
 const bcrypt = require('bcrypt');

  const userRoute=express.Router()

  

 userRoute.post('/register',async(req,res)=>{
     const{email,password,name,date,location,role}=req.body

     try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            const user=new AuthModel({email,password:hash,name,date,location,role})
            await user.save()
            res.send("User is register")
           
        });
       
        
     } catch (error) {
         console.log(error)
         res.send("something went wrong")
        
      }

     })


userRoute.post('/login',async(req,res)=>{
    const{email,password}=req.body
    try {
       const user=await AuthModel.find({email})
       

       if(user.length>0){
        
        bcrypt.compare(password, user[0].password, (err, result)=> {

            if(result){
                
              const token=jwt.sign({userID:user[0]._id},"masai")
              res.send({"msg":"Login Successful","token":token})
            }else{
                res.send("Wrong credential please check")
            }
           
        });





        
       

       }else{


        res.send("Wrong credential please check")

       }
      
      
    } catch (error) {
       console.log(error)
       res.send("something went wrong")
       
    }

})

  module.exports={
    userRoute
  }