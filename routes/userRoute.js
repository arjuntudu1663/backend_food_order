const express = require('express');
const router = express.Router();
const {registerUser,loginUser,addCart,order,myOrders} = require("../controllers/userController")



router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/addCart",addCart)
router.post("/order",order)
router.post("/myOrders",myOrders)



module.exports = router