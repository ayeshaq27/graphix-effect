import React from 'react';

import { Box } from '@mui/system';
import '../App.css'
import './Header.css';

function Header() {
  return (
    
      <Box sx={{
        background: {xs:'url(/blurbgmb.png)', sm:'url(/blurbgmbsm.png)', md:'url(/blurbg.svg)'},
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '0px',
        textAlign: 'center',
        color: 'black',
        letterSpacing: '0.2em',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '400',
        fontSize: {xs:'12vw', lg:'10vw'},
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: {xs:'column'},
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '8px',
        marginBottom: '20px',

      }} className='css-typing' >
  
        <p style={{marginBottom: '10px', backdropFilter: 'blur(10px)'}} >DESIGN.</p>
        <p  style={{marginBottom: '10px', backdropFilter: 'blur(10px)'}} >DEVELOP.</p>
        <p style={{backdropFilter: 'blur(10px)'}} >DELIVER.</p>
      </Box>
     


  )
}

export default Header;