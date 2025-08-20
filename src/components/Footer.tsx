import Link from 'next/link';
import styles from './Footer.module.scss';
import { NAVIGATION_LINKS, OTHER_LINKS } from "@/constant/site";
import { SOCIALS } from "@/constant/contact";
import { cn, classNames } from '@/utils/func';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <span className={styles.primaryText}>Scoop</span>&nbsp;
              <span className={styles.secondaryText}>Investment</span>
            </Link>
            <div className={styles.container__flex}>
              <p>Financial solutions for your future.</p>
              <p className={cn(styles.boldText, styles.text__secondary)}>Nodal Officer</p>
            </div>
            <div className={styles.licenceDetails}>
              <ul>
                <li>Chirag Jain</li>
                <li>SEBI Registered Individual Research Analyst</li>
                <li>SEBI Reg No. INH000020624</li>
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
              <h3>Other links</h3>
              <ul>
                {OTHER_LINKS.map((OTHER_LINK, index) => (
                  <li key={OTHER_LINK.title + index}>
                    <Link href={OTHER_LINK.link}>
                      {OTHER_LINK.title}
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
                <li><a href='mailto:contact@scoopinvestment.com'>contact@scoopinvestment.com</a></li>
                <li><a href='callto:+91-7567473055'>+91-7567473055</a></li>
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
