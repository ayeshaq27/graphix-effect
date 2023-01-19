import '../../App.css';
import React from 'react';
import HeroSection from '../HeroSection.js';
import Header from '../Header.js';
import {Button, Container} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from '@mui/system';



function Home() {
  return (
    <>

    {/* Header */}
      <Box>
        <Header />
      </Box>
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
        <Button 
          variant='contained'
          size="large"
          color="info"
          className="fullWidth500"
          component={Link}
          to="/program"
          style={{marginTop: '52px', marginBottom: '2em'}}>
          Learn more 
        </Button>
        <img src="/HOUSE2.jpg"
              style={{
                  maxWidth:'25vw',
                  boxShadow: '2px 2px 16px 2px rgba(0, 0, 0, 0.28)',
                  width: 'auto',
              }}   
              alt="rendering"
          />
      </Box>
    </>
  );
}

export default Home;