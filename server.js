const express= require('express');
const { object } = require('webidl-conversions');
const app= express()

const db=require('./db')
const Todo= require('./backend/todo')
console.log(Todo)





app.get('/',(req,res)=>{
    res.json("GIT ///is working")
})





app.get('/tasks',(req,res)=>{
    res.json("GIT ///is working")
})

app.listen(5000,()=>{
    console.log("server is working.....")
})

// requests to the url "/" ( http://localhost:5000/ )