import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.scss';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Scoop Investment and our mission to help clients achieve financial success</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`section ${styles.ourStory}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>Founded in 2005, Scoop Investment was established with a clear vision: to provide transparent, accessible, and personalized financial services to individuals and businesses alike.</p>
              <p>What began as a small advisory firm has grown into a trusted financial partner for clients across the nation. Despite our growth, we've maintained our commitment to personalized service and building lasting relationships with our clients.</p>
              <p>Our team of certified financial planners and investment advisors brings decades of combined experience to help you navigate the complexities of financial planning and investment management.</p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imageWrapper}></div>
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
            <p>We believe that financial success is not just about growing wealth, but about creating security, pursuing dreams, and leaving a lasting legacy. Our holistic approach considers all aspects of your financial life to create a comprehensive strategy tailored to your unique goals and circumstances.</p>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We uphold the highest ethical standards in all our interactions and always put our clients' interests first.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continually seek new and better ways to help our clients navigate the ever-changing financial landscape.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We work closely with our clients to understand their needs and goals, creating true partnerships.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from the strategies we develop to the service we provide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`section ${styles.team}`}>
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Our experienced professionals are dedicated to helping you achieve financial success</p>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}></div>
              <div className={styles.teamInfo}>
                <h3>David Johnson</h3>
                <p className={styles.teamPosition}>Founder & CEO</p>
                <p>With over 25 years of experience in the financial industry, David leads our team with a vision for innovative financial solutions.</p>
                <div className={styles.teamSocial}>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            
            <div className={styles.teamCard}>
              <div className={styles.teamImage}></div>
              <div className={styles.teamInfo}>
                <h3>Sarah Williams</h3>
                <p className={styles.teamPosition}>Chief Investment Officer</p>
                <p>Sarah brings a wealth of knowledge in portfolio management and investment strategy with a focus on sustainable investing.</p>
                <div className={styles.teamSocial}>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            
            <div className={styles.teamCard}>
              <div className={styles.teamImage}></div>
              <div className={styles.teamInfo}>
                <h3>Michael Chen</h3>
                <p className={styles.teamPosition}>Financial Planning Director</p>
                <p>Michael specializes in retirement planning and tax strategies, helping clients optimize their financial futures.</p>
                <div className={styles.teamSocial}>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            
            <div className={styles.teamCard}>
              <div className={styles.teamImage}></div>
              <div className={styles.teamInfo}>
                <h3>Emily Rodriguez</h3>
                <p className={styles.teamPosition}>Client Relations Manager</p>
                <p>Emily ensures that our clients receive personalized attention and exceptional service throughout their journey with us.</p>
                <div className={styles.teamSocial}>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Schedule a consultation with one of our expert advisors to discuss your financial goals.</p>
          <Link to="/contact" className="btn">Contact Us Today</Link>
        </div>
      </section>
    </main>
  );
};

export default About;