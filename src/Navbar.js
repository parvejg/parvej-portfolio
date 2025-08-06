// Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";
import Layout from "./Layout";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><strong>Md Parvej</strong></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
