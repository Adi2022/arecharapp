import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalComponent from "../Modal/ModalComponent";

const styles = {
  main: {
    backgroundColor: "#fff",
    
	
  },
  bannerTitleStyle1: {
    color: "#009090",
    fontWeight: 700,
    textAlign: "center",
    fontSize: {
		md:"60px",
		xs:"30px"
	},
    fontFamily: "'Montserrat', sans-serif",
    textTransform: "uppercase",
    marginTop: {
      md: "15%",
      xs: "35%", // Adjust this for the desired mobile margin
    },
    marginBottom: "4%",
	lineHeight:{
		xs:"60px",
		md:"60px"
	}
  },
 
  bannerTitleStyle3: {
    color: "#000",
    fontWeight: 300,
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: "1.65",
  },
  image: {
    width: "100%",
  },
};

const ImpactHeading = () => {
  const checked = true;

  const [impactData, setImpactData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/impact1") // Replace with your API endpoint
      .then((response) => {
        console.log(response);
        setImpactData(response.data.impact1);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Grid container sx={styles.main}>
      <Box>
        {impactData.map((items) => {
          return (
            <>
              <Fade in={checked === true} timeout={1000}>
                <Typography sx={styles.bannerTitleStyle1 }>
                  {items.heading1}.
                </Typography>
              </Fade>

              <Fade in={checked === true} timeout={1000}>
                <Typography sx={styles.bannerTitleStyle3}>{items.content1}</Typography>
              </Fade>

              <Fade in={checked === true} timeout={1000}>
                <img src={items.photos1} alt="Blog Banner" style={styles.image} />
              </Fade>
              <ModalComponent />
            </>
          );
        })}
      </Box>
    </Grid>
  );
};

export default ImpactHeading;
