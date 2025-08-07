import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="intro-text">
          <h1 className="typing-text">Hi, I’m Md Parvej</h1>
          <p>I build modern websites using React, Bootstrap & more.</p>
          <Link to="/projects" className="btn">
            View Projects
          </Link>

          {/* ✅ Social Media Links */}
          <div className="social-links">
  <p>Social Links:</p>
  <FaGithub />
  <FaLinkedin />
  <FaInstagram />
</div>


          <h1
            className="projects-txt"
            style={{ marginTop: "40px", textAlign: "center" }}
          >
            Projects
          </h1>

          <section className="home-projects-section">
            <div className="home-page-projects-container">
              <div className="project-card-h">
                <p>Component Library</p>
                <span>A simple Component Library</span>
              </div>
              <div className="project-card-h">
                <p>E-Commerce website</p>
                <span>A responsive e-commerce website using Api</span>
              </div>
            </div>
          </section>
        </div>

        <div className="avatar">
          <img src="/parvej.jpeg" alt="parvej" />
        </div>
      </header>
    </div>
  );
};

export default Home;
