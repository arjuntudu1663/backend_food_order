const {Menu} = require("../models/models")


const allMenu = async function(req,res){
     console.log("allmenu triggered------------------")
    try{
        const response = await Menu.find({});
        console.log(response)
        res.json(response)
    }catch(e){}
   

}


const setMenu = async function(req,res){
   
    console.log(req.body,"<=== incoming menu")
    
    try{
        const response = await Menu.create(req.body);
        console.log(response)
        res.json(response)
    }catch(e){
        console.log(e)
    }

    

}

const setAvailability = async function(req,res){
   
    console.log(req.body,"<=== incoming menu")
    
    try{
        
        const response = await Menu.findOneAndUpdate({_id:req.body.id},{$set:{availability:req.body.status}})
        console.log(response,"<===status update")
        res.json(response)

    }catch(e){
       
    }

    

}

const increase = async function (req,res){
     console.log("increase hittttttttt")
    try{
        const response = await Menu.find({_id:req.body.id});
        
        const prev_count = response[0].count +1

        const response2 = await Menu.findOneAndUpdate({_id:id},{$set:{count:prev_count}})

        console.log(response2,"<=== update response")

    }catch(e){

    }

}


module.exports = {allMenu,setMenu,increase,setAvailability}