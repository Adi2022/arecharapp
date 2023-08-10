const mongoose = require('mongoose');
require('dotenv').config();


const connectToDb=async ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((connection) => console.log('Databse Connected!'))
    .catch((err)=>{
       console.log(err)
    })
}


module.exports=connectToDb;