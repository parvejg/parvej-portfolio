// src/pages/Projects.jsx
import React from "react";
import "./Projects.css";

const largeProjects = [
  {
    title: "Component Library",
    description: "A reusable React component library with styled UI elements.",
    link: "https://component-library-321.vercel.app/",
  },
  {
    title: "E-Commerce App",
    description: "A fully responsive e-commerce website using React and API.",
    link: "https://e-commerce-app-mi9h.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React & Bootstrap.",
    link: "https://parvej-portfolio-dev.vercel.app/",
  },
];

const miniProjects = [
  {
    title: "To-Do App",
    description: "Simple and interactive to-do list using React Hooks.",
    link: "https://md-parvej-nextjs-todo-app.vercel.app/",
  },
  {
    title: " Sec To-Do App",
    description:
      "A clean and interactive to-do list app to add, delete, and manage daily tasks efficiently using JavaScript.",
    link: "https://to-do-list-second-parvej.netlify.app/",
  },
  {
    title: " Autocomplete App",
    description:
      "An autocomplete search box that suggests results dynamically as you type, built using JavaScript.",
    link: "https://autocomplete-app-parvej.netlify.app/",
  },
  {
    title: "Hover tabs",
    description:
      "Interactive hover-based tab component built with HTML, CSS, and JavaScript for smooth content transitions.",
    link: "http://hover-tabs-parvej.netlify.app/",
  },
  {
    title: "Alert and message UI components",
    description:
      "Customizable alert and message UI components built with HTML, CSS, and JavaScript for user notifications.",
    link: "https://alerts-messages-parvej.netlify.app/",
  },
  {
    title: "Search menu",
    description:
      "Responsive search menu interface with live filtering functionality for smooth user navigation.",
    link: "https://search-menu-parvej.netlify.app/",
  },
  {
    title: "Calculator",
    description:
      "A basic and functional calculator app built with HTML, CSS, and JavaScript for performing arithmetic operations.",
    link: "https://calculater1-parvej.netlify.app/",
  },
  {
    title: "Image-grid layout",
    description:
      "A responsive image grid layout showcasing a clean and modern gallery.",
    link: "https://image-grid-layout.vercel.app/",
  },

  {
    title: "Restricted Textarea",
    description:
      "A responsive restricted textarea using html css and javascript.",
    link: "https://restricted-textarea.vercel.app/",
  },

  {
    title: "Changelog",
    description:
      "A sleek and reusable changelog component to display project updates with version history using HTML, CSS, and JavaScript.",
    link: "https://changelog-component.vercel.app/",
  },

  {
    title: "Cookie consent popup",
    description:
      "A customizable cookie consent popup built with HTML, CSS, and JavaScript to comply with privacy policies.",
    link: "https://cookie-consent-two.vercel.app/",
  },
  {
    title: "Responsive Form UI",
    description:
      "A modern and responsive form UI design with clean input fields and user-friendly layout built using HTML, CSS, and JavaScript.",
    link: "https://form-ui-five.vercel.app/",
  },
  {
    title: "Date picker UI",
    description:
      "A clean and interactive date picker UI component designed with HTML, CSS, and JavaScript for seamless date selection.",
    link: "https://datepicker-ui.vercel.app/",
  },
  {
    title: "Accordion",
    description:
      "A sleek and responsive accordion component for toggling content visibility with smooth transitions.",
    link: "https://accordion1-three.vercel.app/",
  },
  {
    title: "Tab content sections",
    description:
      "A simple and responsive tab component for switching between content sections using HTML, CSS, and JavaScript.",
    link: "https://tab-self.vercel.app/",
  },
  {
    title: "Single page cv",
    description:
      "A professional online resume (CV) showcasing skills, education, and projects in a clean and responsive layout.",
    link: "https://md-parvej-cv.vercel.app/",
  },
  {
    title: "Watch card",
    description: "A simple watch card using html css .",
    link: "https://parvej-card-eta.vercel.app/",
  },
  {
    title: "Responsive navbar",
    description:
      "A fully responsive website header with navigation links and adaptive design for all screen sizes.",
    link: "https://responsive-header-parvej.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">✨ My Projects</h1>

      <h2 className="section-heading">🔸 Large Projects</h2>
      <div className="projects-grid">
        {largeProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </div>
        ))}
      </div>

      <h2 className="section-heading">🔹 Mini Projects</h2>
      <div className="projects-grid">
        {miniProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
