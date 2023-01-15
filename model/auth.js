const mongoose =require("mongoose")

const authShema=mongoose.Schema({
    "name":String,
    "email":String,
    "date":String,
    "location":String,
    "password":String,
     "role":String

})

const AuthModel=mongoose.model("authcoll",authShema)

module.exports={
    AuthModel
}

