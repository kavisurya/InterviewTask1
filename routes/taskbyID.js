const express = require("express")
const Router = express.Router()
const mongoose = require("mongoose")
const TaskSchema = mongoose.model("TaskSchema")

Router.get("/task/:id",(req,res)=>
{
    //getting id from URL 
    var id = req.params.id


    if(!id)
    {
        //If the data empty or missing

        // 61d3011fdf9d188fb5fa22c2

        res.json(
            {
                error: "parameter missing !!"
            }
        )

        res.status(421)
    }

    else
    {

        //Finding the data using by ID from DB
        TaskSchema.findOne(
            {
                _id : id
            }
        ).then((data)=>
        {
            //If the data exists
            if(data)
            {
                res.json(data)
            }
            else{
                res.json(
                    {
                        error: "Nothing Data"
                    }
                )
                res.status(421)
            }
        }).catch((err)=>
        {
            //Handling the error

            res.json(
                {
                    error: "Nothing Data"
                }
            )
            res.status(421)
            console.log(err)
        })
    }

})


module.exports = Router