const User = require("../model/UserSchema")
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
exports. AddUser = async (req,res) => {
    try {
        let { firstName, email, password } = req.body;

        //console.log(firstName, email, password);
        let hashPassword = await bcrypt.hash(password, 10)
        let allUser = await User.create({ firstName, email, password: hashPassword })
        res.status(200).json({ message: "User is added", user: allUser })
    } catch (err) {
        console.error("Error in adding User:", err)
        res.status(400).json({error:"Internal server error"})
    }
}

exports.logIn = async(req, res) => {
    try {
        let { email, password } = req.body
        console.log(email, password)
        let user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({message:"User not Found"})
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({message:"Invaild password"})
        }
        let token = jwt.sign({ userid: user._id }, process.env.jwtkey, { expiresIn: "1h" })
        res.status(200).json({message:"Token is created",token,data:email})
    } catch (err) {
        console.log("Login error",err)
        res.status(400).json({error:"Faild"})
    }
}