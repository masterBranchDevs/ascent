"use client";

import Link from 'next/link';
import Image from "next/image";

import styles from "./services.module.scss";

import UPWARD_ARROW_SVG from "@/assets/upward-arrows.svg";

// Updated investment steps with two new ones added
const INVESTMENT_STEPS = [
    {
        icon: "01",
        title: "Bottom-Up Screening",
        description:
            "We begin by identifying potential opportunities using a bottom-up approach—carefully analyzing publicly available data and disclosures to filter promising companies.",
    },
    {
        icon: "02",
        title: "In-Depth Financial Analysis",
        description:
            "We dive deep into a company’s financials to evaluate past performance, assess financial health, and understand the direction of future growth.",
    },
    {
        icon: "03",
        title: "Identifying the Investment Thesis",
        description:
            "We identify what drives the opportunity—be it capacity expansion, debt reduction, management changes, industry tailwinds, policy support, or turnaround potential.",
    },
    {
        icon: "04",
        title: "Fundamental-Driven Research",
        description:
            "Our approach is rooted in thorough fundamental research—not technical charts—ensuring every recommendation is backed by conviction and clarity.",
    },
    {
        icon: "05",
        title: "Stock Recommendations",
        description:
            "We provide carefully vetted stock recommendations based on our proprietary research methodology, focusing on long-term potential and risk mitigation.",
    },
    {
        icon: "06",
        title: "Periodic Updates to Our Recommendations",
        description:
            "Our team continuously tracks market movements and company performance to ensure our clients receive timely updates on active recommendations.",
    }
];

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

            <div className={styles.arrowOverlay}>
                <Image src={UPWARD_ARROW_SVG} alt={`finance-grow-arrows`} />
            </div>
        </>
    );
};

export default Services;
