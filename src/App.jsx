import React, { useEffect, useState } from 'react';
import './styles/globals.css';

// Components
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

// Pages / Sections
import Hero from './pages/Hero';
import Work from './pages/Work';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// Custom hook
import useReveal from './hooks/useReveal';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#171715' : '#f5f3ed'
    );
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useReveal();

  return (
    <div className="page-shell">
      <Navbar theme={theme} onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
