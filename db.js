// const mongoose=require('mongoose');
// // const mongodbUrl='mongodb://localhost:27017/hotels';
//   //const  mongodbUrl='mongodb+srv://Ritikkumar:Ritik12345@cluster0.nxwtqve.mongodb.net/';
//   const  mongodbUrl='mongodb+srv://Ritikkumar:Ritik12345@cluster0.nxwtqve.mongodb.net/';
// mongoose.connect( mongodbUrl,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// const db=mongoose.connection;
// db.on('connected',()=>{
//     console.log("datbase is connected");
// });
// db.on('disconnected',()=>{
//     console.log("database is shutdown");
// });
// db.on('error',()=>{
//     console.error("there was error in connection",err);
// });
// module.exports=db;

const mongoose=require('mongoose');
//const mongodbUrl='mongodb://localhost:27017/hotels';
require('dotenv').config();
const mongodbUrl= process.env.Mongo_DB;

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
    console.error("there was error in connection");
});
module.exports=db;