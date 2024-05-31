
// Create our own Server.......................
  

const express = require('express');
const app = express();
const db=require('./db');
 
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
 const Person=require('./models/person');
 const Menu=require('./models/menu');
 require('dotenv').config();

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
const port=process.env.Port ||3000;

app.listen(port,()=>{
  console.log("node.js server worked");
  
});


