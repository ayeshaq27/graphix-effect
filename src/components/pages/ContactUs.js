import '../../App.css';
import React from 'react';
import {Button, Typography} from "@mui/material";
import { Box } from '@mui/system';
import OtherHeader from '../OtherHeader';
import Footer from '../Footer';
import ContactForm from '../ContactForm';




function ContactUs() {
  return (
    <>

    {/* Header */}
      <Box sx={{marginBottom: '20vh'}}>
        <OtherHeader />
      </Box>
    {/* About Us Title*/}

      <Box sx={{display: 'flex', flexFlow: 'row wrap', padding: '10px', alignContent: 'center', alignItems: 'center', justifyContent:'center', marginBottom: '5vh' }}>
      <Typography sx={{ fontWeight: '500', lineHeight: '1.2', fontSize: {xs:'1.5rem', md: '2.5rem'}, fontFamily: 'Anek Odia' , marginBottom: '5vh' }} className='title' >Have a Question? Ask Us!</Typography>
        <ContactForm/>
      </Box>
      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default ContactUs;