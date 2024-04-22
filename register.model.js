const mongoose=require('mongoose');


const userDetails = new mongoose.Schema({
    name: { type: String, required: true },
 
    email: { type: String, required: true, unique: true },
    mess: { type: String, required: true },

  });
const Users=new mongoose.model('UserDetail',userDetails);
module.exports=Users