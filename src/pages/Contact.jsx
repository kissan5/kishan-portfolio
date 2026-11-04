import React from 'react';
import SocialIcon from '../components/SocialIcon';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${formData.get('name')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      '',
      formData.get('message'),
    ].join('\n');
    const email = new URLSearchParams({ subject, body });

    window.location.href = `mailto:kishanshaa@gmail.com?${email.toString()}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-topline">
        <span className="section-label reveal">Your turn</span>
        <span className="contact-number">05 — 05</span>
      </div>

      <div className="contact-layout">
        <div>
          <h2 className="contact-title reveal reveal-d1">Have a good<br />feeling about<br /><i>this?</i></h2>
          <p className="contact-copy reveal reveal-d2">Tell me what you’re dreaming up. I’m always up for a thoughtful project and a good conversation.</p>
          <a className="contact-email reveal reveal-d3" href="mailto:kishanshaa@gmail.com">
            <SocialIcon name="mail" />kishanshaa@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-card reveal reveal-d2">
          <div className="contact-card-heading">
            <span className="contact-card-label">CURRENTLY OPEN TO</span>
            <span className="contact-card-star" aria-hidden="true">✳</span>
          </div>
          <strong>Good people.<br />Good problems.</strong>
          <a className="contact-card-link" href="mailto:kishanshaa@gmail.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
          <nav className="contact-socials" aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/kishan-shah-9889651a0/" target="_blank" rel="noreferrer">
              <SocialIcon name="linkedin" />LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/kissan5" target="_blank" rel="noreferrer">
              <SocialIcon name="github" />GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.instagram.com/kissan_shah/" target="_blank" rel="noreferrer">
              <SocialIcon name="instagram" />Instagram <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </div>

      <form className="contact-form reveal" onSubmit={handleSubmit}>
        <div className="contact-form-heading">
          <div>
            <span className="contact-form-label">SEND A NOTE</span>
            <h3>Tell me a little about it.</h3>
          </div>
          <span className="contact-form-note">No big pitch needed.</span>
        </div>

        <div className="contact-form-fields">
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
          </label>
          <label>
            Your email
            <input name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
          </label>
          <label className="contact-message-field">
            What’s on your mind?
            <textarea name="message" rows="4" placeholder="A project, an idea, or just say hello..." required />
          </label>
        </div>

        <button className="contact-submit" type="submit">
          Open email draft <span aria-hidden="true">↗</span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
