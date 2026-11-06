import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <a className="footer-logo" href="#hero" aria-label="Kishan, home">
      <img src="/logo-mark.png" alt="" aria-hidden="true" />
      issan<span>.</span>
    </a>
    <p>© {new Date().getFullYear()} Kishan Shah · Designed with intention.</p>
    <a className="footer-back-top" href="#hero">Back to top ↑</a>
  </footer>
);

export default Footer;
