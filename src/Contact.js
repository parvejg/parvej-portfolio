import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out or check my resume!</p>

      <form
        className="contact-form"
        action="https://formspree.io/f/your-form-id"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="resume-buttons">
        <a
          href="/resume2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
        <a
          href="/resume2025.pdf"
          download
          className="resume-btn download"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
