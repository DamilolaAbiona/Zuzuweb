import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../Assets/Images/logo.png';
import flag from '../Assets/Images/nigeria-flag.png'
import {  Link, useLocation, } from 'react-router-dom';
import hamburgerIcon from '../Assets/icons/hamburger-icon.svg';
import cancelIcon from '../Assets/icons/navbar-cancel-icon.svg';


const Navbar = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(true);

  const HandleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }


  return (
    <>
    <div className='navbar_container'>
      <div className='logo_container'>
        <Link to='/'><img src={logo} alt="zuzu logo" /></Link>
      </div>
      <div className='navlink_container'>
        <div><Link to='/'>Demos</Link></div>
        <div><Link to='/'>About us</Link></div>
        <div><Link to='/'>Collections</Link></div>
        <div><Link to='/'>Pages</Link></div>
        <div><Link to='/'>Contact</Link></div>
      </div>

      { toggleMenu? (
        <div className='hambuger_icon' onClick={HandleToggleMenu }>
          <img src={hamburgerIcon} alt="hamburger Icon" />
        </div>
      ):(
        <div className='hambuger_icon' onClick={HandleToggleMenu }>
          <img src={cancelIcon} alt="cancel Icon" />
        </div>
      )}
      
      <div className='navbtn'>
        <div> <button className='getbtn'><Link to='/'>Get started</Link></button></div>
     
      </div>
    </div>
        
      {/* <div className={toggleMenu? 'showNavDropdown ': 'navbar_mobile_container'} >
        <div><Link  to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link></div>
        <div><Link  to='/aboutus' className={location.pathname === '/aboutus' ? 'active' : ''}>About us</Link></div>
        <div><Link  to='/products' className={location.pathname === '/products' ? 'active' : ''}>Products</Link></div>
        <div><Link  to='/subsidiaries' className={location.pathname === '/subsidiaries' ? 'active' : ''}>Subsidiaries</Link></div>
        <div><Link  to='/contactus' className={location.pathname === '/contactus' ? 'active' : ''}>Contact us</Link></div>
       
      </div> */}
    </>
  )
}

export default Navbar