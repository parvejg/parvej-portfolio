import "./Home.css";

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Md Parvej</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <header className="hero-section">
        <div className="intro-text">
          <h1 className="typing-text">Hi, I’m Md Parvej</h1>
          <p>I build modern websites using React, Bootstrap & more.</p>
          <Link to="/projects" className="btn">
            View Projects
          </Link>
          <h1 className="projects-txt">Projects</h1>

          <div className="home-page-projects-container">
            <div className="project-card-h">
              <p> Component Library</p>
              <span>A simple Component Library </span>
            </div>
            <div className="project-card-h">
              <p>E-Commerce website</p>
              <span>A responsive e-commerce website using Api </span>
            </div>
          </div>
        </div>
        <div className="avatar">
          <img src="/parvej.jpeg" alt="parvej" />
        </div>
      </header>
    </div>
  );
};

export default Home;
