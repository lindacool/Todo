const mongoose = require("mongoose");

const schemaTodo = new mongoose.Schema(
    {
        text: {type: String, required:true, minlength: 3},
        // date: { type: Date, default: Date.now}
    }
)

const newTodo = mongoose.model("New Todo", schemaTodo); //"comment" är collektionen i databasen. 

module.exports = newTodo;