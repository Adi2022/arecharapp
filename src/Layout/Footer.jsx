import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/enquiry");
  };

  return (
    <footer>
      <Box bgcolor="gray" color="white" py={2} px={3}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">
                Submit Your enquiry right Now!
              </Typography>
              <Typography variant="body1">
                {/* Your enquiry text goes here */}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} textAlign="right">
              <Button
                variant="contained"
                sx={{ backgroundColor: "gray", color: "white" }}
                onClick={handleButtonClick}
              >
                Submit Now
              </Button>{" "}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box  py={2} style={{color:"white"}}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={2} color={"gray"}>
             asssss 
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h5" fontWeight={"bold"} color={"gray"}>
               UsefulLinks
              </Typography>
              <br />
              <Typography
                variant="body2"
                component={Link}
                to="/about"
                color={"gray"}
                style={{ textDecoration: "none" }}
              >
                About us
              </Typography>
              <br />  <br />

              <Typography variant="body2" color={"gray"}>
                Press Kit
              </Typography>
              <br />
              <Typography variant="body2" color={"gray"}>
                Carrers
              </Typography>{" "}
              <br />
              <Typography variant="body2" color={"gray"}>
                Partner
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h5" color={"gray"} fontWeight={"bold"}>
               Social Links
              </Typography>
              <Typography variant="body2" color={"gray"}>
                <br />
                Facebook
              </Typography>
              <Typography variant="body2" color={"gray"}>
                <br />
                Instagram
              </Typography>
              <Typography variant="body2" color={"gray"}>
                <br />
                Twitter
              </Typography>
              <Typography variant="body2" color={"gray"}>
                <br />
                Linkedin
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h5" color={"gray"} fontWeight={"bold"}>
               Policies
              </Typography>
              <br />
              <Typography variant="body2" color={"gray"}>
                Email: info@example.com
              </Typography>
              <br />
              <Typography variant="body2" color={"gray"}>
                Phone: 123-456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <img src={logo} style={{width:"30%"}}/>
            </Grid>
              
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;