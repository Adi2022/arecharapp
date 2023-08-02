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
    
    paddingBottom: "4.6%",
   
  },

  bannerTitleStyle1: {
    color: "#009090",
    fontWeight: "800",
    textAlign: "center",
    fontFamily: "Baskerville",
    fontStyle: "italic",
    fontSize: "60px",
   
  },
  bannerTitleStyle2: {
    color: "black",
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "italic",
   
  },
  
};
const AboutPageHeading = () => {
  const navigate = useNavigate();
 

  


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
      }}
    >
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Fade in={checked === true} timeout={1000}>
          <Typography variant="h3" sx={styles.bannerTitleStyle2}>
          The
          </Typography>
        </Fade>

        <Fade in={checked === true} timeout={1000}>
          <Typography variant="h3" sx={styles.bannerTitleStyle1}>
          Blossoming with passionate thinkers who are
          </Typography>
        </Fade>
        <Fade in={checked === true} timeout={1000}>
          <Typography variant="h3" sx={styles.bannerTitleStyle1}>
          focused on delivering wholesome care, at Arechar Nutra,
          </Typography>
        </Fade>
        <Fade in={checked === true} timeout={1000}>
          <Typography variant="h3" sx={styles.bannerTitleStyle1}>
          we take health seriously.
          </Typography>
        </Fade>
      </Box>
     
    </Grid>
  );
};

export default AboutPageHeading;