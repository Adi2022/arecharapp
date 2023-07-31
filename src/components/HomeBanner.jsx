import React from 'react';
import { Grid, Typography } from '@mui/material';
import banner from '../assets/banner.png';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeBanner = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, lightgray 50%, lightbrown 50%)' }}>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} interval={500}>
        {/* First Carousel Item */}
        <div>
          <Grid container spacing={2}>
            {/* Left Grid: Banner */}
            <Grid item xs={12} sm={6}>
              <img src={banner} alt="Banner" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Right Grid: Text */}
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ padding: '20px' }}>
                  <Typography>
                    Victory for every woman's
                  </Typography>
                  <Typography>
                    Complete Well Being
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Second Carousel Item */}
        <div>
          <Grid container spacing={2}>
            {/* Left Grid: Banner */}
            <Grid item xs={12} sm={6}>
              <img src={banner1} alt="Banner 1" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Right Grid: Text */}
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ padding: '20px' }}>
                  <p>This is some text on the right side.</p>
                  <p>It can be any content you want to display.</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Third Carousel Item */}
        <div>
          <Grid container spacing={2}>
            {/* Left Grid: Banner */}
            <Grid item xs={12} sm={6}>
              <img src={banner2} alt="Banner 2" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Right Grid: Text */}
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ padding: '20px' }}>
                  <p>This is some text on the right side.</p>
                  <p>It can be any content you want to display.</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Fourth Carousel Item */}
        <div>
          <Grid container spacing={2}>
            {/* Left Grid: Banner */}
            <Grid item xs={12} sm={6}>
              <img src={banner3} alt="Banner 3" style={{ width: '100%', height: 'auto' }} />
            </Grid>

            {/* Right Grid: Text */}
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ padding: '20px' }}>
                  <p>This is some text on the right side.</p>
                  <p>It can be any content you want to display.</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
