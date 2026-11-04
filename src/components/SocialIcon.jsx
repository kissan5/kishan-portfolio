import React from 'react';

const icons = {
  linkedin: (
    <path d="M5.2 3.2a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0ZM1.3 7h3.6v11.6H1.3V7Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7v6.3h-3.7V13c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H7.4V7Z" />
  ),
  github: (
    <path d="M9 0C4 0 0 4 0 9c0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.7c-2.5.5-3-.6-3.2-1.2-.1-.3-.6-1.2-1-1.4-.3-.2-.8-.6 0-.6.7 0 1.2.7 1.4 1 .8 1.3 2 1 2.6.8.1-.6.4-1 .6-1.2-2.2-.2-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.5 5 .4.3.7.9.7 1.8v2.3c0 .3.2.6.7.5A9 9 0 0 0 18 9c0-5-4-9-9-9Z" />
  ),
  mail: (
    <path d="M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm10 9.2L2 6v13h20V6l-10 6.2ZM3.8 5 12 10l8.2-5H3.8Z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="6" r="1.3" />
    </>
  ),
};

const SocialIcon = ({ name }) => (
  <svg
    className="social-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
  >
    {icons[name]}
  </svg>
);

export default SocialIcon;
