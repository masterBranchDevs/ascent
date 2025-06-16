import type { Testimonial } from "@/types";

import { FaSearch, FaChartLine, FaLightbulb, FaBalanceScale } from "react-icons/fa";


const WHY_CHOOSE = [
    {
        icon: FaSearch,
        title: "Bottom-Up Research",
        description: "We analyze companies using public domain data from the ground up.",
    },
    {
        icon: FaChartLine,
        title: "Fundamental Analysis",
        description: "We assess financials and future direction for potential growth.",
    },
    {
        icon: FaLightbulb,
        title: "Identifying Catalysts",
        description: "We find triggers like expansions, turnarounds, and policy shifts.",
    },
    {
        icon: FaBalanceScale,
        title: "No Technicals, Just Fundamentals",
        description: "We rely solely on deep, fundamental-driven stock research.",
    },
];


const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        content: "This service completely transformed our business operations. The attention to detail and customer support is unmatched.",
        author: "John Smith",
        author_designation: "CEO, Tech Innovations",
        initials: "JS"
    },
    {
        id: 2,
        content: "Outstanding experience from start to finish. The team went above and beyond our expectations.",
        author: "Maria Johnson",
        author_designation: "Marketing Director, Creative Solutions",
        initials: "MJ"
    },
    {
        id: 3,
        content: "Incredible results in record time! The innovative approach exceeded all our goals.",
        author: "Robert Brown",
        author_designation: "Founder, StartupHub",
        initials: "RB"
    },
    {
        id: 4,
        content: "The level of service and quality delivered was exceptional. Every detail was handled with care.",
        author: "Sarah Davis",
        author_designation: "Operations Manager, Global Enterprises",
        initials: "SD"
    },
    {
        id: 5,
        content: "Fantastic experience working with this team. Their dedication to excellence is evident.",
        author: "Alex Lee",
        author_designation: "CTO, Digital Dynamics",
        initials: "AL"
    },
    {
        id: 6,
        content: "Professional service with amazing results. Highly recommend for any business needs.",
        author: "Emma Miller",
        author_designation: "Product Manager, InnovateCorp",
        initials: "EM"
    }
];


export {
    WHY_CHOOSE,
    TESTIMONIALS
}