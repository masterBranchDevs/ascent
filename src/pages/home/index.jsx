import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Invest in Your Future with Confidence</h1>
          <p>Expert financial planning and investment strategies tailored to your goals</p>
          <div className={styles.heroBtns}>
            <Link to="/services" className="btn">Our Services</Link>
            <Link to="/contact" className={styles.secondaryBtn}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="section-title">Why Choose Scoop Investment</h2>
          <p className="section-subtitle">We provide comprehensive financial solutions to help you achieve your goals</p>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Investment Planning</h3>
              <p>Tailored investment strategies to help you reach your financial goals with confidence.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Retirement Planning</h3>
              <p>Secure your future with customized retirement plans that ensure financial independence.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <h3>Tax Planning</h3>
              <p>Optimize your tax strategy to minimize liabilities and maximize your wealth preservation.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-landmark"></i>
              </div>
              <h3>Estate Planning</h3>
              <p>Protect your assets and legacy with comprehensive estate planning solutions.</p>
            </div>
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
              <p>At Scoop Investment, we believe that financial success comes from a deep understanding of your goals and a strategic approach to reaching them.</p>
              <p>With over 20 years of experience in the financial industry, our team of expert advisors provides personalized guidance to help you navigate the complexities of investing and financial planning.</p>
              <Link to="/about" className="btn">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>"Working with Scoop Investment has transformed my financial outlook. Their personalized approach and expertise have helped me build a secure future for my family."</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}></div>
                <div className={styles.authorInfo}>
                  <h4>John Doe</h4>
                  <p>Retirement Planning Client</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>"The team at Scoop Investment provided invaluable guidance for my business investments. Their strategic approach has led to consistent growth and stability."</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}></div>
                <div className={styles.authorInfo}>
                  <h4>Jane Smith</h4>
                  <p>Business Investment Client</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p>"I appreciate the transparent and ethical approach of Scoop Investment. They always put my interests first and have helped me navigate complex financial decisions with confidence."</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}></div>
                <div className={styles.authorInfo}>
                  <h4>Michael Johnson</h4>
                  <p>Wealth Management Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Start Your Financial Journey?</h2>
          <p>Schedule a free consultation with one of our expert advisors today.</p>
          <Link to="/contact" className="btn">Get Started</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;