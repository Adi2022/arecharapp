const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   firstName:{
    type:String,
    required:[true,"Please enter first name"]
   },
   lastName:{
    type: String,
    required:[true,"Please enter last name"]
   },
   email :{
    type:String,
    unique: true,
   },
   mobile:{
    type:Number,
    minlength:10,
    maxlength: 12,
    trim:true,
    default:"987654321",
    match:/^\d+$/,
    required: [true,'please provide a valid number'],

   },
   password: {
    type: String,
    required: true,
  },
  cPassword:{
    type:String,
    validate(value){
        if (this.password!== value){
            throw Error('passwords do not match');
        }
    }
  }
     
  });
  
  
  module.exports = mongoose.model("User", userSchema);  