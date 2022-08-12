import { Typography } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import React from "react";

export default function Title({
  title
}: {
  title: string,
}) {
  return (
    <Box className='title'
    sx={{
      position:'relative'
    }}
  >
    <Box className='square'>
      <Box className='text'
        sx={{
          width:'100%',
          height: 'auto',
          position: 'relative',
          textAlign: 'center',
          display: 'flex',
          color:'#B1A1ED',
          border: 'dashed 1px #B1A1ED',
          fontFamily: 'Train One, cursive',
          fontSize: '20px'
        }} >
        <Typography>
          {title}
        </Typography>
      </Box>
      <Box className='sq'
        sx={{
          width: '10px',
          height: '10px',
          backgroundColor: '#B1A1ED',
          position: 'absolute',
          left:'0',
          top: '0'
        }}
      ></Box>
      <Box className='sq'
        sx={{
          width: '10px',
          height: '10px',
          backgroundColor: '#B1A1ED',
          position: 'absolute',
          right:'0',
          top: '0'
        }}></Box>
      <Box className='sq'
        sx={{
          width: '10px',
          height: '10px',
          backgroundColor: '#B1A1ED',
          position: 'absolute',
          left:'0',
          bottom: '0'
        }}></Box>
      <Box className='sq'
        sx={{
          width: '10px',
          height: '10px',
          backgroundColor: '#B1A1ED',
          position: 'absolute',
          right:'0',
          bottom: '0'
        }}></Box>
    </Box>
  </Box>
  )
}

