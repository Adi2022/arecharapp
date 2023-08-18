import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import { Button } from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const styles = {
  banner: {
    backgroundColor: "rgb(255,246,219)",
  },
  bannerTitleStyle1: {
    paddingLeft: "6%",
    paddingRight: "6%",
    paddingTop: "4.6%",
    paddingBottom: "1%",
    fontSize: "70px",
    color: "#000",
    fontWeight: "normal",
    letterSpacing: " 1.02px",
    fontStyle: 'italic',
    fontFamily: 'Baskerville',
    textAlign: {
      xxs: "left",
      xs: "left",
      sm: "left",
      md: "left",
      lg: "left",
      xl: "left",
    },
  },


  aboutImage: {
    width: "15%",
    paddingLeft: "6%",
    paddingRight: "6%",
   marginTop:"5%"
  },

  contact: {
    width: "100%",
    height:"100%"
  },

  bannerTitleStyle3: {
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
    fontSize: "16px",
  },
  paragraph: {
    letterSpacing: "normal",
    marginBottom:"4%",
    marginTop:"4%",
    paddingLeft: "6%",
    paddingRight: "6%",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: 'Poppins',
    fontSize: '14px',
    textAlign: {
      xxs: "left",
      xs: "left",
      sm: "left",
      md: "left",
      lg: "left",
      xl: "left",
    },
  },
  learnbutton:{
backgroundColor:"#fff",
color:"#000",
paddingLeft: "6%",
paddingRight: "6%",
marginLeft: "6%",
marginBottom:"2%",
"&:hover": {
  backgroundColor: "#000",
  color:'#fff'
},


  }
};


const LearnMore = () => {
  const [blogsData, setBlogsData] = useState([]);
  const navigate=useNavigate()
	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://mernappback12.onrender.com/home");
			console.log(response);
			setBlogsData(response.data.impact1); // Update this line
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

  const handleLearnMore=()=>{
   navigate('/about')
  }

	useEffect(() => {
		fetchBlogs();
	}, []);
  return (
    <Grid container >
      {blogsData.map((items)=>{
        return (
          <>
           <Grid item xs={12} md={6} sx={styles.gridLeft} style={{backgroundColor:"#009090"}}>
        <img src={items.company.logo} style={styles.aboutImage} alt="img1" />
      
          <Typography variant="body1" sx={styles.paragraph}>
           {items.company.companyContent}
          </Typography>
         
         
         <Button sx={styles.learnbutton} onClick={handleLearnMore}>Know More</Button>

      </Grid>

      <Grid item xs={12} md={6}>
        <Grow in={checked} timeout={1500} direction="left">
          <img src={items.company.kidsPhotos} alt="homeBanner" style={styles.contact} />
        </Grow>
      </Grid>
          </>
        )
      })}
    
    </Grid>
  );
};
export default LearnMore;