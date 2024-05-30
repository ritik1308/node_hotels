// const { union, uniq } = require('lodash');
const mongoose= require('mongoose');
const PersonSchema=new mongoose.Schema({
   name: {
        type:String,
        required:true
    },
   age: {
        type:Number
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,

    },
    salary:{
        type:Number,
        required:true
    },
    
})
const Person=mongoose.model('Person',PersonSchema);
module.exports=Person;