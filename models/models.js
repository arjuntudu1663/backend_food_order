const mongoose = require("mongoose")

const User = mongoose.model("user_food_order",{
     
    username:String,
    password:String,
    cart:[]
     
})

const Menu = mongoose.model("menu_food_order",{
     
    name:String,
    category: String,
    price:Number,
    availability: Boolean,
    count:Number
})


const Owner = mongoose.model("owner_food_order",{
    
    username:String,
    password:String,
    menus:[],
    customers:[]

})


const Order = mongoose.model("order_food_order",{
      
    userId:String,
    items:[],
    totalAmount:Number,
    status:Boolean

})

module.exports = {User,Menu,Order}



