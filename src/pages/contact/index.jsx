import React, { useState } from "react";
import styles from "./contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
          <h1>Contact Us</h1>
          <p>Get in touch with our expert team for personalized investment solutions</p>
        </div>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>
            We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as possible.
          </p>

          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className={styles.infoText}>
              <h3>Address</h3>
              <p>123 Finance Street, Business District, New York, NY 10001</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className={styles.infoText}>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className={styles.infoText}>
              <h3>Email</h3>
              <p>info@scoopinvestment.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <i className="fa-solid fa-clock"></i>
            </div>
            <div className={styles.infoText}>
              <h3>Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h3>Connect With Us</h3>
            <div className={styles.socialIcons}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className={styles.successMessage}>
              <i className="fa-solid fa-check-circle"></i>
              <p>Thank you for your message! We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2>Visit Our Office</h2>
        <div className={styles.mapContainer}>
          {/* In a real application, you would insert a Google Maps iframe or similar here */}
          <div className={styles.mapPlaceholder}>
            <i className="fa-solid fa-map-location-dot"></i>
            <p>Map location of our office</p>
          </div>
        </div>
      </div>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3>What investment services do you offer?</h3>
            <p>
              We offer a comprehensive range of investment services including venture capital, 
              private equity, wealth management, strategic advisory, asset management, and real estate investment.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What is your minimum investment amount?</h3>
            <p>
              Our minimum investment amount varies depending on the specific service and investment opportunity. 
              Please contact us directly to discuss your investment goals and we'll provide you with the relevant information.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I schedule a consultation?</h3>
            <p>
              You can schedule a consultation by filling out our contact form, calling our office, 
              or sending us an email. One of our advisors will get back to you within 24 business hours.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What is your investment approach?</h3>
            <p>
              Our investment approach is based on thorough market research, strategic diversification, 
              and a focus on long-term value creation. We tailor our strategies to each client's unique goals and risk tolerance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;