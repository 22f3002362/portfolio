import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_ctf9hsp", // Replace with your EmailJS Service ID
        "template_hnn4qie", // Replace with your EmailJS Template ID
        e.target,
        "97xYOh7OR28cD3WFv" // Replace with your EmailJS User ID (or public key)
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          console.log("Email sent successfully:", response.status, response.text);
        },
        (error) => {
          setStatusMessage("Failed to send the message. Please try again.");
          console.error("Error sending email:", error);
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>

        <div className="contact-info">
          <h3>Connect with me</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="contact-links">
            <a href="tel:+918709186793">Call Me</a>
            <a href="mailto:akarshg5317@gmail.com">akarshg5317@gmail.com</a>
            <a href="mailto:22f3002362@ds.study.iitm.ac.in">
              22f3002362@ds.study.iitm.ac.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
