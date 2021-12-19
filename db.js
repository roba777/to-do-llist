const mongoose=require('mongoose')

const dbURI='mongodb://localhost:27017/TOdoListV01'
mongoose.connect(dbURI)


//ext

const db=mongoose.connection

db.on('error',(err)=>{
    console.log('ERROR in MongoDB');
});


db.on('connected',(err)=>{
    console.log('MongoDB is Connected');
});