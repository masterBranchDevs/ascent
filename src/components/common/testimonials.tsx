"use client";

import type { Testimonial } from "@/types";

import React, { useState, useEffect, useRef } from 'react';

import './testimonals.scss'

interface TestimonialExtendedProps extends Testimonial {
    isComplete: boolean;
    key: string;
}
import { TESTIMONIALS } from "@/constant/home";

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(TESTIMONIALS.length);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [cardWidth, setCardWidth] = useState<number>(350);
    const [gap, setGap] = useState<number>(30);

    const trackRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    const extendedTestimonials = [
        ...TESTIMONIALS.map((t: Testimonial)  => ({ ...t, isClone: true, key: `clone-start-${t.id}` })),
        ...TESTIMONIALS.map((t: Testimonial) => ({ ...t, isClone: false, key: `original-${t.id}` })),
        ...TESTIMONIALS.map((t: Testimonial) => ({ ...t, isClone: true, key: `clone-end-${t.id}` }))
    ];

    const calculateDimensions = (): void => {
        if (trackRef.current) {
            const firstCard = trackRef.current.querySelector('.testimonial-card') as HTMLElement;
            if (firstCard) {
                setCardWidth(firstCard.offsetWidth);
                setGap(window.innerWidth <= 768 ? 20 : 30);
            }
        }
    };

    const updateCarousel = (animate: boolean = true): void => {
        if (trackRef.current) {
            const translateX = -(currentIndex * (cardWidth + gap));

            if (animate) {
                trackRef.current.classList.remove('no-transition');
            } else {
                trackRef.current.classList.add('no-transition');
            }

            trackRef.current.style.transform = `translateX(${translateX}px)`;
        }
    };

    const nextSlide = (): void => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = (): void => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    const startAutoScroll = (): void => {
        autoScrollRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
    };

    const stopAutoScroll = (): void => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
    };

    // Handle infinite scroll reset
    useEffect(() => {
        updateCarousel(true);

        const timeout = setTimeout(() => {
            if (currentIndex >= TESTIMONIALS.length * 2) {
                setCurrentIndex(TESTIMONIALS.length);
                updateCarousel(false);
            } else if (currentIndex < TESTIMONIALS.length) {
                setCurrentIndex(TESTIMONIALS.length * 2 - 1);
                updateCarousel(false);
            }
            setIsTransitioning(false);
        }, 600);

        return () => clearTimeout(timeout);
    }, [currentIndex, cardWidth, gap]);

    // Initialize and handle resize
    useEffect(() => {
        calculateDimensions();
        updateCarousel(false);

        const handleResize = (): void => {
            setTimeout(() => {
                calculateDimensions();
                updateCarousel(false);
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-scroll
    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);

    return (
        <div className="testimonial-carousel">
            <div
                className="testimonial-track"
                ref={trackRef}
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll}
            >
                {extendedTestimonials.map((item) => (
                    <div key={item.key} className={`testimonial-card ${item.isClone ? 'clone' : ''}`}>
                        <div className="testimonial-content">
                            <p>"{item.content}"</p>
                        </div>
                        <div className="testimonial-author">
                            <div className="author-image">{item.initials}</div>
                            <div className="author-info">
                                <h4>{item.author}</h4>
                                <p>{item.author_designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="carousel-arrow prev"
                onClick={prevSlide}
                disabled={isTransitioning}
                aria-label="Previous testimonial"
            >
                ‹
            </button>
            <button
                className="carousel-arrow next"
                onClick={nextSlide}
                disabled={isTransitioning}
                aria-label="Next testimonial"
            >
                ›
            </button>
        </div>
    );
};

export default TestimonialCarousel;