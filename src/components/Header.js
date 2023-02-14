import React from 'react';
import newLogo from '../components/logos/mansaNew.svg'
import { Box } from '@mui/system';
import {SvgComponent} from './SvgComponent';
import '../App.css'
import './Header.css';

function Header() {
  return (
    
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
     
        height: '100vh'
      }}>
        <SvgComponent/>
          
      </Box>
     


  )
}

export default Header;