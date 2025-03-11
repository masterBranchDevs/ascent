import React from 'react';
import { Link } from 'react-router';

import { FaHome, FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

import styles from './NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <div className={styles.notFoundImage}>
          <div className={styles.magnifyingGlass}></div>
        </div>
        <h2 className={styles.notFoundSubtitle}>Page Not Found</h2>
        <p className={styles.notFoundMessage}>
          Oops! The investment opportunity you're looking for seems to have vanished.
        </p>
        <div className={styles.notFoundActions}>
          <Link to="/" className={styles.homeButton}>
            <FaHome className={styles.buttonIcon} /> Return to Homepage
          </Link>
        </div>
        <div className={styles.companyDetails}>
          <p className={styles.companyName}>Scoop Investment</p>
          <p className={styles.companyTagline}>Converting physical shares to demat | Mutual funds | Unlisted shares</p>
          <div className={styles.companyContact}>
            <p>G-17 Shyam Plaza, VIP Road, Surat - 395007</p>
            <p>
              <a href="tel:7567473055">
                <FaPhoneAlt className={styles.contactIcon} /> +91 7567473055
              </a> | 
              <a href="mailto:Contact@scoopinvestment.com">
                <FaEnvelope className={styles.contactIcon} /> Contact@scoopinvestment.com
              </a>
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://scoopinvestment.substack.com/" target="_blank" rel="noopener noreferrer">
              <SiSubstack className={styles.socialIcon} /> Substack
            </a>
            <a href="https://in.linkedin.com/company/scoopinvestment" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.socialIcon} /> LinkedIn
            </a>
            <a href="https://twitter.com/scoopinvestment" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.socialIcon} /> Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;