import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.primaryText}>Scoop</span>
          <span className={styles.secondaryText}>Investment</span>
        </Link>
        <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? styles.active : ''}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;