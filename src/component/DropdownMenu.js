import React, { useState } from 'react';
import '../component/dropdownMenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/nft">Farming</a>
          <a href="">Market Sector</a>
          <a href="">New Equipment</a>
          <a href="">Other</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
