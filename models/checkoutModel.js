const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
   name:{
    type:String,
   
   },
   phoneNumber:{
    type:Number,
   
   },
   email:{
    type : String ,
   },
   pinCode:{
    type: Number
   },
   addressLine1:{
    type:String
   },  
   addressLine2:{
    type:String
   },
   city:{
    type:String
   },
   state:{
    type:String
   }
  });
  
  
  module.exports = mongoose.model("Checkout", checkoutSchema);  