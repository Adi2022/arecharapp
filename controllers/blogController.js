
const Blog =require("../models/blogModel")

const createNewBlog=async(req,res)=>{
   
    const { title, content,photos,aboutMedicine } = req.body;

    try {
      const newBlog = await Blog.create({ title, content,photos,aboutMedicine });
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