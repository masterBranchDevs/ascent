import {FaClock, FaInstagram, FaLinkedin, FaMapPin, FaPhone} from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const GET_IN_TOUCH = [
    {
      icon: FaMapPin,
      title: "Address",
      description: "G-17 Shyam plaza, VIP road, Surat - 395007",
    },
    {
        icon: FaPhone,
        title: "Phone",
        description: "+91-7567473055",
    },
    {
        icon: MdOutlineAlternateEmail,
        title: "Email",
        description: "contact@scoopinvestment.com"
    },
    {
        icon: FaClock,
        title: "Hours",
        description: "Monday - Friday: 10:00 AM - 8:00 PM\n" + "\n" +
            "Saturday - Sunday: Closed"
    }
]

const SOCIALS = [
    {
        icon: FaLinkedin,
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/scoopinvestment/"
    },
    {
        icon: FaInstagram,
        title: "Instagram",
        link: "https://www.instagram.com/scoopinvestment"
    }
]
const generateId = (text) => text.toLowerCase().replace(/[^\w\s]/gi, '').split(" ").join("-");

const FAQS_DATA = [
    {
        id: generateId("What are the charges I need to pay"),
        question: "What are the charges I need to pay?",
        answer: "Rs 12,000 per annum, and it needs to be paid in advance.",
    },
    {
        id: generateId("Can I claim refund in case I don't want it"),
        question: "Can I claim a refund in case I don't want it?",
        answer: "No, because we unlock all the premium content once you have subscribed to the plan. So strictly no refunds are allowed.",
    },
    {
        id: generateId("What is the tenure of subscription"),
        question: "What is the tenure of subscription?",
        answer: "1 year is the tenure, post which you would be required to renew your subscription to continue your plan.",
    },
    {
        id: generateId("What is included in the plan"),
        question: "What is included in the plan?",
        answer: "All fundamental stock picks and special situations that arise during the year would be provided throughout the year.",
    }
];


export {
    GET_IN_TOUCH,
    SOCIALS,
    FAQS_DATA,
}