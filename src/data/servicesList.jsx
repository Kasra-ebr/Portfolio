import { MdOutlineLaptop } from "react-icons/md";
import { IoServerSharp } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";

export const services = [
  {
    id: 1,
    icon: <MdOutlineLaptop size={29} className='text-blue-200 text-xl' />,
    iconBg: "bg-blue-500 bg-opacity-20",
    title: "Web Development",
    description: "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS. From simple landing pages to complex web applications.",
    includes: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Tuning",
      "CMS Integration",
      "Ongoing Maintenance"
    ],
    checkColor: "text-blue-400"
  },
  {
    id: 2,
    icon: <IoServerSharp size={29} className='text-pink-300 text-xl' />,
    iconBg: "bg-purple-500 bg-opacity-20",
    title: "Backend Development",
    description: "Robust backend systems with APIs, databases, and server infrastructure. Secure, scalable solutions that power your web applications and business logic.",
    includes: [
      "REST & GraphQL APIs",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Cloud Deployment & Scaling",
      "API Documentation"
    ],
    checkColor: "text-purple-400"
  },
  {
    id: 3,
    icon: <FaPaintBrush size={29} className='text-green-200 text-xl' />,
    iconBg: "bg-green-500 bg-opacity-20",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience as the top priority. Wireframes, prototypes, and high-fidelity designs for your digital products.",
    includes: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems"
    ],
    checkColor: "text-green-400"
  },
];