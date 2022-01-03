const express = require("express")
const Router = express.Router()
const mongoose = require("mongoose")
const TaskSchema = mongoose.model("TaskSchema")

Router.get("/task/:id",(req,res)=>
{
    var id = req.params.id


    if(!id)
    {
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
        TaskSchema.findOne(
            {
                _id : id
            }
        ).then((data)=>
        {
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