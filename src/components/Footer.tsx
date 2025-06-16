import Link from 'next/link';
import styles from './Footer.module.scss';
import {NAVIGATION_LINKS} from "@/constant/site";
import {SOCIALS} from "@/constant/contact";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <span className={styles.primaryText}>Scoop</span>
              <span className={styles.secondaryText}>Investment</span>
            </Link>
            <p>Financial solutions for your future.</p>
            <div className={styles.licenceDetails}>
              <ul>
                <li>Chirag Jain</li>
                <li>SEBI Registered Individual Research Analyst</li>
                <li>SEBI Reg No. INH000008941</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.column}>
              <h3>Quick Links</h3>
              <ul>
                {NAVIGATION_LINKS.map((NAVIGATION_LINK, index) => (
                    <li key={NAVIGATION_LINK.title + index}>
                      <Link href={NAVIGATION_LINK.link}>
                        {NAVIGATION_LINK.title}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Contact</h3>
              <ul>
                <li>G-17 Shyam plaza,</li>
                <li>VIP road, Surat - 395007</li>
                <li>contact@scoopinvestment.com</li>
                <li>+91-7567473055</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} Scoop Investment. All rights reserved.</p>
          <div className={styles.social}>
            {SOCIALS.map((item, index) => (
                <a href={item.link} aria-label={item.title} key={item.title + index}>
                  <item.icon />
                </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;