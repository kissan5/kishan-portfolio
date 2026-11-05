import React from "react";
import SocialIcon from "../components/SocialIcon";
import "./About.css";

const experiences = [
  {
    yr: "Jan 2025 — Now",
    company: "Dreamtree — Org",
    role: "UI/UX & Graphic Designer · Remote",
    badge: "CURRENT · PART-TIME",
  },
  {
    yr: "Mar 2025 — Apr 2026",
    company: "Uptech Solution",
    role: "UI/UX  Designer · Kathmandu",
    badge: "FULL-TIME",
  },
  {
    yr: "Oct 2024 — Mar 2025",
    company: "Campus Code",
    role: "UI/UX Design Intern",
    badge: "INTERNSHIP",
  },
  {
    yr: "Aug 2024 — Mar 2025",
    company: "Tritech Web Solutions",
    role: "Digital Marketing · Remote",
    badge: "PART-TIME",
  },
];

const About = () => (
  <section id="about" className="about-section">
    <div className="about-intro">
      <div className="section-label reveal">A little about me</div>
      <h2 className="section-title reveal reveal-d1">
        Curious by
        <br />
        nature. <span>Careful</span>
        <br />
        by design.
      </h2>
      <p className="about-copy reveal reveal-d2">
        I’m Kishan — a UI/UX and graphic designer with a frontend developer’s
        curiosity. I love the space where a good idea becomes something real:
        clear, considered, and a joy to use.
      </p>
      <p className="about-copy about-copy-secondary reveal reveal-d3">
        From early sketches to the last line of CSS, I bring the same thing to
        every project: a thoughtful eye, an open mind, and a healthy obsession
        with the details.
      </p>
      <div className="about-links reveal reveal-d4">
        <a
          href="https://www.linkedin.com/in/kishan-shah-9889651a0/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon name="linkedin" />
          LinkedIn <span>↗</span>
        </a>
        <a href="https://github.com/kissan5" target="_blank" rel="noreferrer">
          <SocialIcon name="github" />
          GitHub <span>↗</span>
        </a>
        <a href="mailto:kishanshaa@gmail.com">
          <SocialIcon name="mail" />
          Email <span>↗</span>
        </a>
      </div>
    </div>

    <div className="about-history reveal reveal-d2">
      <div className="history-heading">
        <span>THE JOURNEY SO FAR</span>
        <span>2024 — NOW</span>
      </div>
      <div className="experience-list">
        {experiences.map((exp) => (
          <article className="experience-row" key={exp.company}>
            <span className="experience-date">{exp.yr}</span>
            <div className="experience-details">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
            </div>
            <span className="experience-badge">{exp.badge}</span>
          </article>
        ))}
      </div>
      <div className="education">
        <span className="education-label">ALSO LEARNING</span>
        <h3>B.Tech, Computer Engineering</h3>
        <p>RK University, Gujarat · 2021 — 2025 · CGPA 7.54</p>
        <div className="cert-list">
          <span>UX Design Professional · Coursera</span>
          <span>Adobe Illustrator · Coursera</span>
          <span>HTML, CSS &amp; JS · Infosys</span>
        </div>
      </div>
    </div>
  </section>
);

export default About;
