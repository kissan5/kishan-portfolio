import React from 'react';

const skills = [
  { label: 'UI/UX Design', accent: true },
  { label: 'Wireframing & Prototyping', accent: false },
  { label: 'Figma', accent: true },
  { label: 'Visual Branding', accent: false },
  { label: 'React', accent: true },
  { label: 'Graphic Illustration', accent: false },
  { label: 'Adobe Illustrator', accent: true },
  { label: 'Responsive Design', accent: false },
  { label: 'Meta Ads', accent: true },
  { label: 'Landing Pages', accent: false },
];

const Marquee = () => {
  const items = [...skills, ...skills];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((skill, index) => (
          <div className="marquee-item" key={`${skill.label}-${index}`}>
            {skill.accent ? <em>{skill.label}</em> : skill.label}
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
