   const express=require('express')
   const { connection } = require('./config/db')
   const { TodoRoute } = require('./controller/todoRouter')
   const { userRoute } = require('./controller/UserRouter')
   require('dotenv').config()
   const cors=require("cors")
   const { authenticate } = require('./Middleware/authmiddleware')
   
  
   const app=express()

   app.use(express.json())
   app.use(cors())
   
   app.use("/user",userRoute)

   app.use(authenticate)
   app.use("/todo",TodoRoute)


   app.listen(process.env.port,async()=>{
    try {
      await connection

      console.log("DB is connected")
      
    } catch (error) {

      console.log("something went wrong")
      
    }


    console.log("server is ruuning now 4500")

  })



    
  // "name":"sonu",
  // "email":"sonu@123",
  // "date":"20-07-2000",
  // "location":"Ludhiana",
  // "password":"sonu123",
  // "role":"FSD"
  
  // "name":"gargi",
  // "email":"agrgi@123",
  // "date":"20-07-1994",
  // "location":"garhi",
  // "password":"gargi123",
  // "role":"Admin"

 


