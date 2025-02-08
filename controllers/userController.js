
const {User,Menu,Order} = require("../models/models")
const jwt = require("jsonwebtoken")
const dontenv = require("dotenv");

dontenv.config();

const JWT = process.env.JWT

const loginUser = async function(req,res){
    
    console.log("login function triggered")

    try{
       
       const response = await User.find({username:req.body.username,password:req.body.password});
       console.log(response)
       if(response.length>0){
          
        const token =  jwt.sign({
             data:req.body
          },JWT,{expiresIn:'5h'})
        
          res.json({"value":true,"token":token,"response":response[0]})
    
       }
       
       
    }catch(e){
       if(e){
           console.log(e)
       }
    }

}

const registerUser = async function(req,res){
     
     try{
        
        const response = await User.find({username:req.body.username,password:req.body.password});
        if(response.length>0){
             
            res.json({"value":false})

        }else{
            
            const response2 = await User.create(req.body);
            res.json({"value":true,"response":response2})

        }

        
        
     }catch(e){
        if(e){
            console.log(e)
        }
     }

}


const addCart = async function(req,res){

     console.log(req.body.item)
     
    try{
         
        const menuResponse = await Menu.find({_id:req.body.item._id});
      
        const userResponse = await User.find({_id:req.body.userId});
        

         console.log(userResponse[0].cart,"<=== curr cart")
         

        
        

    }catch(e){
        console.log(e)
    }

}


const order = async function(req,res){
   
    try{
         
        const response = await Order.create({userId:req.body.userId,items:req.body.items,totalAmount:req.body.totalPrice,status:true})
        console.log(response,"<=== order placed")
        res.json(response)

    }catch(e){}
    

}


const myOrders = async function(req,res){
   
    try{
         
        const response = await Order.find({userId:req.body.userId})
        console.log(response,"<=== myOrders")
        res.json(response)

    }catch(e){}
    

}

module.exports = {registerUser,loginUser,addCart,order,myOrders}