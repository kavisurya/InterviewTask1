const express = require("express")
const Router = express.Router()
const mongoose = require("mongoose")
const TaskSchema = mongoose.model("TaskSchema")

Router.post("/post_task", (req,res)=>
{
    var {taskname, to} =  req.body

    if(!taskname || !to)
    {
        res.json(
            {
                error: "please fill all fields"
            }
        )
        res.status(421)
    }
    else
    {
        let insert = new TaskSchema(
            {
                taskname,
                to
            }
        )

        insert.save().then((data)=>
        {
            if(data)
            {
                res.json(
                    {
                        success: "Data inserted Sucesss"
                    }
                )
                res.status(200)
            }
            else
            {
                res.json(
                    {
                        error: "Data not inserted"
                    }
                )
                res.status(421)
            }
        }).catch((err)=>
        {
            res.json(
                {
                    error: "Something :("
                }
            )
            res.status(421)
            console.log(err)
        })
    }
})

module.exports = Router