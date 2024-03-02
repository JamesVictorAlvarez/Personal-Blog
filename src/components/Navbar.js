import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/Projects">Projects</a>
      <a href="/About">About me</a>
      <a href="#">Contact</a>
    </nav>
  );
}

export default Navbar;