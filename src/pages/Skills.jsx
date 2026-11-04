import React from 'react';
import './Skills.css';

const skillGroups = [
  { number: '01', heading: 'Design', note: 'Make it mean something.', items: ['UI/UX design', 'Wireframing', 'Prototyping', 'Visual identity', 'Illustration'] },
  { number: '02', heading: 'Development', note: 'Make it work beautifully.', items: ['HTML & CSS', 'JavaScript', 'React', 'Responsive design', 'Accessible UI'] },
  { number: '03', heading: 'Tools', note: 'The right tool, right time.', items: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Canva', 'Meta Ads'] },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-heading">
      <div>
        <div className="section-label reveal">The sweet spot</div>
        <h2 className="section-title reveal reveal-d1">One foot in<br />each <span>world.</span></h2>
      </div>
      <p className="skills-note reveal reveal-d2">Good design and good development aren’t separate disciplines. The best work happens when they’re part of the same conversation.</p>
    </div>
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <article className={`skill-card skill-card-${index + 1} reveal reveal-d${index + 1}`} key={group.heading}>
          <div className="skill-top"><span>{group.number} / 03</span><span aria-hidden="true">✳</span></div>
          <h3>{group.heading}</h3>
          <p>{group.note}</p>
          <ul>{group.items.map(item => <li key={item}>{item}<span aria-hidden="true">↗</span></li>)}</ul>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
