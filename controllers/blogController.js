
const Blog =require("../models/blogModel")

const createNewBlog=async(req,res)=>{
   
    const { title, content,photos,companyName,date,about,benefits,faqs } = req.body;

    try {
      const newBlog = await Blog.create({ title, photos,companyName,date,
        content: {
				content1: content.content1,
				content2: content.content2,
      },
      about: {
				aboutHeading: about.aboutHeading,
				aboutContent: about.aboutContent,
      },
      benefits:{
        benefitsHeading: benefits.benefitsHeading,
        benefitsContent:{
          content1:benefits.benefitsContent.content1,
          heading1:benefits.benefitsContent.heading1,

          content2:benefits.benefitsContent.content2,
          heading2:benefits.benefitsContent.heading2,

          content3:benefits.benefitsContent.content3,
          heading3:benefits.benefitsContent.heading3,

          content4:benefits.benefitsContent.content4,
          heading4:benefits.benefitsContent.heading4,

          content5:benefits.benefitsContent.content5,
          heading5:benefits.benefitsContent.heading5,

        }
      },
      faqs:{
        faqsHeading: faqs.faqsHeading,
        faqsContent:{
          heading1:faqs.faqsContent.heading1,
          content1:faqs.faqsContent.content1,

          heading2:faqs.faqsContent.heading2,
          content2:faqs.faqsContent.content2,

          heading3:faqs.faqsContent.heading3,
          content3:faqs.faqsContent.content3,

          heading4:faqs.faqsContent.heading4,
          content4:faqs.faqsContent.content4,

          heading5:faqs.faqsContent.heading5,
          content5:faqs.faqsContent.content5,
        }
      },
     
     });
      res.status(201).json(newBlog);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error from create blog api' });
    }
      
}

const getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.json({
        success: true,
        message: "All blogs retrieved successfully",
        blogs,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

const singleBlog=async(req, res)=>{
  const blogId = req.params.id;
  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error from get blog api' });
  }
}


  module.exports = { getAllBlogs,createNewBlog,singleBlog};