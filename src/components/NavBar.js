import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css';


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu} >
            <img src='/graphix-logo-des.png' width='300px' alt='the graphix effect logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                SERVICES
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                PROJECTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                REVIEWS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                CONTACT US
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default NavBar