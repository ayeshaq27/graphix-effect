import React from 'react';
import logo from '../components/logos/mansaNew.svg';
import { Box, Container, Grid, Link, Typography } from "@mui/material";


function Footer() {
  return (
    <Box sx={{
      backgroundColor: 'black',
      color: '#10423D',
      display: 'flex',
      flexDirection: {xs:'column' },
      alignItems: 'center', 
      alignContent: 'center',
      padding: {
        md: '40px 0px',
        sm: '2px',
        xs: '24px'
      },
      justifyContent: 'space-between'
    }}>

      <img src={logo} width="100px"  style={{display: 'block'}} alt="full logo"/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        alignContent: 'center',
        justifyContent: 'space-around'
        }} >
        <a href='/portfolio' target="_self" rel="noreferrer" style={{textDecoration: 'none', color: '#10423D'}}> <Typography sx={{margin: '1rem'}}>Portfolio</Typography></a>
        <a href='/contactUs' target="_self" rel="noreferrer" style={{textDecoration: 'none', color: '#10423D'}}> <Typography sx={{margin: '1rem'}}>Contact Us</Typography></a>
        
      </Box>
      <Typography sx={{margin: '1rem', fontSize: '12px'}}>© Mansa Residences 2023</Typography>
    </Box>
  )
}

export default Footer;