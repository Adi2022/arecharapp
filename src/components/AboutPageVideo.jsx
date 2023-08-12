import { Container } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from "axios";
const AboutPageVideo = () => {
  const [blogsData, setBlogsData] = useState([]);
  
  const containerStyle = {
    paddingTop: '20px', // Add your desired padding value for the top
    paddingBottom: '20px', // Add your desired padding value for the bottom
  };

  const fetchBlogs = async () => {
		try {
			const response = await axios.get("http://localhost:3000/about1");
			console.log(response);
			setBlogsData(response.data.about1);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

  return (
    <Container maxWidth="md" style={containerStyle}>
     
      {blogsData.map((items)=>{
        return (
          <>
           <video controls width="100%" height="auto">
        <source src={items.videos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </>
        )
      })}
    </Container>
  );
};

export default AboutPageVideo;
