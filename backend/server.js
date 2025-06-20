const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()
require("./Connection/Connect")
const userApi = require("./routes/Route")
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use('/api',userApi)

app.listen(process.env.PORT, () => {
    console.log("server is started")
})