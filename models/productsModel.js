const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  
  heading:{
    type:String,
  },
  title1: {
    type : String ,
  },
  title2:{
    type:String,
  },
  price: {
    type : Number
  },
  description: {
    
  },
  image: [
    {
      type : String
    }
  ],
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
