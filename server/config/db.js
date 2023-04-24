const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dj:my123@cluster0.bt1ooii.mongodb.net/test/BlogApp").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})