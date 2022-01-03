const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
app.use(express.json())


//Models
require("./models/task")
mongoose.model("TaskSchema")

//Routes
app.use(require("./routes/alltask"))
app.use(require("./routes/posttask"))
app.use(require("./routes/taskbyID"))

//Listening Port
app.listen(process.env.PORT, () => {
    console.log(`The app listrn on ${process.env.PORT}`)
})


//Conecting DB
mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("DB CONNECTED")
})