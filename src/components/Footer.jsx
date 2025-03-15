import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.footerLogo}>
            <Link to="/">
              <span className={styles.primaryText}>Scoop</span>
              <span className={styles.secondaryText}>Investment</span>
            </Link>
            <p>Financial solutions for your future.</p>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.column}>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Investment Planning</Link></li>
                <li><Link to="/services">Retirement Planning</Link></li>
                <li><Link to="/services">Tax Planning</Link></li>
                <li><Link to="/services">Estate Planning</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Contact</h3>
              <ul>
                <li>123 Financial Street</li>
                <li>New York, NY 10001</li>
                <li>info@scoopinvestment.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} Scoop Investment. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;