const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({

    shop:{
      heading:{
        type:String,
      },
      subHeading:{
        type:String,
      },
      description:{
        type : String ,
      }
    },

    productVitagoli:{
        name:{
            type:String
        },
        content:{
            type:String
        }
    },
    product1:{
        photos:[{
            type:String,
        }],
        price:{
            type:Number
        },
        title:{
            type:String
        },
        quantity:{
            type: Number
        },
        singleProduct1:{
            photos:[{
                type:String,
            }],
            productBannerPhoto:[
                {
                    type:String,
                }
            ],
          
            productQualityPhotos:[
                {
                    type:String
                }
            ],
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
              fact:{
                heading1:{
                    type:String
                },
                subHeading1:{
                    type:String
                },
                content1:{
                    type:String
                },
                subHeading2:{
                    type:String
                },
                content2:[
                    {
                        type:String
                    }
                ],
                categoryImages:[
                    {
                        type:String
                    }
                ],
                benefits:{
                   heading:{
                    main:{
                        type:String
                    },
                    subheading1:{
                        type:String
                    },
                    subheading2:{
                        type:String
                    }
                   },
                   content:{
                    heading1:{
                        type:String

                    },
                    content1:{
                        type:String
                    },
                    heading2:{
                        type:String

                    },
                    content2:{
                        type:String
                    },
                    heading3:{
                        type:String

                    },
                    content3:{
                        type:String
                    },
                    heading4:{
                        type:String

                    },
                    content4:{
                        type:String
                    },
                    heading5:{
                        type:String
                    },
                    content5:{
                        type:String,
                    },
                    heading6:{
                        type:String
                    },
                    content6:{
                        type:String
                    },
                    heading7:{
                        type:String

                    },
                    content7:{
                        type:String
                    },
                    heading8:{
                        type:String

                    },
                    content8:{
                        type:String
                    },heading9:{
                        type:String

                    },
                    content9:{
                        type:String
                    },
                   }

                },
                headingNature:{
                    main:{
                        type:String
                    },
                    sub1:{
                        type:String
                    },
                    sub2:{
                        type:String
                    },
                    content2:{
                        type:String
                    },
                    photos:[
                        {
                            type:String
                        }
                    ],
                    fruitname:{
                        type : String,
                    },
                    fruitContent:{
                        type : String,
                    }

                },
                ingredientsData:{
                    title:{
                        type:String,
                    },
                    ingredientImages:[
                        {
                            type:String
                        }
                    ],
                    name:[
                        {
                            type:String
                        }
                    ]


                    
                }
              }
        }

    },

   
	
});

module.exports = mongoose.model("Shopping", shopSchema);
