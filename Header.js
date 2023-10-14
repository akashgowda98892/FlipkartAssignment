import React from 'react';
import './Header.css'; // Assuming you create a separate CSS file for the header

const Header = () => {
  return (
    <div className="header">
      <div className="logo" />
      <div className="date-text">Paycycle: 31-may-2021 to 31-june-2022</div>
      <div className="company-name">Amazon Pvt Ltd</div>
      <div className="dropdown" />
      <div className="support-logo" />
      <div className="notification-logo" />
      <div className="green-circle" />
    </div>
  );
};

export default Header;
