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

export {
    GET_IN_TOUCH,
    SOCIALS
}