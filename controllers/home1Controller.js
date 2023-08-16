const Home1 = require("../models/homeModel1");

const createNewHomeData = async (req, res) => {
    const { homeBanner,product1,product2,productVitagoli,homeCareHeading,bookSlot,videos,company,faqs} = req.body;
    

    try {

      const newImpact1 = await Home1.create({ 
        
        homeBanner:{
            homephotos:homeBanner.homephotos
        },
        videos,
        company:{
          logo:company.logo,
          companyContent:company.companyContent,
          kidsPhotos:company.kidsPhotos,

        },
        product1:{
          photos1:product1.photos1,
          product1Data:{
                data1:product1.product1Data.data1,
                data2:product1.product1Data.data2,
                data3:product1.product1Data.data3,
            },
            content1:{
                title1:product1.content1.title1,
                description1:{
                  heading1:product1.content1.description1.heading1,
                  paragraph1:product1.content1.description1.paragraph1,
                  heading2:product1.content1.description1.heading2,
                  paragraph2:product1.content1.description1.paragraph2,
                  heading3:product1.content1.description1.heading3,
                  paragraph3:product1.content1.description1.paragraph3,
                  heading4:product1.content1.description1.heading4,
                  paragraph4:product1.content1.description1.paragraph4,
  
              }
            },
           
        },
        product2:{
            photos2:product2.photos2,
            product2Data:{
                data5:product2.product2Data.data5,
                data6:product2.product2Data.data6,
                data7:product2.product2Data.data7,
            },
            content2:{
                title2:product2.content2.title2,
                description2:{
                  heading5:product2.content2.description2.heading5,
                  paragraph5:product2.content2.description2.paragraph5,
                  heading6:product2.content2.description2.heading6,
                  paragraph6:product2.content2.description2.paragraph6,
                  heading7:product2.content2.description2.heading7,
                  paragraph7:product2.content2.description2.paragraph7,
                  heading8:product2.content2.description2.heading8,
                  paragraph8:product2.content2.description2.paragraph8,
  
              }
            },
           
        },
        productVitagoli:{
            headings:productVitagoli.headings,
            content11:productVitagoli.content11,
            content12:productVitagoli.content12,

        },
        homeCareHeading:{
            subHeading:homeCareHeading.subHeading,
            photos13:homeCareHeading.photos13,
            photos14:homeCareHeading.photos14,
            photos15:homeCareHeading.photos15,
            photos16:homeCareHeading.photos16,
            photos17:homeCareHeading.photos17,
            photos18:homeCareHeading.photos18,
        },
        
        bookSlot:{
          bookSlotHeading:bookSlot.bookSlotHeading,
          bookSlotPhotos:bookSlot.bookSlotPhotos,
        },
        faqs:{
          faqsHeading:faqs.faqsHeading,
          faqsQA:{
            question1:faqs.faqsQA.question1,
            answer1:faqs.faqsQA.answer1,

            question2:faqs.faqsQA.question2,
            answer2:faqs.faqsQA.answer2,

            question3:faqs.faqsQA.question3,
            answer3:faqs.faqsQA.answer3,

            question4:faqs.faqsQA.question4,
            answer4:faqs.faqsQA.answer4,

            question5:faqs.faqsQA.question5,
            answer5:faqs.faqsQA.answer5,

            question6:faqs.faqsQA.question6,
            answer6:faqs.faqsQA.answer6,
          }
        }
        })
      res.status(201).json(newImpact1);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error from create home api' });
    }
	
};

const getAllHomeData = async (req, res) => {
    try {
      const impact1 = await Home1.find();
      res.json({
        success: true,
        message: "All impacts retrieved successfully",
        impact1,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {  createNewHomeData ,getAllHomeData};
