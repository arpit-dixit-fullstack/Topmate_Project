const express = require("express")
const router=express.Router()
const { AddUser,logIn } = require("../controller/userController")

router.post("/register", AddUser)
router.post("/login",logIn)
module.exports=router