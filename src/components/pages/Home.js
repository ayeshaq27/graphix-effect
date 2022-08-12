import '../../App.css';
import React from 'react';
import HeroSection from '../HeroSection.js';
import Header from '../Header.js';
import {Container} from "@mui/material";
import { Box } from '@mui/system';



function Home() {
  return (
    <>

    {/* Header */}
      <Container>
        <Header />
      </Container>
    {/* About Us Title*/}
      <Container sx={{marginTop: '50px'}}>
        <Box className='title'
          sx={{
            position:'relative',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Box className='square' 
            sx={{
              width:'auto',
              height: 'auto',
              position: 'absolute',
              textAlign: 'center',
              display: 'flex',
            }}
          >
            <Box className='text'
              sx={{
                width:'auto',
                height: 'auto',
                position: 'relative',
                textAlign: 'center',
                display: 'flex',
                color:'black',
                margin: '5px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: {xs:'35px', md:'70px'},
                fontWeight: '400'
              }} >
              <p style={{ border: 'dashed 2px black', position:'relative', padding: '10px'}} >
                ABOUT US
              </p>
            </Box>
            <Box className='sq'
              sx={{
                width: '10px',
                height: '10px',
                backgroundColor: 'black',
                position: 'absolute',
                left:'0',
                top: '0'
              }}
            ></Box>
            <Box className='sq'
              sx={{
                width: '10px',
                height: '10px',
                backgroundColor: 'black',
                position: 'absolute',
                right:'0',
                top: '0'
              }}></Box>
            <Box className='sq'
              sx={{
                width: '10px',
                height: '10px',
                backgroundColor: 'black',
                position: 'absolute',
                left:'0',
                bottom: '0'
              }}></Box>
            <Box className='sq'
              sx={{
                width: '10px',
                height: '10px',
                backgroundColor: 'black',
                position: 'absolute',
                right:'0',
                bottom: '0'
              }}></Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;