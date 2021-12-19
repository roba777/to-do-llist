const {Schema, model}= require('mongoose');


const todoSchema=new Schema({
   title:String,
   isCompleted: Boolean
})

//model

const TOdo= model('Todo', todoSchema)

module.exports= Todo