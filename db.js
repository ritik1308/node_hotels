const mongoose=require('mongoose');
const mongodbUrl='mongodb://localhost:27017/hotels';
mongoose.connect( mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("datbase is connected");
});
db.on('disconnected',()=>{
    console.log("database is shutdown");
});
db.on('error',()=>{
    console.error("there was error in connection",err);
});
module.exports=db;