import React from 'react';
import './../App.css'; 

function Navbar() {
  return (
    <nav className="navbar bg-gray-900 text-white fixed w-full shadow z-50">
      <div className="navbar-inner max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Site Title */}
        <div className="site-title text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Kasra Ebrahimi
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-links hidden md:flex space-x-8">
          <a href="#home" className="nav-link hover:text-blue-400 transition">Home</a>
          <a href="#projects" className="nav-link hover:text-blue-400 transition">Projects</a>
          <a href="#services" className="nav-link hover:text-blue-400 transition">Services</a>
          <a href="#contact" className="nav-link hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Actions: Cart + Mobile Toggle */}
        <div className="navbar-actions flex items-center space-x-4">
          <button id="cart-btn" className="cart-button relative">
            <i className="fas fa-shopping-cart text-xl"></i>

          </button>
          <button className="menu-toggle md:hidden" id="mobile-menu-btn">
            
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
