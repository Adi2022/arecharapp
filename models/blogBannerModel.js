const mongoose = require("mongoose");

const blogSchemaBanner = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    photos: [{
        type: String,
      }],
     
  });
  
  
  module.exports = mongoose.model("BlogBanner", blogSchemaBanner);  