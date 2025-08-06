// src/pages/Projects.jsx
import React from "react";
import "./Projects.css";

const projectsData = [
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
    title: "To-Do App",
    description: "Simple and interactive to-do list using React Hooks.",
    link:  "https://md-parvej-nextjs-todo-app.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React & Bootstrap.",
    link: "https://your-link.com/portfolio",
  },

];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">✨ My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
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
