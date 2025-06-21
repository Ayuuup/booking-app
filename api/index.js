const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "ayoub"
const cookieParser = require("cookie-parser")

const app = express()

//enable api calls from this origin 
app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173'
}))
// parse json upon requests
app.use(express.json())

// used to be able to read cookie from req object
app.use(cookieParser())

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
                res.cookie('token',token).json(userDoc)
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

app.get("/profile",(req,res)=>{
    const {token} = req.cookies
    if (token) {
        jwt.verify(token,jwtSecret,{},async(err,userData)=>{
            if (err) throw err
            const {name,email,_id} = await User.findById(userData.id)
            res.json({name,email,_id})
        })
    }
})


app.listen('4000')