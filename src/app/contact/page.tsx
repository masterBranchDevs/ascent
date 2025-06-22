"use client";

import React, { useState } from "react";
import styles from "./contact.module.scss";
import { GET_IN_TOUCH, SOCIALS, FAQS_DATA } from "@/constant/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();

        if (response.ok) {
          console.log("Email sent:", result);
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
        } else {
          console.error("Failed:", result);
          alert("Failed to send your message. Please try again later.");
        }
      } else {
        const text = await response.text();
        console.error("Unexpected response:", text);
        alert("Unexpected server response. Check server logs.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
          <h1>Contact Us</h1>
          <p>
            Get in touch with our expert team for personalized investment
            solutions
          </p>
        </div>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>
            We're here to answer any questions you may have about our services.
            Reach out to us and we'll respond as soon as possible.
          </p>

          {GET_IN_TOUCH.map((item, index) => (
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
              {SOCIALS.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.title + index}
                >
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
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2>Visit Our Office</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5866.0428065601955!2d72.79771861138178!3d21.145242507120855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053006f210df9%3A0xdaca865c4c6d696f!2sShyam%20Plaza%20-%20Arham%20Grpup!5e0!3m2!1sen!2sin!4v1750109906290!5m2!1sen!2sin"
            style={{ width: "100%", height: "100%", border: "none" }}
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
          {FAQS_DATA.map((faq, index) => (
            <div
              className={styles.faqItem}
              id={faq.question + index}
              key={faq.id}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
