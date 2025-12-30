import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onNameClick, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={onNameClick} style={{ cursor: 'pointer' }}>
          <span className="text-gradient">Mohsin Abbas</span>
        </div>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} title={`Current Theme: ${theme}`}>
            <Palette size={20} />
          </button>
          <a href="#contact" className="btn-primary">Get Started</a>
        </div>

        <div className="mobile-toggle-group">
          <button className="theme-toggle" onClick={toggleTheme} style={{ marginRight: '15px' }}>
            <Palette size={20} />
          </button>
          <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
