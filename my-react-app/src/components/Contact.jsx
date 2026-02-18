import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Title */}
        <h1 className="contact-title">Let's Work Together</h1>

        <p className="contact-subtitle">
          Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
        </p>

        <div className="contact-content">

          {/* Left side form */}
          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />

            <textarea
              placeholder="Your Message"
              className="contact-textarea"
              rows="6"
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>

          </form>

          {/* Right side contact information */}
          <div className="contact-info">

            <h3>Connect With Me</h3>

            <p>📧 hello@example.com</p>
            <p>🔗 LinkedIn</p>
            <p>🐱 GitHub</p>

            <hr />

            <p className="contact-availability">
              I'm currently available for freelance work and open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
