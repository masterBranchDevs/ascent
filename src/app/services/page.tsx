"use client";

import Link from 'next/link';

import styles from "./services.module.scss";

import { SERVICES } from "@/constant/services"
import {INVESTMENT_STEPS} from "@/constant/service";

import UPWARD_ARROW_SVG from "@/assets/upward-arrows.svg"
import Image from "next/image";

const Services = () => {
    return (
        <>
            <div className={styles.servicesContainer}>
                <div className={styles.heroSection}>
                    <h1>Our Services</h1>
                    <p>Innovative investment solutions tailored to your needs</p>
                </div>

                <div className={styles.servicesIntro}>
                    <h2>Investment</h2>
                    <p>
                        We primarily focus on mid-cap, small-cap, and micro-cap companies that are typically under-researched and offer significant growth potential.
                    </p>
                </div>

                {/*<div className={styles.servicesGrid}>*/}
                {/*    {SERVICES.map((service, index) => (*/}
                {/*        <div className={styles.serviceCard} key={index}>*/}
                {/*            <div className={styles.iconContainer}>*/}
                {/*                <i className={service.icon}></i>*/}
                {/*            </div>*/}
                {/*            <h3>{service.title}</h3>*/}
                {/*            <p>{service.description}</p>*/}
                {/*            <Link href="/contact" className={styles.learnMore}>*/}
                {/*                Learn More <i className="fa-solid fa-arrow-right"></i>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}


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