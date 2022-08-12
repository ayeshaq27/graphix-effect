import React from 'react';
import { Box } from '@mui/system';
import '../App.css'
import './HeroSection.css';

function HeroSection() {
  return (
    <Box className='hero-container'
      sx={{
        width: '100%',
        height: '100%',
        
      }}
    >
      <img src='/teampictrans.png' alt='team pic' style={{position: 'relative'}}/>
      <Box sx={{
        position: 'absolute',
        width: {xs:'90vw', md: '90vw', lg: '80vw'},
        height: '95vh',
        margin:'0 auto',
        textAlign: 'left',
        fontSize: '30px',
        color: '#CCC1F6',
        letterSpacing: {xs:'0.17em'},
        fontFamily: 'Train One, cursive',
        background: 'rgba(0,0,0,0.5)',
        backgroundPosition: 'cover',
        fontSize: {xs:'12vw', md:'10vw', lg: '10vw'},
        paddingLeft: {xs:'10%', md: '5%'}
        
      }} >
        <p>DESIGN
        <br/>
        DEVELOP
        <br/>
        DELIVER</p>
      </Box>
      
    </Box>

  )
}

export default HeroSection;