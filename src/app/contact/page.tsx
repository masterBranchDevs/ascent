"use client";

import React, { useState } from "react";

import styles from "./contact.module.scss";
import {GET_IN_TOUCH, SOCIALS} from "@/constant/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any):void => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

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

          {GET_IN_TOUCH.map((item,  index) =>(
              <div className={styles.infoItem} key={item.title + index}>
                <div className={styles.iconContainer}>
                  <item.icon />
                </div>
                <div className={styles.infoText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
          ))}

          <div className={styles.socialLinks}>
            <h3>Connect With Us</h3>
            <div className={styles.socialIcons}>
              {SOCIALS.map((item,  index) =>(
                  <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.title + index}>
                    <item.icon />
                  </a>
              ))}
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
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5866.0428065601955!2d72.79771861138178!3d21.145242507120855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053006f210df9%3A0xdaca865c4c6d696f!2sShyam%20Plaza%20-%20Arham%20Grpup!5e0!3m2!1sen!2sin!4v1750109906290!5m2!1sen!2sin"
              style={{
                width: '100%',
                height: '100%',
                border: "none",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          />
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