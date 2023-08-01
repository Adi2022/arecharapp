import React from 'react';
import { Box } from '@mui/material';

const YoutubeVideo = () => {
  const videoId = 'your_youtube_video_id_here'; // Replace this with the actual YouTube video ID

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust the height as needed
      }}
    >
      <iframe
        width="560" // Adjust the width as needed
        height="315" // Adjust the height as needed
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Box>
  );
};

export default YoutubeVideo;
