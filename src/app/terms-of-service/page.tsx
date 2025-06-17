import React from 'react';
import "./colors.css";
import styles from './termsAndCondition.module.scss';

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
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className={styles.intro}>
            <p>
              These Terms & Conditions and Disclaimer govern your use of the Scoopinvestment.com platform, 
              which provides independent equity research services to investors on a subscription basis.
            </p>
            <p>
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
            </p>
          </div>
        </header>

        {/* Terms Content */}
        <main className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Domain Ownership and Registration</h2>
            <div className={styles.sectionContent}>
              <p>
                Scoopinvestment.com (herein referred to as "Scoopinvestment") is the domain owned by 
                Mr. Chirag Jain. He offers independent equity research services to investors on 
                subscription basis. SEBI (Research Analysts) Regulations 2014, Registration No. INH000020624.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Risk Disclaimer</h2>
            <div className={styles.sectionContent}>
              <p>
                Use of the information herein is at one's own risk. This is not an offer to sell or 
                solicitation to buy any securities and Ankush Agrawal will not be liable for any losses 
                incurred or investment(s) made or decisions taken/or not taken based on the information 
                provided herein.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Investment Risks</h2>
            <div className={styles.sectionContent}>
              <p>
                Investments in equity and equity related securities involve high degree of risks and 
                the Clients should not place funds to invest unless they can afford to take the risk 
                on their investment.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Small and Midcap Stocks Advisory</h2>
            <div className={styles.sectionContent}>
              <p>
                Investing in small and midcaps stocks have high impact costs due to low liquidity. 
                This might affect the ability to quickly take action on our recommendation at stated price.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. No Guaranteed Returns</h2>
            <div className={styles.sectionContent}>
              <p>
                Investors are not being offered any guaranteed or assured returns; neither the principal 
                nor appreciation on the investments. The performance data quoted represents past performance 
                and does not guarantee future results.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. General Information Disclaimer</h2>
            <div className={styles.sectionContent}>
              <p>
                Information contained herein does not constitute a personal recommendation or take into 
                account the particular investment objectives, financial situations, or needs of individual 
                investors.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Professional Advice</h2>
            <div className={styles.sectionContent}>
              <p>
                Before acting on any recommendation, investors should consider whether it is suitable 
                for their particular circumstances and, if necessary, seek an independent professional advice.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Communication Authorization</h2>
            <div className={styles.sectionContent}>
              <p>
                I authorize Scoop investment to send informative updates (notifications) on my 
                registered mobile number and email address.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Conflict of Interest</h2>
            <div className={styles.sectionContent}>
              <p>
                Chirag Jain may hold shares in the company/ies discussed herein.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Account Usage Policy</h2>
            <div className={styles.sectionContent}>
              <p>
                This is a single user account, sharing of content or login detail is strictly prohibited, 
                failing to which account will be suspended.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Jurisdiction</h2>
            <div className={styles.sectionContent}>
              <p>
                All disputes are subject to the jurisdiction of the courts of Surat, Gujarat – 395007.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;