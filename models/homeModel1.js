const mongoose = require("mongoose");

const homeSchema1 = new mongoose.Schema({
	homeBanner:{
        homephotos: [{
            type: String,
          }],
    },
    product1:{
        photos1: [{
            type: String,
          }],
          product1Data:{
            data1:{
              type: String,
            },
            data2:{
                type: String,
            },
            data3:{
                type: String,
            }
          },
          content1:{
            title1:{
                type: String,
            },
            description1:{
                heading1:{
                    type: String,
                },
                paragraph1:{
                    type: String,
                },
                heading2:{
                    type: String,
                },
                paragraph2:{
                    type: String,
                },
                heading3:{
                    type: String,
                },
                paragraph3:{
                    type: String,
                },
                heading4:{
                    type: String,
                },
                paragraph4:{
                    type: String,
                },

            }
          }
    },
    product2:{
        photos2: [{
            type: String,
          }],
          product2Data:{
            data5:{
              type: String,
            },
            data6:{
                type: String,
            },
            data7:{
                type: String,
            }
          },
          content2:{
            title2:{
               type: String,
            },
            description2:{
                heading5:{
                   type: String,
                },
                paragraph5:{
                   type: String,
                },
                heading6:{
                   type: String,
                },
                paragraph6:{
                   type: String,
                },
                heading7:{
                   type: String,
                },
                paragraph7:{
                   type: String,
                },
                heading8:{
                   type: String,
                },
                paragraph8:{
                   type: String,
                },

            }
          }
    },
    productVitagoli:{
        headings:{
           type: String,
        },
        content11:{
           type: String,
        },
        content12:{
            type: String,
        },
    },
    homeCareHeading:{
       subHeading:{
        type: String,
       },
       photos13:[{
        type: String,
       }],
       photos14:[{
        type: String,
       }],
       photos15:[{
        type: String,
       }],
       photos16:[{
        type: String,
       }],
       photos17:[{
        type: String,
       }],
       photos18:[{
        type: String,
       }],
    },

    bookSlot:{
        bookSlotHeading:{
          type: String,

        },
        
        bookSlotPhotos:[{
          type: String,
        }]
    },
    videos:[
        {
            type:String
        }
    ],
    company:{
        logo:{
            type:String
        },
        companyContent:{
            type:String
        },
        kidsPhotos:[{
            type : String
        }]
    },
    faqs:{
        faqsHeading:{
            type:String
        },
        faqsQA:{
            
                question1:{
                    type:String
                },
                answer1:{
                    type:String
                },
                question2:{
                    type:String
                },
                answer2:{
                    type:String
                },
                question3:{
                    type:String
                },
                answer3:{
                    type:String
                },
                question4:{
                    type:String
                },
                answer4:{
                    type:String
                },
                 question5:{
                    type:String
                },
                answer5:{
                    type:String
                },
                 question6:{
                    type:String
                },
                answer6:{
                    type:String
                }
                
            }
        
         
        
      
    }
});

module.exports = mongoose.model("Home1", homeSchema1);
