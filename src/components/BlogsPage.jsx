import React, { useState } from 'react';
import BlogsPageDifferentBlogs from '../anotherComponent/BlogPageDifferentBlogs'
import { Grid, Card, CardMedia, IconButton, Box, Typography, Button } from '@mui/material';
const BlogsPage = () => {
 
  return (
   <Box>
    
    <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"30px"} color={"#009090"}>Latest Blogs</Typography>
   <BlogsPageDifferentBlogs/>
   </Box>
  );
};

export default BlogsPage;
