import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Buttons = ({ title }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',marginTop:"20px" }}>
      <Button
        variant="contained"
        style={{ backgroundColor: '#009090' }}
        component={NavLink}
        to="/shop-now"
        sx={{ mx: 1 }}
        
      >
        {title}
      </Button>
    </div>
  );
};

export default Buttons;
