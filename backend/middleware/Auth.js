const jwt = require("jsonwebtoken")
const User=require("../model/UserSchema")
exports.protected = async (req, res) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({message:"Unauthorized access"})
    }
    let token = authHeader.split(" ")[1]
    try {
        const decoded= await jwt.verify(token,process.env.jwtkey)
        const user = await User.findById(decoded.userid)
        if (!user) {
            res.status(401).json({message:"Invaild token"})
        }
        req.user = user
        next()
    }
    catch (err) {
        console.error("Invaild Auth", err)
        res.status(401).json({message:"Invaild Auth"})
    }

}