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



app.post('/menu', async(req,res)=>{
  try{
    const data=req.body;
    const newMenu= new Menu(data);
    const response=await newMenu.save();
    console.log('data is saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json("internal server error");
  }
})


app.get('/menu',async(req,res)=>{
    try{
      const data= await Menu.find();
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      console.log("data is not fineddd");
    }

})
   
    




const Rounter=require('./Routes/PersonRoutes');
app.use('/Person',Rounter);

app.listen(3000,()=>{
  console.log("node.js server worked");
  
});


