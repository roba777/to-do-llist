const express= require('express');
const app= express()

const db=require('./db')
const Todo= require('./backend/todo')
//console.log(Todo)


app.use(express.json())


app.get('/',(req,res)=>{
    res.json("GIT ///is working");
});

app.get('/tasks', (req,res)=>{
    Todo.find({}, (err,data)=>{
        if(err){
            console.log('ERROR:', err);
        }else{
            res.json(data);
        }
    });
});

app.post('/tasks', (req,res)=>{
    console.log('25:' ,req.body);

    Todo.create(req.body, (err,newTask)=>{
        if(err){
            console.log('ERROR:', err);
        }else{
            res.status(201).json(newTask);
        }
    });
});

app.delete('/tasks/:id',(req,res)=>{
    console.log('37:',req.params.id);
})

Todo.deleteOne({_id: req.params.id}, (err,deleteObj)=>{
    if(err){
        console.log("ERROR:", err);
    }else{
       deleteObj.deleteCount === 1
       res.json("Delete one todo successfully")
        res.status(404).json("This todo is not found");
    }
});


app.put('/tasks/:id',(req,res)=>{
    console.log('37:',req.params.id);
})

Todo.updateOne({_id: req.params.id},
     {title:req.body.newTitle},
     (err, updateObj)=>{
    if(err){
        console.log("ERROR:", err);
        res.status(400).json(err)
    }else{
        console.log(updateObj)
       deleteObj.deleteCount === 1
       res.json("Delete one todo successfully")
        res.status(404).json("This todo is not found");
    }
});




app.get('/tasks',(req,res)=>{
    res.json("GIT ///is working")
})

app.listen(5000,()=>{
    console.log("server is working.....")
})

// requests to the url "/" ( http://localhost:5000/ )