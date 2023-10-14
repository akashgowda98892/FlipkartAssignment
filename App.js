import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

const Header = () => {
  return <div className="header">Header</div>;
};

const Sidebar = () => {
  return <div className="sidebar">Sidebar</div>;
};

const Content = () => {
  return <div className="content">Content</div>;
};

export default App;
