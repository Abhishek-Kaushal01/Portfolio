const express=require("express");
const path=require('path');
const app=express();
var bodyParser=require("body-parser");
var LogInCollection=require('./mogooes');
const Users = require("./register.model.js");
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'assets')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/blogs',(req,res)=>{
  res.sendFile(path.join(__dirname,'blogs.html'));
})
app.get('/resum',(req,res)=>{
  res.sendFile(path.join(__dirname,'resum.html'));
})
app.get('/services',(req,res)=>{
  res.sendFile(path.join(__dirname,'services.html'));
})
app.post('/', async (req, res) => {
  const {name, email,mess} = req.body
      console.log(email);
      const user = {
        name,
        email,
        mess
      }
    try {
      const checking = await LogInCollection.findOne({email});
      if(checking){
        res.status(400).send("User details already exist");
        return;
      }
    const newUser =new LogInCollection(user);
    await newUser.save();
      // res.status(201).sendFile(path.join(__dirname,'index.html'));
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
  });
app.listen(3000)