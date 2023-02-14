import '../../App.css';
import React from 'react';
import {Button, Typography} from "@mui/material";
import { Box } from '@mui/system';
import OtherHeader from '../OtherHeader';
import Footer from '../Footer';
import house from '../imgs/HOUSE.jpg';
import house2 from '../imgs/HOUSE2.jpg';
import house3 from '../imgs/HOUSE3.jpg';
import FadeIn from '../FadeIn';



function Portfolio() {
  return (
    <>

    {/* Header */}
       <Box sx={{marginBottom: '3vh'}}>
        <OtherHeader />
      </Box> 
    {/* About Us Title*/}

      {/* <Box sx={{marginBottom: '20px'}}>
        <Typography sx={{
          fontFamily: 'Anek Odia',
          fontWeight: '300', 
          fontSize: {xs:'5vw',md:'3vw'},

          textAlign: 'center'
          }}>
          PORTFOLIO
        </Typography></Box> */}
        <FadeIn>
        <Box>
        <Box sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          rowGap: '5px',
          columnGap: '5px'
        }}>
           <img src={house}
            style={{
                height: 'auto',
                maxWidth: '35vw',
              
                flex: '2'
            }}   
            alt="rendering"
          />
           <img src={house2}
            style={{
                height: 'auto',
                maxWidth: '35vw',
              
                flex: '3'
            }}   
            alt="rendering"
          />
           <img src={house3}
            style={{
              height: 'auto',
              maxWidth: '35vw',
             
              flex: '1'
            }}   
            alt="rendering"
          />
        </Box>
      </Box></FadeIn>
      {/* Footer */}
      <Box sx={{marginTop: '20px'}}>
        <Footer />
      </Box>
    </>
  );
}

export default Portfolio;