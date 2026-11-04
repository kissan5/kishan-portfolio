import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-copy">
      <div className="hero-eyebrow">
        <span className="hero-pulse" />
        Independent designer &amp; frontend developer
        {/* <span className="hero-location">Based in Kathmandu, Nepal</span> */}
      </div>
      <h1 className="hero-name">Good design<br />should <span>feel</span><br />like <i>something.</i></h1>
      <div className="hero-bottom">
        <p className="hero-desc">
          I’m <strong>Kishan Shah</strong> — a designer who thinks in systems and a developer who cares
          about the details. I turn thoughtful ideas into digital experiences people love to use.
        </p>
        <a href="#work" className="hero-cta">Explore selected work <span aria-hidden="true">↘</span></a>
      </div>
      <div className="hero-footnote">
        <span>Scroll to explore</span><span className="hero-footnote-line" /><span>01 / 05</span>
      </div>
    </div>

    <div className="hero-art" aria-label="Abstract illustration of a digital design workspace">
      <div className="hero-art-top"><span>DESIGN MEETS CODE</span></div>
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-orb">K<span>.</span></div>
      <div className="hero-window">
        <div className="window-bar"><span /><span /><span /><b>the good stuff / 01</b></div>
        <div className="window-content">
          <div className="window-kicker">A LITTLE BIT OF BOTH</div>
          <div className="window-word">IDEAS<br /><i>INTO</i><br />INTERFACES<span>.</span></div>
          <div className="window-bottom"><span>DESIGN<br />WITH INTENTION</span><span className="window-arrow">↗</span></div>
        </div>
      </div>
      <div className="hero-sticker"><span>THOUGHTFUL<br />BY DESIGN</span><b>✳</b></div>
      <div className="hero-art-caption">A practice built on curiosity, clarity &amp; a little bit of play.</div>
    </div>
  </section>
);

export default Hero;
