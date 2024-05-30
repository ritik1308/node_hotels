// var fs=require('fs');
// var os=require('os');
// var notes=require("./notes.js");
// var _ = require('lodash');
// // const user=os.userInfo();
// // console.log(user);
// // console.log(user.username);

// // fs.appendFile('greeting.txt',"hii"+os.username+'\n',()=>{
// //     console.log("file is loaded")
// // });
// // console.log(notes);
// //  const val=notes.add(100+addEventListener,b);
// //  console.log(val);
// console.log(notes.age);
// const val=notes.add(100+10,50);
// let array=["people","orange"];
// // const newarray=_.concat(array,"system");
// var other = _.concat(array, "pink","system");
// console.log(other);





// Create our own Server.......................
  

const express = require('express');
const app = express();
const db=require('./db');
 
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
 const Person=require('./models/person');
 const Menu=require('./models/menu');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/idli',(req,res)=>{
    res.send("hiii you have to select idli")
})
// app.post('/person',async(req,res)=>{
//   try{
//     const data=req.body;
//     const newPerson=new Person(data);
//     const response=await newPerson.save();
//     console.log('data is saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:"internal server error"});
//   }
// })
// app.get('/person' ,async(req,res)=>{
//   try{
//     const data= await Person.find();
//     console.log("data is fetched");
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:"internal server error"});
//   }
// })

// app.post('/menu', async(req,res)=>{
//   try{
//     const data=req.body;
//     const newMenu= new Menu(data);
//     const response=await newMenu.save();
//     console.log('data is saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json("internal server error");
//   }
// })
// app.get('/menu',async(req,res)=>{
//     try{
//       const data= await Menu.find();
//       res.status(200).json(data);
//     }
//     catch(err){
//       console.log(err);
//       console.log("data is not fineddd");
//     }

// })
// app.get('/person/:worktype',async(req,res)=>{
//   try{
//     const worktype=req.params.worktype;
//     if(worktype=='chef'||worktype=='waiter' ||worktype=="manager"){
//       const response= await Person.find({work:worktype});
    
//       console.log("response mil gya");
//       res.status(200).json(response);

//     }
//     else{
//       res.status(400).json({srror:"invaild worktype"});
//     }
   
    
//   }
//   catch(err){
//     console.log(err);
//     console.log("internal serber error")
//   }
// })



// app.put('/person/:id',async(req,res)=>{
//   try{
//       const personId=req.params.id;
//       const updatdata=req.body;
//       const response= await Person.findByIdAndUpdate(personId,updatdata,{
//           new:true,
//           runValidators:true
//       })
//       if(!response){
//           return res.status(202).json({error:"person is not found"});
//       }
//       console.log('data is updated');
//       res.status(200).json(response);
//   }
//   catch(err){
//       console.log(err);
//       res.status(500).json({error:"internal server error"})
//   }
// })
// app.delete('/person/:id',async(req,res)=>{
//   try{
//       const personId=req.params.id;
//       const response=await Person.findByIdAndDelete(personId);
//       if(!response){
//           res.status(404).json({error:"we can't get data"});
//       }
//       console.log("data is successfully Deleted");
//       res.status(500).json("person deleted succesfully");
//   }
//   catch(err){
//       console.log(err);
//       res.status(500).json({error:"internal server error"})

//   }
// })


 const Rounter=require('./Routes/PersonRoutes');
 app.use('/person',Rounter);

app.listen(3000,()=>{
  console.log("node.js server worked");
  
});


