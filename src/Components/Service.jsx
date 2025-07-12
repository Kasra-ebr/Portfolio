import React from 'react';
import './../App.css'; 
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

function Service() {
  return (
    <section id="services" className="py-20 bg-gray-900 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            My <span className="gradient-text ">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="text-center mt-12 text-gray-100 ">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition text-lg"
          >
            <i className="fas fa-envelope mr-2"></i> Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Service;

function ServiceCard({ icon, iconBg, title, description, includes, checkColor }) {
  return (
    <div className="service-card bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-100">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="mb-6">
        <h4 className="font-medium mb-3 text-gray-300">Includes:</h4>
        <ul className="space-y-2 text-gray-400">
          {includes.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <i className={`fas fa-check-circle ${checkColor} mr-2`}></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}