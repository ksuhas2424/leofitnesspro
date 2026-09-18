// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import contactInfo from '../data/contactInfo';

export const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'plans', label: 'PLANS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo & Brand */}
          <a
            href="#hero"
            className="brand-logo-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            <img
              src="/logo.png"
              alt="Leo Fitness Pro Logo"
              className="logo-badge-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/logo-badge.svg";
              }}
            />
            <div className="brand-text-wrap">
              <span className="brand-name">{contactInfo.brandName}</span>
              <span className="brand-subtext">HYDERABAD</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links-desktop">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`nav-link-item ${isActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
