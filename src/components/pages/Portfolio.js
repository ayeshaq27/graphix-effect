import '../../App.css';
import React from 'react';
import {Button} from "@mui/material";
import { Box } from '@mui/system';



function Portfolio() {
  return (
    <>

    {/* Header */}
     
    {/* About Us Title*/}

      <Box
        sx={{
          backgroundColor: '#10423D',
        
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: {xs: '20vh',md:'55vh'},
          alignItems: 'center', 
          alignContent: 'center',
          fontFamily: 'Anek Odia',
          color:'#E2D2C6',
          fontSize: {xs: '12px', sm: '24px', md: '34px'},
          margin: '8vw',
          padding: '20px'

        }}
      >
        <h2 style={{maxWidth: '50%'}}>Build your dream residence with us.</h2>
        
        <img src="/HOUSE2.jpg"
              style={{
                  maxWidth:'25vw',
                  boxShadow: '2px 2px 16px 2px rgba(0, 0, 0, 0.28)',
                  width: 'auto',
              }}   
              alt="investment egg"
          />
      </Box>
    </>
  );
}

export default Portfolio;