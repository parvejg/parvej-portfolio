// About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="intro">
        Hi, I’m <span className="highlight">Md Parvej</span>, a passionate Front-End Developer with a
        Bachelor's degree in Computer Applications (BCA).
      </p>

      <p>
        I specialize in creating responsive, user-friendly web applications
        using modern technologies. I have hands-on experience in building mini
        projects like a To-Do App, image grid layout App, and a custom  Reusable Component Library .
      </p>

      <p>
        My key skills include:
        <span className="skills">
          HTML, CSS, JavaScript, ReactJS, Bootstrap, Tailwind CSS, Git, and GitHub.
        </span>
      </p>

      <p>
        I enjoy solving real-world problems through code and am always excited
        to learn and grow in the tech field. I'm currently looking for a
        front-end internship or junior developer role where I can contribute and
        improve further.
      </p>

      <p className="personal-touch">
        When I’m not coding, I love exploring new tech tools and watching development tutorials.
      </p>
    </div>
  );
};

export default About;
