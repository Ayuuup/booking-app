const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "ayoub"

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

app.post('/login',async(req,res)=>{
    const {email,password} = req.body
    const userDoc = await User.findOne({email})
    if(userDoc) {
        if(password==userDoc.password){
            jwt.sign({email:userDoc.email,id:userDoc._id,},jwtSecret,{},(err,token)=>{
                if(err) throw err
                res.cookie('token',token).json("password ok")
            })
            
        }
        else{
            res.status(422).json("pass not okay")
        }
    }
    else {
        res.json("user not found")
    }

})


app.listen('4000')