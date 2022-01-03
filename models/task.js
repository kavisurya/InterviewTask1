const mongoose = require("mongoose")


//Creating schema
const TaskSchema = new mongoose.Schema(
    {
        taskname : {
            type : String,
            required : true
        },
        to : {
            type : String,
            required : true
        }
    }
)

//Exporting the schema
exports.TaskSchema = mongoose.model("TaskSchema", TaskSchema)