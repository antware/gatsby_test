import React from 'react';
import Link from 'gatsby-link';

 const Menu = () => {
  return (
    <div style={{
      background: '#f4f4f4',
      paddingTop: '10px'
    }}>

    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly',
      fontFamily: 'Arial, serif'
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/blog">News</Link></li>
    </ul>
      
    </div>
  )
}

export default Menu;
