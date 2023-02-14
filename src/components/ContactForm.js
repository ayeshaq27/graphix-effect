import React, { useRef } from 'react';
import { Box } from '@mui/system';
import '../App.css'

import emailjs from '@emailjs/browser';

import './ContactForm.css';

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
      <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignContent: 'center', alignItems: 'center'
      }}>
        <form className='contact-Form' ref={form} onSubmit={sendEmail}>
         
          <input type="text" placeholder="FIRST NAME" id="firstName" className='name' name='firstName'/>
          <input type="text" placeholder="LAST NAME" id="lastName" className='name' name='lastName'/>
     
          <input type="email" placeholder="EMAIL" id="email" className='email' name='email'/>
        
          <textarea rows='4' placeholder="MESSAGE" id="message" className='message' name='message'/>
       
          <input type='submit' value='Submit' id='input-submit' />
        </form>
      </Box>
     


  )
}

export default ContactForm;