const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")

dotenv.config()

const MONGOURI = process.env.MONGOURI
const JWT = process.env.JWT


//routes
const userRoute = require("./routes/userRoute")
const menuRoute = require("./routes/menuRoute")

//middleware
app.use(express.json());
app.use(cors({
    origin:["https://fontend-food-order.vercel.app","http://localhost:3000"]
}))

//databse connection
try{
    mongoose.connect("mongodb+srv://arjuntudu9163:fv9FIKG1eb8UKcee@cluster0.cq6wv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}catch(e){
    console.log(e)
}

//routes usage
app.use("/user",userRoute)
app.use("/menu",menuRoute)

//token verify
app.post("/verifyToken",async(req,res)=>{
    
    const token = req.body.token

    try{
         
        const response =  jwt.verify(token,JWT)
        res.json({"value":true})

    }catch(e){
        
       res.json({"value":false})

    }
    

})

//starting route
app.get("/",(req,res)=>{
    res.json({"value":true})
})


//listen
app.listen(5000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("app started")
    }
})