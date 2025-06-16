const express = require("express")
const cors = require("cors")

const app = express()

//enable api calls from this origin 
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
// parse json upon requests
app.use(express.json())

app.get("/test",(req,res)=>{
    res.json('test ok')
})

app.post("/register", (req,res)=>{
    const {name,email,password} =  req.body
    res.json({name,email,password})
})


app.listen('4000')