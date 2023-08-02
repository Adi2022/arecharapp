import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const styles = {

  main: {
    backgroundColor: "#fff",
    paddingLeft: "6%",
    paddingRight: "6%",
    backgroundColor:"#009090",
    paddingBottom: "4.6%",
    color:"#fff",
    height:"20rem"
   
  },

  bannerTitleStyle1: {
    color:"#fff",
    fontWeight: "light",
    textAlign: "center",
    fontFamily:"'Montserrat', sans-serif",
    fontSize: "16px",
   
  },
 
  
};
const AboutPageInfo = () => {
 

  


  const checked = true;

  return (
    <Grid
      container
      style={styles.main}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "",
        backgroundSize: "cover",
        color: "white",
        opacity: "1",
        backgroundColor:"#009090"
      }}
    >
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Fade in={checked === true} timeout={1000}>
          <Typography  sx={styles.bannerTitleStyle1}>
          We are always ready to go the extra mile to make sure we make distinctive products that make a difference in
          </Typography>
        </Fade>
        <Fade in={checked === true} timeout={1000}>
          <Typography  sx={styles.bannerTitleStyle1}>
          people's lives. We aim to bring the best nutrition from natural resources and plant-based ingredients which          </Typography>
        </Fade>
        <Fade in={checked === true} timeout={1000}>
          <Typography  sx={styles.bannerTitleStyle1}>
          transform effectively for easy but meaningful consumption.          </Typography>
        </Fade>
      </Box>
     
    </Grid>
  );
};

export default AboutPageInfo;