const express=require('express');
const router=express.Router();
const Person=require('../models/person');


router.get('/', async (req,res)=>{
    try{
      const data= await Person.find();
      console.log("data is fetched");
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  });


// router.get('/:worktype',async (req,res)=>{
//     try{
//       const worktype=req.params.worktype;
//       if(worktype=='chef'||worktype=='waiter' ||worktype=="manager"){
//         const response= await Person.find({work:worktype});
      
//         console.log("response mil gya");
//         res.status(200).json(response);
  
//       }
//       else{
//         res.status(400).json({srror:"invaild worktype"});
//       }
     
      
//     }
//     catch(err){
//       console.log(err);
//       console.log("internal serber error")
//     }
//   });


  router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newPerson=new Person(data);
      const response=await newPerson.save();
      console.log('data is saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  });
  




// router.put('/:id',async(req,res)=>{
//     try{
//         const personId=req.params.id;
//         const updatdata=req.body;
//         const response= await Person.findByIdAndUpdate(personId,updatdata,{
//             new:true,
//             runValidators:true
//         })
//         if(!response){
//             return res.status(202).json({error:"person is not found"});
//         }
//         console.log('data is updated');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"internal server error"})
//     }
//   });



//   router.delete('/:id',async(req,res)=>{
//     try{
//         const personId=req.params.id;
//         const response=await Person.findByIdAndDelete(personId);
//         if(!response){
//             res.status(404).json({error:"we can't get data"});
//         }
//         console.log("data is successfully Deleted");
//         res.status(500).json("person deleted succesfully");
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"internal server error"})
  
//     }
//   });


module.exports=router;