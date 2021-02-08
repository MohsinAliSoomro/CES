const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const Department =new mongoose.Schema({
    name:String,
    program:[{type:mongoose.Schema.Types.ObjectId,ref:'Program'}]
})
const Dep= mongoose.model("Department",Department);

const Program =new mongoose.Schema({
    name:String,
    department:{type:mongoose.Schema.Types.ObjectId,ref:'Department'},
})


app.post('/create',async(req,resp)=>{
   const dep = (await Dep.createCollection('department')).insertOne(req.body)
   resp.send(dep)
    // await dep.save().then(res=>console.log(res)).catch(err=>console.log(err))
})

app.listen(4000,()=>console.log('Server Runnig 4000'))