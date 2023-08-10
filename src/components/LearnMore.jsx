import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import videos from "../assets/child.jpg";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import AboutImage from "../assets/logo.png";
import { Button } from "@mui/material";

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
    width: "30%",
    paddingLeft: "6%",
    paddingRight: "6%",
   
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
    marginBottom:"2%",
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

  }
};


const LearnMore = () => {
  const checked = true;
  return (
    <Grid container >
     
      <Grid item xs={12} md={6} sx={styles.gridLeft} style={{backgroundColor:"#009090"}}>
        <img src={AboutImage} style={styles.aboutImage} alt="img1" />
      
          <Typography variant="body1" sx={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
          </Typography>
         
         
         <Button sx={styles.learnbutton}>LEARN MORE</Button>

      </Grid>
      <Grid item xs={12} md={6}>
        <Grow in={checked} timeout={1500} direction="left">
          <img src={videos} alt="homeBanner" style={styles.contact} />
        </Grow>
      </Grid>
    
    </Grid>
  );
};
export default LearnMore;