const express = require("express")
const Router = express.Router()
const mongoose = require("mongoose")
const TaskSchema = mongoose.model("TaskSchema")

//Geting all tasklist from DB
Router.get("/alltask", (req, res)=>
{
    TaskSchema.find().then((data)=>
    {
        //If the data exists
        if(data)
        {
            res.json(data)
            res.status(200)
        }
        else
        {
            res.json(
                {
                    error: "Nothing Data"
                }
            )
            res.status(421)
        }
    }).catch((err)=>
    {
        //Handling error
        res.json(
            {
                error: "Nothing Data"
            }
        )
        res.status(421)
        console.log(err)
    })
})

module.exports = Router
// Rahul kumar6:26 PM
// POST - create a todo
//           - body will be simple string
//           - ex - read the XYZ book
// GET - create an API to get all todos
// GET - create an API to get a todo by id