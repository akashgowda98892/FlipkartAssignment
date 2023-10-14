import React from 'react';
import './Sidebar.css'; // Assuming you create a separate CSS file for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-dash" />
      <div className="logo-monthly" />
      <div className="logo-super" />
      <div className="logo-master" />
      <div className="logo-more" />
    </div>
  );
};

export default Sidebar;
