
const BlogBanner =require("../models/blogBannerModel")

const createNewBlogBanner=async(req,res)=>{
   
    const { title,photos} = req.body;

    try {
      const newBlog = await BlogBanner.create({ title, photos})
      res.status(201).json(newBlog);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error from create blog api' });
    }
      
}

const getBlogBanner = async (req, res) => {
    try {
      const blogs = await BlogBanner.find();
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




  module.exports = {createNewBlogBanner,getBlogBanner};