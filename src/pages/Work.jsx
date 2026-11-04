import React from 'react';
import './Work.css';

const projects = [
  { number: '01', category: 'WEB DESIGN · TRAVEL', title: 'A responsive website for Himalayan trekking adventures.', name: 'Everest Trek', type: 'Travel website', art: 'everest', size: 'project-wide', url: 'https://www.figma.com/proto/dsLkdhnSONQr952iEQTzSs/Everest-Travel?node-id=61-1151&viewport=165%2C664%2C0.02&t=e8ZtIqNjqJL3ToNt-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=154%3A2219&page-id=0%3A1' },
  { number: '02', category: 'WEB · MOBILE EXPERIENCE', title: 'A digital experience designed for the Futsal community.', name: 'Futsal', type: 'Web & mobile design', art: 'futsal', websiteUrl: 'https://www.figma.com/proto/AkYrzhp7EU7cH7dwiZ1t9K/Futsal?node-id=57-1170&viewport=643%2C-2122%2C0.17&t=DtNYCrNu3W1otkjn-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=57%3A1170&page-id=0%3A1', mobileUrl: 'https://www.figma.com/proto/AkYrzhp7EU7cH7dwiZ1t9K/Futsal?node-id=243-38&viewport=643%2C-2122%2C0.17&t=DtNYCrNu3W1otkjn-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=57%3A1170&page-id=0%3A1' },
  { number: '03', category: 'WEB DESIGN · RESTAURANT', title: 'A dining experience designed to bring taste, joy, and tradition to the table.', name: 'Restaurant website', type: 'Website design', art: 'food', websiteUrl: 'https://www.figma.com/proto/KFQ2ECltdUmkizoQtqBLQl/Restaurant?node-id=319-2323&viewport=869%2C160%2C0.06&t=fDnVR6u8FG0zcRkv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=344%3A394&page-id=0%3A1' },
  { number: '04', category: 'WEB · LANDING PAGE', title: 'A clear, focused consultancy landing page.', name: 'Consultancy website', type: 'Landing page', art: 'consult', websiteUrl: 'https://www.figma.com/proto/Nefr7CRB6nB6j2snXo5Mgl/Educational-Consultancy?node-id=704-1183&viewport=1175%2C905%2C0.03&t=hP8Jbw4DCeDh3d96-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=704%3A1183&page-id=260%3A2', mobileUrl: 'https://www.figma.com/proto/Nefr7CRB6nB6j2snXo5Mgl/Educational-Consultancy?node-id=704-5567&viewport=1175%2C905%2C0.03&t=hP8Jbw4DCeDh3d96-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=704%3A5567&page-id=260%3A2&show-proto-sidebar=1' },
  { number: '05', category: 'SOFTWARE · FINANCE', title: 'A finance management platform for tracking business accounts, transactions, and reports.', name: 'Finance Manager', type: 'Finance management software', art: 'finance', prototypeUrl: 'https://www.figma.com/proto/SARAD6ZaiVGXFLJ0SeLx2G/Finance-Manager?node-id=502-2643&p=f&viewport=2902%2C2710%2C0.28&t=c6dnRsI8rRmP6fP4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=502%3A2643&page-id=0%3A1' },
];

const ProjectArt = ({ variant }) => (
  <div className={`project-art art-${variant}`} aria-hidden="true">
    {variant === 'everest' && (
      <img className="everest-preview" src="/everest-trek.png" alt="" loading="lazy" decoding="async" />
    )}
    {variant === 'tech' && (
      <div className="tech-screen">
        <div className="art-nav"><b>uptech<span>.</span></b><span>Services&nbsp;&nbsp;&nbsp; About&nbsp;&nbsp;&nbsp; Contact</span><i>↗</i></div>
        <div className="tech-content"><small>UPTECH SOLUTION · WEBSITE DESIGN</small><strong>Good tech.<br /><em>Better</em> business.</strong><p>Responsive website concept · Desktop and mobile</p><span className="art-button">EXPLORE THE DESIGN</span></div>
        <div className="tech-orbit">U<span>+</span></div>
        <div className="tech-foot">STRATEGY &nbsp;·&nbsp; DESIGN &nbsp;·&nbsp; DEVELOPMENT</div>
      </div>
    )}
    {variant === 'futsal' && (
      <img className="futsal-preview" src="/futsal-screen.png" alt="" loading="lazy" decoding="async" />
    )}
    {variant === 'food' && (
      <img className="restaurant-preview" src="/restaurant-screen.png" alt="" loading="lazy" decoding="async" />
    )}
    {variant === 'consult' && (
      <img className="consultancy-preview" src="/consultancy-preview.png" alt="" loading="lazy" decoding="async" />
    )}
    {variant === 'finance' && (
      <img className="finance-preview" src="/finance-manager-preview.png" alt="" loading="lazy" decoding="async" />
    )}
    <span className="art-index"> — {variant.toUpperCase()}</span>
  </div>
);

const Work = () => (
  <section id="work" className="work-section">
    <div className="work-heading">
      <div>
        <div className="section-label reveal">A few things I’ve made</div>
        <h2 className="section-title reveal reveal-d1">Selected<br /><span>work.</span></h2>
      </div>
      <p className="work-intro reveal reveal-d2">A mix of digital products, identities and little details that make a brand feel like itself.</p>
    </div>

    <div className="project-grid">
      {projects.map((project, index) => (
        <article className={`project-card ${project.size || ''} reveal reveal-d${Math.min(index + 1, 4)}`} key={project.number}>
          <a
            className="project-visual"
            href={project.url || project.websiteUrl || project.prototypeUrl || '#contact'}
            target={project.url || project.websiteUrl || project.prototypeUrl ? '_blank' : undefined}
            rel={project.url || project.websiteUrl || project.prototypeUrl ? 'noopener noreferrer' : undefined}
            aria-label={project.url || project.websiteUrl || project.prototypeUrl ? `View ${project.name} prototype` : `Discuss ${project.name}`}
          >
            <ProjectArt variant={project.art} />
            <span className="project-open" aria-hidden="true">↗</span>
          </a>
          <div className="project-meta"><span>{project.category}</span><span>{project.number} / 05</span></div>
          <div className="project-details"><div><h3>{project.name}</h3><p>{project.title}</p></div><span className="project-type">{project.type}</span></div>
          {(project.websiteUrl || project.mobileUrl || project.prototypeUrl) && (
            <div className="project-links">
              {project.prototypeUrl && <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">Prototype <span aria-hidden="true">↗</span></a>}
              {project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">Website prototype <span aria-hidden="true">↗</span></a>}
              {project.mobileUrl && <a href={project.mobileUrl} target="_blank" rel="noopener noreferrer">Mobile prototype <span aria-hidden="true">↗</span></a>}
            </div>
          )}
        </article>
      ))}
    </div>
    <div className="work-footer reveal">
      <span>Have a good one in mind?</span>
      <a href="#contact">Let’s make it happen <span aria-hidden="true">↗</span></a>
    </div>
  </section>
);

export default Work;
