import React from 'react';
import styles from './privacypolicy.module.scss';

import { POLICY_SECTIONS } from '@/constant/privacyPolicy';

const PrivacyPolicy = () => {
  return (
    <>
      <div className={styles.gradientContainer}>
        <div className={styles.gradientOverlay}></div>
      </div>
      <div className={styles.privacyPolicy}>
        <div className={styles.spacer}></div>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.leftColumn}>
              <h1 className={styles.mainTitle}>
                Privacy Policy
              </h1>
              <div className={styles.introText}>
                <p>
                  At Scoop Investment, your privacy is important to us. This Privacy Policy outlines the types of personal
                  information we collect and how we use, store, and protect it.
                </p>
              </div>
              <div className={styles.privacyImage}>
                <div className={styles.imageWrapper}></div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              {POLICY_SECTIONS.map((section, _index) => (
                <section key={section.id} className={styles.policySection}>
                  <h2 className={styles.sectionTitle}>
                    {section.id}. {section.title}
                  </h2>
                  <p className={styles.sectionContent}>
                    {section.content}&nbsp;
                    {section.hasEmail && (
                      <a href="mailto:contact@scoopinvestment.com" className={styles.contactLink}>
                        contact@scoopinvestment.com
                      </a>
                    )}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;