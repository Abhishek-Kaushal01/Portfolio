const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Abhi:12345@cluster0.4fewzoc.mongodb.net/",{
    dbName: "Portfolio",
})
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(`No connection ${err}`);
})
const logInSchema = new mongoose.Schema({
    name: { type: String, required: true }, // changed from Firstname
    
    email: { type: String, required: true, unique: true },
    mess: { type: String },
    
  });
const LogInCollection=new mongoose.model('UserData',logInSchema);
module.exports=LogInCollection;
