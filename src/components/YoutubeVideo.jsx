import React from 'react';
import { Box } from '@mui/material';
import AboutPageVideo from './AboutPageVideo'
const YoutubeVideo = () => {
  const videoId = 'your_youtube_video_id_here'; // Replace this with the actual YouTube video ID

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        marginTop:"3%"
      }}
    >
    <AboutPageVideo/>
    </Box>
  );
};

export default YoutubeVideo;
