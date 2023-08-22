import { Box, Grid, Typography ,Modal,TextField} from "@mui/material";
import { Paper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import ModalComponent from "../Modal/ModalComponent";
import axios from "axios";
const styles = {
  main: {
   
    marginTop:{
      xs:"28%",
      md:"10%"
    }
  },
};
const HomeBanner = () => {
  const [blogsData, setBlogsData] = useState([]);
  const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://mernappback12.onrender.com/home");
			console.log(response);
      setBlogsData(response.data.impact1[0].homeBanner.homephotos); // Update this line
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

  useEffect(() => {
		fetchBlogs();
	}, []);

  return (
    <Box sx={styles.main}>
      {/* <Carousel> */}
      {blogsData.map((photoUrl, index) => (
          <Paper key={index}>
            <img src={photoUrl} alt={`Carousel ${index}`} style={{ width: "100%" }} />
          </Paper>
        ))}
      {/* </Carousel> */}
      <ModalComponent/>
    </Box>
  );
};

export default HomeBanner;
