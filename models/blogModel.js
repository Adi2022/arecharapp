const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    companyName:{
      type: String,
      required: true,
    },
    date:{
      type: Date,
      default:Date.now(),
    },
    content: {
    content1:{
      type: String,
      required: true,
    },
    content2:{
      type: String,
      required: true,
    }
    },
    photos: [{
        type: String,
      }],
      about: {
        aboutHeading:{
          type: String,
          required: true,
        },
        aboutContent:{
          type: String,
          required: true,
        }
        },
        benefits: {
          benefitsHeading:{
            type: String,
            required: true,
          },
          benefitsContent:{
            
            content1:{
              type: String,
            },
            heading1:{
              type: String,

            },
            content2:{
              type: String,
            },
            heading2:{
              type: String,

            },
            content3:{
              type: String,
            },
            heading3:{
              type: String,

            },
            content4:{
              type: String,
            },
            heading4:{
              type: String,

            },
            content5:{
              type: String,
            }, 
            heading5:{
              type: String,

            },
          }
          },

          faqs:{
            faqsHeading:{
              type:String,
            },
            faqsContent:{
              heading1:{
                type: String,
              },
              content1:{
                type: String,
              },
              heading2:{
                type: String,
              },
              content2:{
                type: String,
              },
              heading3:{
                type: String,
              },
              content3:{
                type: String,
              },
              heading4:{
                type: String,
              },
              content4:{
                type: String,
              },
              heading5:{
                type: String,
              },
              content5:{
                type: String,
              }
            }
          }
     
  });
  
  
  module.exports = mongoose.model("Blog", blogSchema);  