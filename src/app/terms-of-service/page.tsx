import React from 'react';
import "./colors.css";
import styles from './termsAndCondition.module.scss';
import { TERMS_DATA } from '@/constant/termsAndConditions';

const renderTextWithLinks = (text: string, linkClassName: string) => {
  const urlRegex = /(https?:\/\/(?:www\.)?[^\s)]+|www\.[^\s)]+)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  text.replace(urlRegex, (match, url, offset) => {
    if (offset > lastIndex) {
      parts.push(text.substring(lastIndex, offset));
    }

    const fullUrl = url.startsWith('www.') ? `https://${url}` : url;

    parts.push(
      <a
        key={offset}
        href={fullUrl}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url} {/* Display the full URL as link text */}
      </a>
    );
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className={styles.termsPage}>
      <div className={styles.gradientContainer}>
        <div className={styles.gradientOverlay}></div>
      </div>
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>
            Last updated: {TERMS_DATA.lastUpdated}
          </p>
          <div className={styles.intro}>
            {TERMS_DATA.intro.map((paragraph, index) => (
              <p key={index}>
                {paragraph.includes('https://scoopinvestment.com') ? (
                  <>
                    By accessing our website at{' '}
                    <a
                      href="https://scoopinvestment.com"
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      scoopinvestment.com
                    </a>{' '}
                    or using our services, you agree to be bound by these terms.
                  </>
                ) : (
                  renderTextWithLinks(paragraph, styles.link)
                )}
              </p>
            ))}
          </div>
        </header>

        {/* Terms Content */}
        <main className={styles.content}>
          {TERMS_DATA.sections.map((section, sectionIndex) => (
            <section className={styles.section} key={sectionIndex}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.sectionContent}>
                {section.content.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {renderTextWithLinks(paragraph, styles.link)}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;