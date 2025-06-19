const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const bcrypt = require("bcryptjs")

const app = express()

//enable api calls from this origin 
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
// parse json upon requests
app.use(express.json())

//load  config from env file
require("dotenv").config()
//mongodb connection
mongoose.connect(process.env.MONGO_URL)

//pass secret

app.get("/test",(req,res)=>{
    res.json('test ok')
})

app.post("/register",async (req,res)=>{
    const {name,email,password} =  req.body
    try{
        const userDoc = await User.create({
            name,
            email,
            password
        })
        res.json(userDoc)
    }

    catch(e) {
        res.status(422).json(e)
    }
    
})


app.listen('4000')