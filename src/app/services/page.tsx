"use client";

import Link from 'next/link';
import Image from "next/image";

import styles from "./services.module.scss";

import UPWARD_ARROW_SVG from "@/assets/upward-arrows.svg";
import FAQSection from "@/components/FAQSection";
import { INVESTMENT_STEPS } from "@/constant/services";

const Services = () => {
    return (
        <>
            <div className={styles.servicesContainer}>
                <div className={styles.heroSection}>
                    <h1>Our Services</h1>
                    <p>Innovative investment solutions tailored to your needs</p>
                </div>

                <div className={styles.servicesIntro}>
                    <p>
                        We primarily focus on mid-cap, small-cap, and micro-cap companies that are typically under-researched and offer significant growth potential.
                    </p>
                </div>

                <div className={styles.approachSection}>
                    <div className={styles.approachSteps}>
                        {INVESTMENT_STEPS.map((item, index) => (
                            <div className={styles.step} key={item.title + index}>
                                <div className={styles.stepNumber}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Elevate Your Investment Strategy?</h2>
                        <p>
                            Our team of financial experts is ready to help you navigate the complex world of investments
                            and create a strategy tailored to your specific goals and risk tolerance.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <FAQSection />

            <div className={styles.arrowOverlay}>
                <Image src={UPWARD_ARROW_SVG} alt={`finance-grow-arrows`} />
            </div>
        </>
    );
};

export default Services;
