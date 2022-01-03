const express = require("express")
const Router = express.Router()
const mongoose = require("mongoose")
const TaskSchema = mongoose.model("TaskSchema")

//Posting the task to the DB
Router.post("/post_task", (req,res)=>
{

    //Getting data from request body
    var {taskname, to} =  req.body

    if(!taskname || !to)
    {
        //If the data empty or missing
        res.json(
            {
                error: "please fill all fields"
            }
        )
        res.status(421)
    }
    else
    {
        //Creating ins.. to insert the data to DB 
        let insert = new TaskSchema(
            {
                taskname,
                to
            }
        )

        //Inserting the data
        insert.save().then((data)=>
        {
            if(data)
            {
                //If the data inserted success
                res.json(
                    {
                        success: "Data inserted Sucesss"
                    }
                )
                res.status(200)
            }
            else
            {
                //If the data inserted failure

                res.json(
                    {
                        error: "Data not inserted"
                    }
                )
                res.status(421)
            }
        }).catch((err)=>
        {
            //Handling the error
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