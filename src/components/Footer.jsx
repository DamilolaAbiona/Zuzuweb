import React, { useState } from 'react';
import '../styles/Footer.css';
import footerLogo from '../Assets/Images/logo (1).png';
import IsoAward from '../Assets/Images/vatebra-ISO-Award.svg';
import facebook from '../Assets/icons/facebook-icon.svg';
import twitter from '../Assets/icons/twittwer-icon.svg';
import linkedin from '../Assets/icons/linkenin-icon.svg';
import instagram from '../Assets/icons/instagram-icon.svg';
import { Link } from 'react-router-dom';



const Footer = () => {


  const locations = [
    { address: 'Discover NFTs by category, track the latest drops, and follow the collections you love to enjoy it!' }
  ];


  const [selectedLocation, setSelectedLocation] = useState(0);

  const handleLocationClick = (index) => {
    setSelectedLocation(index);
  };

  const renderAddressAndContact = () => {
    
    if (selectedLocation !== null) {
      const { address, contact } = locations[selectedLocation];
      return (
        <div>
          <div className="footer_address_container">
            <p>{address}</p>
            <div className='footerHr'></div>
          </div>
          <div className="footer_contact">
            <p>{contact}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='footer_main_container' id='footer_color'>
      <div className='footer_column1'>
        <div className="footer_logo_container">
          <Link to='/' ><img src={footerLogo} alt=" Footer Logo" /></Link>
        </div>
        <div className='footer_location_container'>
          <div className="footer_location">
            {locations.map((location, index) => (
              <div
                key={index}
                className={index === selectedLocation ? 'footer_location_change' : ''}
                onClick={() => handleLocationClick(index)}
              >
                <p>{location.name}</p>
              </div>
            ))}
          </div>
          <div className='footerHr'></div>
        </div>
        {renderAddressAndContact()}
      </div>
      
      <div className='footer_column2'>
       <div className='vatebra_info_container'>
          <div className='footer_column2_part1'>
            <h5  className=' footer_column2_part1h5'>Community</h5>
            <p  className='footer_column2_part1p'><Link to="/" >About us</Link></p>
            <p className='footer_column2_part1p'><Link to="/">Leadership</Link></p>
            <p className='footer_column2_part1p'><Link  to='/' >Subsidiaries</Link></p>
            <p className='footer_column2_part1p' ><Link to='/'>Contact us</Link></p>
          </div>
          <div className='footer_column2_part1'>
            <h5  className=' footer_column2_part1h5'>Marketplace</h5>
            <p  className='footer_column2_part1p'><Link to='/'>Privacy policy</Link></p>
            <p className='footer_column2_part1p'><Link to="/">Blog</Link></p>
            <p className='footer_column2_part1p'><Link to=''>Our hubs</Link></p>
            <p className='footer_column2_part1p' ><Link to='/'>HODs</Link></p>
          </div>
       </div>
        <div className='footer_column2_part3'>
          <div className='footer_column2_part3_isoaward'>
            {/* <img src={IsoAward } alt="Vatebra ISO Cert" /> */}
          </div>
          {/* <div className='footersocials_container'>
            <Link to='/' target='_blank'><img src={facebook} alt=" Facebook Icon" /></Link>
            <Link to='' target='_blank'><img src={twitter} alt=" Twitter Icon" /></Link>
            <Link to='' target='_blank'><img src={linkedin} alt=" Linkenin Icon" /></Link>
            <Link to='' target='_blank'><img src={instagram} alt=" Instagram Icon" /></Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
