const mongoose =require("mongoose")

const todoShema=mongoose.Schema({
    "title":String,
    "status":Boolean,
    "userID":String

})

const TodoModel=mongoose.model("todocoll",todoShema)

module.exports={
    TodoModel
}