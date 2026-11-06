import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, onThemeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation">
        <a href="#hero" className="nav-logo" onClick={closeMenu} aria-label="Kishan, home">
          <img src="/logo-mark.png" alt="" aria-hidden="true" />
          issan<span>.</span>
        </a>
        <button
          className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' is-open' : ''}`} id="primary-navigation">
          <li><a href="#work" onClick={closeMenu}>Work</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>What I do</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a className="nav-availability" href="mailto:kissanshaa@gmail.com">
          <span className="nav-dot" /> Available for select projects <span aria-hidden="true">↗</span>
        </a>
        <button
          className="theme-toggle"
          type="button"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.2 15.1A8.3 8.3 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
              <path d="M16.5 3.5v4m-2-2h4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          )}
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
