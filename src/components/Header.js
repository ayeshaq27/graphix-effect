import React from 'react';

import { Box } from '@mui/system';
import '../App.css'
import './Header.css';

function Header() {
  return (
    
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        height: {xs:'40vh', md: '80vh'}
      }}>
         <img src="/mansaNew.svg"
              style={{
                  width: '40vw',
                  display: 'block',
              }}   
              alt="logo"
          />
          <h1 style={{fontFamily: 'Anek Odia', fontWeight: '300', fontSize: '4vw'}}>MANSA RESIDENCES</h1>
      </Box>
     


  )
}

export default Header;