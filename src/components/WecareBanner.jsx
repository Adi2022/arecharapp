import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

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
  const checked = true;
  return (
    <Grid container style={styles.main}>
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Fade in={checked === true} timeout={1000}>
          <Typography variant="h3" sx={styles.bannerTitleStyle1}>
            Because we care for you and the environment
          </Typography>
        </Fade>
        {/* Four icons in a flex container */}
        <Box sx={styles.iconsContainer}>
          <DirectionsRunOutlinedIcon sx={styles.icon} />
          <MedicalInformationOutlinedIcon sx={styles.icon} />
          <SpaOutlinedIcon sx={styles.icon} />
          <LocalHospitalOutlinedIcon sx={styles.icon} />
        </Box>
      </Box>
    </Grid>
  );
};

export default WecareBanner;
