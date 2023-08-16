import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from "react";
import axios from "axios";
// Styled components to apply custom styles
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const Image = styled('img')({
  borderRadius: '50%',
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  marginBottom: '40px',
});

const Name = styled('div')({
  fontSize: '40px',
  marginBottom: '100px',
  color:"GrayText"
});

const AboutPageFounder = () => {
  const [blogsData, setBlogsData] = useState([]);
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
    <Container>
     {blogsData.map((items)=>{
      return (
        <>
         <Image src={items.founderPhotos} alt="Founder" />
      <Name>{items.founderName}</Name>
        </>
      )
     })}
    </Container>
  );
};

export default AboutPageFounder;
