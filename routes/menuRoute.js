const express = require('express');
const { allMenu, setMenu, increase,setAvailability } = require('../controllers/menuController');
const router = express.Router();

router.get("/all_menu",allMenu)
router.post("/set_menu",setMenu)
router.post("/increase",increase)
router.post("/setAvailability",setAvailability)

module.exports = router