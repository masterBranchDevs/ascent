"use client";

import { useState, useEffect, useRef } from 'react';
import Link from  "next/link";
import Image from "next/image";

import webSiteLogo2 from "@/assets/scoop_investment_logo.png"

import styles from './Navbar.module.scss';
import { usePathname } from 'next/navigation'
import {NAVIGATION_LINKS} from "@/constant/site";
import { SOCIALS } from '@/constant/contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={webSiteLogo2} alt={"Scoop Investment"} />
        </Link>
        <div className={`${styles.mobileToggle}  ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Desktop nav */}
        <ul className={styles.desktopNavItems}>
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={item.link + index}>
              <Link href={item.link} className={pathname === item.link ? styles.active : ''}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile overlay nav */}
      <div className={styles.overlay + (isOpen ? ' ' + styles.open : '')}>
        <div className={styles.mobileHeader}>
          <Link href="/" className={styles.logo} aria-label="Home">
            <Image src={webSiteLogo2} alt="Scoop Investment" />
          </Link>
          <button
            className={styles.closeButton}
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <ul className={styles.mobileNavItems + (isOpen ? ' ' + styles.open : '')}>
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={item.link + index}>
              <Link
                href={item.link}
                className={pathname === item.link ? styles.active : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileFooter}>
          <div className={styles.socials}>
            {SOCIALS.map((item, idx) => (
              <a href={item.link} aria-label={item.title} key={item.title + idx} target="_blank" rel="noopener noreferrer">
                <item.icon />
              </a>
            ))}
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Scoop Investment
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;