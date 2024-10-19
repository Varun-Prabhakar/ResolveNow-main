const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/resolvenow")
.then(()=>{
   console.log("connected to mongodb")
})