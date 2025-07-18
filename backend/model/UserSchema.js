const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true, 
    },
    password: {
       type: String,
        required:true,
    }
})

const User = mongoose.model('user', userSchema)

module.exports=User