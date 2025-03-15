import React from "react";
import styles from "./services.module.scss";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Venture Capital",
      description: "We help startups and growing businesses secure the capital they need to scale their operations and achieve their goals.",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "Private Equity",
      description: "Our private equity services focus on acquiring and managing companies to improve operations and increase value over time.",
      icon: "fa-solid fa-handshake",
    },
    {
      title: "Wealth Management",
      description: "We provide personalized wealth management strategies to help high net-worth individuals preserve and grow their assets.",
      icon: "fa-solid fa-wallet",
    },
    {
      title: "Strategic Advisory",
      description: "Our team of experts provides guidance on mergers, acquisitions, restructuring, and other strategic business decisions.",
      icon: "fa-solid fa-lightbulb",
    },
    {
      title: "Asset Management",
      description: "We optimize investment portfolios across multiple asset classes to maximize returns while managing risk.",
      icon: "fa-solid fa-sack-dollar",
    },
    {
      title: "Real Estate Investment",
      description: "Our real estate services include property acquisition, development, and management for long-term value creation.",
      icon: "fa-solid fa-building",
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
          <h1>Our Services</h1>
          <p>Innovative investment solutions tailored to your needs</p>
        </div>
      </div>

      <div className={styles.servicesIntro}>
        <h2>What We Offer</h2>
        <p>
          At Scoop Investment, we provide a comprehensive range of financial services designed to help our clients achieve their investment goals. 
          Our team of experienced professionals is dedicated to delivering exceptional results through strategic thinking and innovative approaches.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <div className={styles.iconContainer}>
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/contact" className={styles.learnMore}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Elevate Your Investment Strategy?</h2>
          <p>
            Our team of financial experts is ready to help you navigate the complex world of investments 
            and create a strategy tailored to your specific goals and risk tolerance.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Schedule a Consultation
          </Link>
        </div>
      </div>

      <div className={styles.approachSection}>
        <h2>Our Approach</h2>
        <div className={styles.approachSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h3>Discovery</h3>
            <p>We start by understanding your goals, risk tolerance, and investment timeline to create a personalized strategy.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h3>Analysis</h3>
            <p>Our team conducts thorough market research and analysis to identify the best investment opportunities for your portfolio.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h3>Implementation</h3>
            <p>We execute your investment strategy with precision, ensuring optimal allocation of your assets across various markets.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>04</div>
            <h3>Monitoring</h3>
            <p>We continuously monitor your investments and make adjustments as needed to respond to market changes and opportunities.</p>
          </div>
        </div>
      </div>

      <div className={styles.testimonialSection}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <div className={styles.quote}>
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
              "Scoop Investment has transformed our company's financial strategy. Their expert guidance has led to significant growth and new opportunities."
            </p>
            <div className={styles.client}>
              <h4>Sarah Johnson</h4>
              <p>CEO, TechSolutions Inc.</p>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.quote}>
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
              "Working with the team at Scoop has been a game-changer for my personal portfolio. Their attention to detail and personalized approach is unmatched."
            </p>
            <div className={styles.client}>
              <h4>Michael Chen</h4>
              <p>Private Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;