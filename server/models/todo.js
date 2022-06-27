//import mongoose 

const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title:  {
        type:String,
    },
    description:{
        type: String,
    },
    priority:{
        type:String,
    },
    completed:{
        type: Boolean,
    },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;