import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; // Import the Paper component
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import { Typography } from '@mui/material';

const HomeProductsInfo = () => {
  return (
    <div>
      <Grid container spacing={2} p={4}>
        {/* Left Grid */}
       {/* Left Grid */}
       <Grid item xs={12} sm={6} >
          <Paper style={{ backgroundColor: '#009090', padding: '20px', border: '1px solid black',borderRadius:"50px" }}>
            <Grid container spacing={2} alignItems="center">
              {/* Left half for the image */}
              <Grid item xs={12} sm={6}>
                <img src={banner1} alt="Banner 1" width="100%" />
              </Grid>
              {/* Right half for the text */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h2" style={{ color: '#fff' }}>
                  Aditya
                </Typography>
                <Typography style={{ color: '#fff' }}>
                  Add your text here. This will be responsive in all devices.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right Grid */}
       {/* Left Grid */}
       <Grid item xs={12} sm={6}>
          <Paper style={{ backgroundColor: '#009090', padding: '20px', border: '1px solid black',borderRadius:"50px" }}>
            <Grid container spacing={2} alignItems="center">
              {/* Left half for the image */}
              <Grid item xs={12} sm={6}>
                <img src={banner2} alt="Banner 1" width="100%" />
              </Grid>
              {/* Right half for the text */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h2" style={{ color: '#fff' }}>
                  Aditya
                </Typography>
                <Typography style={{ color: '#fff' }}>
                  Add your text here. This will be responsive in all devices.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeProductsInfo;
