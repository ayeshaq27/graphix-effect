import React from 'react';
import newLogo from '../components/logos/mansaNew.svg'
import { Box } from '@mui/system';
import '../App.css'
import './Header.css';

function OtherHeader() {
  return (
      
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <a href='/' target='_self' >
         <img src={newLogo}
              style={{
                  width: '20vw',
                  height: 'auto',
              }}   
              alt="logo"
          />
      </a>  
         
      </Box>
     


  )
}

export default OtherHeader;