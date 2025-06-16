"use client";

import { useState, useEffect } from 'react';
import Link from  "next/link";
import Image from "next/image";

import webSiteLogo2 from "@/assets/scoop_investment_logo.png"

import styles from './Navbar.module.scss';
import { usePathname } from 'next/navigation'
import {NAVIGATION_LINKS} from "@/constant/site";

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
        <ul className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>

          {NAVIGATION_LINKS.map((item, index) => (
              <li key={item.link + index}>
                <Link href={item.link} className={pathname === item.link ? styles.active : ''}>
                  {item.title}
                </Link>
              </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;