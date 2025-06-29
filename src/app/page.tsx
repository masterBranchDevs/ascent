import Link from 'next/link';

import { WHY_CHOOSE } from '@/constant/home';

import styles from './page.module.scss';

import TestimonialCarousel from "@/components/common/testimonials";

const Page = () => {

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Invest in Your Future with Confidence</h1>
          <p>Expert financial planning and investment strategies tailored to your goals</p>
          <div className={styles.heroBtns}>
            <Link href="/services" className="btn">Our Services</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="section-title">Why Choose Scoop Investment</h2>
          <p className="section-subtitle">We specialize in <strong>Mid-Cap, Small-Cap, and Micro-Cap</strong> companies that are typically overlooked but offer strong growth opportunities</p>

          <div className={styles.featureGrid}>
            {WHY_CHOOSE.map((item, index) => (
                <div key={`${item.title}-${index}`} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <item.icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={`${styles.aboutPreview}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <div className={styles.imageWrapper}></div>
            </div>
            <div className={styles.aboutContent}>
              <h2>Your Trusted Financial Partner</h2>
              <p>At Scoop Investment, we believe in the power of research-driven investing to uncover high-potential opportunities others often miss.</p>
              <p>With over 7 years of experience in equity research and capital markets, Chirag Jain offers deep insights and conviction-based investment strategies tailored for long-term wealth creation.<br />
                Specializing in unlisted shares, pre-IPO advisory, and financial content. Chirag combines rigorous analysis with a strategic mindset to guide investors through emerging and undercovered opportunities.</p>
              <Link href="/about" className={`btn ${styles.aboutContentLink}`}>Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>


      {/* Our Mission Section */}
      <section className={`section ${styles.ourMission}`}>
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className={styles.missionContent}>
            <p>At Scoop Investment, our mission is to empower our clients to achieve financial independence through expert guidance, innovative solutions, and unwavering integrity.</p>
            <p>We believe that financial success is not just about growing wealth, but about creating security, pursuing dreams, and leaving a lasting legacy. </p>
          </div>
        </div>
      </section>


      {/* About Preview Section */}
      <section className={`${styles.aboutPreview}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>Meet Our Team</h2>
              <p className={styles.teamPosition}>Chirag Jain - Founder & CEO</p>
              <p>With over 7 years of experience in equity research and capital markets, Chirag Jain brings extensive expertise in identifying high-conviction, long-term investment opportunities grounded in deep fundamental analysis. His approach is centered on value investing principles, long-term wealth creation, and a disciplined research methodology.</p>
              <p>Chirag specializes in unlisted equities, pre-IPO advisory, and emerging growth stories across sectors. He advises a diverse client base, including high-net-worth individuals (HNIs), family offices, and boutique investment firms, helping them navigate private market opportunities with clarity and confidence.</p>
              <p>In addition to his investment advisory work, Chirag is actively involved in financial media and investor education. He creates insightful, data-driven content aimed at simplifying complex market concepts for a broader audience. His work reflects a commitment to transparency, independent thinking, and delivering value through informed decision-making.</p>
              <a href="https://scoopinvestment.substack.com/" className={`btn ${styles.aboutContentLink}`}>Chirag Jain Writes</a>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.meetOutExpert}></div>
            </div>
          </div>
        </div>
      </section>


      {/* Disclaimer Section */}
      <section className={`section ${styles.ourMission}`} id="disclaimer">
        <div className="container">
          <h2 className="section-title">Disclaimer</h2>
          <div className={styles.missionContent}>
            <p>
              The information provided on this website is for informational purposes only and should not be considered as financial advice. Scoop Investment does not guarantee the accuracy, completeness, or timeliness of the information presented. All investments involve risks, including the loss of principal. You should consult with a qualified financial advisor before making any investment decisions.
            </p>
            <p>
              <strong>Scoop Investment</strong> is a trade/brand name used by Chirag Jain (Individual SEBI Registered Research Analyst INH000020624) to provide equity research services in the Indian Equity Markets.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/*<section className={`section ${styles.testimonials}`}>*/}
      {/*  <div className="container">*/}
      {/*    <h2 className="section-title">What Our Clients Say</h2>*/}
      {/*    <TestimonialCarousel />*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*/!* CTA Section *!/*/}
      {/*<section className={styles.cta}>*/}
      {/*  <div className="container">*/}
      {/*    <h2>Ready to Start Your Financial Journey?</h2>*/}
      {/*    <p>Schedule a free consultation with one of our expert advisors today.</p>*/}
      {/*    <Link href="/contact" className="btn">Get Started</Link>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </main>
  );
};

export default Page;