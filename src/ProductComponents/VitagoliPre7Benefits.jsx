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
    backgroundColor: "#009090",
    paddingBottom: "4.6%",
    color: "#fff",
    marginTop: "12%",
    height: "25rem",
    
  },
  bannerTitleStyle1: {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "211px",
    lineHeight: "160px"
  },
  bannerTitleStyle2: {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "30px"
  }
};

const VitagoliPre7Benefits = () => {
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
        backgroundColor: "#009090"
      }}
    >
      <Box
        sx={{
         
         
          display: "flex",
          flexDirection: "row", // Set the flex direction to column
          alignItems: "center" // Center the items horizontally
        }}
      >
        <Fade in={checked === true} timeout={1000}>
          <Typography sx={styles.bannerTitleStyle1}>7</Typography>
        </Fade>
       <div style={{display:"grid"}}>
       <Fade in={checked === true} timeout={1000}>
          <Typography sx={styles.bannerTitleStyle2}>overall</Typography>
        </Fade>
        <Fade in={checked === true} timeout={1000}>
          <Typography sx={styles.bannerTitleStyle2}>benefits</Typography>
        </Fade>
       </div>
      </Box>
    </Grid>
  );
};

export default VitagoliPre7Benefits;
