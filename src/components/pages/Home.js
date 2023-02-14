
import '../../App.css';
import React from 'react';
import house from '../imgs/Group5.png';
import mobHouse from '../imgs/Group6.png'
import Header from '../Header.js';
import Footer from '../Footer.js';
import quality from '../imgs/quality.svg';
import fast from '../imgs/fast.svg';
import unique from '../imgs/unique.svg';
import './Home.css';
import {Button} from '../Button.js';
import {Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from '@mui/system';
import FadeIn from '../FadeIn';



function Home() {
  return (
    <>

    {/* Header */}
      <Box>
        <Header />
      </Box>
    {/* Hero*/}

      <Box
        sx={{
          backgroundColor: '#10423D',
          display: 'flex',
          flexDirection: {xs:'column-reverse' ,sm:'row'},
          justifyContent: 'space-evenly',
          height: {xs: 'auto',md:'auto'},
          alignItems: 'center', 
          alignContent: 'center',
          fontFamily: 'Anek Odia',
          color:'#E2D2C6',
          fontSize: {xs: '12px', sm: '24px', md: '34px'},
          width: '100%',
          padding: '4vw'

        }}
      > 
        <FadeIn>
        <Box sx={{paddingLeft:{xs:'5%', md: '0'}}}>
          <Typography sx={{ fontWeight: '500', lineHeight: '1.2', fontSize: {xs:'1.5rem', md: '2.5rem'},  }}>Build your dream residence<br/> with us.</Typography>
          <Typography sx={{fontSize: {xs:'0.9rem' , md:'1.2rem'}, maxWidth: {xs:'100%',md:'70%'}, fontFamily: 'Montserrat ', fontWeight: '100', marginTop: '5px'}} > Experience the luxury of designing your own home to match your personal style.</Typography>
          <Button linkCustom='/portfolio' className='btn' buttonStyle='btn--outline' buttonSize='btn--medium' style={{margin: '0.8rem 0',}}>View Portfolio</Button>
        </Box></FadeIn>
        <FadeIn>
        <Box sx={{display: {xs: 'none', sm: 'contents'}}}>
          <img src={house}
            style={{
                maxWidth:'40vw',
                height: 'auto',
                width: '100%',
            }}   
            alt="rendering"
            //className='Fade'
          />
        </Box></FadeIn>
        <FadeIn>
        <Box sx={{display: {xs: 'contents', sm: 'none', }}}>
          <img src={mobHouse}
            style={{
                height: 'auto',
                width: '90%',
                margin:'20px 0 20px 0'
            }}   
            alt="rendering"
            //className='Fade'
          />
        </Box></FadeIn>
      </Box>
      {/* features */}
      <FadeIn>
        <Box sx={{display: 'flex', alignContent: 'center', alignItems: 'center', flexFlow: 'row wrap', justifyContent: 'space-evenly', columnGap: '30px', rowGap: '30px', paddingTop: {xs:'10vh', md:'20vh'}, paddingBottom: {xs:'10vh', md:'20vh'}}}>
          <Box sx={{display: 'flex', alignContent: 'center', alignItems: 'center', flexFlow: 'column wrap'}}>
            <img src={quality} width="78px" alt="quality icon"/>
            <Typography sx={{fontSize: {xs:'0.9rem' , md:'1.2rem'}, fontFamily: 'Anek Odia ', fontWeight: '300', marginTop: '5px', color: '#202717'}}>Premium Quality</Typography>
          </Box>
          <Box sx={{display: 'flex', alignContent: 'center', alignItems: 'center', flexFlow: 'column wrap'}}>
            <img src={fast} width="78px" alt="fast service icon"/>
            <Typography sx={{fontSize: {xs:'0.9rem' , md:'1.2rem'},  fontFamily: 'Anek Odia ', fontWeight: '300', marginTop: '5px', color: '#202717'}}>Fast Service</Typography>
          </Box>
          <Box sx={{display: 'flex', alignContent: 'center', alignItems: 'center', flexFlow: 'column wrap'}}>
            <img src={unique} width="78px" alt="unique designs icon"/>
            <Typography sx={{fontSize: {xs:'0.9rem' , md:'1.2rem'}, fontFamily: 'Anek Odia ', fontWeight: '300', marginTop: '5px', color: '#202717'}}>Unique Designs</Typography>
          </Box>
          <Typography sx={{fontSize: {xs:'0.9rem' , md:'1.5rem'}, maxWidth: {xs:'90%',md:'80%'}, textAlign: 'center', marginTop: '5vh'}}>Mansa Residence sells luxurious houses and aims to provide fast service, high-quality products, and unique designs to its customers. They offer design services to help customers create their dream home, tailored to their personal style and preferences.</Typography>
        </Box>

      </FadeIn>

      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default Home;