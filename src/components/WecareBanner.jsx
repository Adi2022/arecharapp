import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import axios from "axios";
const styles = {
  main: {
    backgroundColor: "#000",
    paddingLeft: "6%",
    paddingRight: "6%",
    paddingTop: "4.6%",
    paddingBottom: "4.6%",
  },

  bannerTitleStyle1: {
    color: "rgb(255,246,219)",
    fontWeight: "normal",
    textAlign: "center",
    fontFamily: "Baskerville",
    fontStyle: "italic",
    fontSize: "30px",
  },

  button: {
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#fff",
    border: "solid 1px rgb(170,140,73)",
    backgroundColor: "rgb(170,140,73)",
    paddingLeft: "6%",
    paddingRight: "6%",
    paddingTop: "1%",
    paddingBottom: "1%",
    marginTop: "3%",
    marginLeft: "38%",
    marginRight: "38%",
  },

  bannerTitleStyle2: {
    color: "rgb(255,246,219)",
    fontWeight: "800",
    textAlign: "center",
  },

  // New style for the icons container
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },

  icon: {
    fontSize: "50px",
    color: "rgb(255,246,219)",
    margin: "0 1rem",
  },
};

const WecareBanner = () => {

	const [blogsData, setBlogsData] = useState([]);

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

	useEffect(() => {
		fetchBlogs();
	}, []);
  return (
    <Grid container sx={styles.main}>
      <Box sx={{ textAlign: "center", width: "100%" }}>
      
        {/* Four icons in a flex container */}
       
        {blogsData.map((items)=>{
          return (
            <>
              <Fade in={checked === true} timeout={1000}>
          <Typography variant="h3" sx={styles.bannerTitleStyle1}>
           {items.homeCareHeading.subHeading}
          </Typography>
        </Fade>
        <Box sx={styles.iconsContainer}>
         <img src= {items.homeCareHeading.photos13}/>
         <img src= {items.homeCareHeading.photos14}/>
         <img src= {items.homeCareHeading.photos15}/>
         <img src= {items.homeCareHeading.photos16}/>
         <img src= {items.homeCareHeading.photos17}/>
         <img src= {items.homeCareHeading.photos18}/>
        </Box>
            </>
          )
        })}
      </Box>
    </Grid>
  );
};

export default WecareBanner;
