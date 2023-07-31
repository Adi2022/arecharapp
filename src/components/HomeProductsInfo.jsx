import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import { Typography } from "@mui/material";
import Buttons from "../common/Buttons";

const HomeProductsInfo = () => {
  return (
    <div>
      <Grid container spacing={2} p={4}>
        {/* Left Grid */}
        <Grid item xs={12} sm={6}>
          <Paper style={{ backgroundColor: "#009090", padding: "20px", border: "1px solid black", borderRadius: "50px" }}>
            <Grid container spacing={2} alignItems="center">
              {/* Left half for the image */}
              <Grid item xs={12} sm={6}>
                <img src={banner1} alt="Banner 1" width="100%" />
              </Grid>
              {/* Right half for the text */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h2" style={{ color: "#fff" }}>
                  Aditya
                </Typography>
                <Typography style={{ color: "#fff" }}>
                  Add your text here. This will be responsive in all devices.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Buttons title="Shop Now" />
          <div style={{ padding: "40px", textAlign: "center" }}>
            <Typography
              variant="body1"
              style={{ color: "#000", fontSize: "12px", marginBottom: "5px" }}
            >
              You know you're beautiful already. This gummy won't make you prettier. However, it will help protect your skin and make your hair and nails stronger than ever.
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              <strong>Vitagoli Hair, Skin</strong> and <strong>Nails</strong> is 100% <strong>Natural and vegan</strong>. It's packed with only goodness, no nasties.
            </Typography>
          </div>
        </Grid>

        {/* Right Grid */}
        <Grid item xs={12} sm={6}>
          <Paper style={{ backgroundColor: "#009090", padding: "20px", border: "1px solid black", borderRadius: "50px" }}>
            <Grid container spacing={2} alignItems="center">
              {/* Left half for the image */}
              <Grid item xs={12} sm={6}>
                <img src={banner2} alt="Banner 2" width="100%" />
              </Grid>
              {/* Right half for the text */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h2" style={{ color: "#fff" }}>
                  Aditya
                </Typography>
                <Typography style={{ color: "#fff" }}>
                  Add your text here. This will be responsive in all devices.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Buttons title="Shop Now" />
          <div style={{ padding: "40px", textAlign: "center" }}>
            <Typography
              variant="body1"
              style={{ color: "#000", fontSize: "12px", marginBottom: "5px" }}
            >
              You know you're beautiful already. This gummy won't make you prettier. However, it will help protect your skin and make your hair and nails stronger than ever.
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              <strong>Vitagoli Hair, Skin</strong> and <strong>Nails</strong> is 100% <strong>Natural and vegan</strong>. It's packed with only goodness, no nasties.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeProductsInfo;
