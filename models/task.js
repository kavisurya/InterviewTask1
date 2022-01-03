const mongoose = require("mongoose")

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


exports.TaskSchema = mongoose.model("TaskSchema", TaskSchema)