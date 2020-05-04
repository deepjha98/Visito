var mongoose= require("mongoose");
var URI ="mongodb//deep:deep@123@cluster0-cls1q.mongodb.net/test?retryWrites=true&w=majority";

var connectDB = async()=>{
    await mongoose.connect(URI,{ useUnifiedTopology:true ,useNewUrlParser:true});
    console.log("Database Connected");
};
module.exports= connectDB; 