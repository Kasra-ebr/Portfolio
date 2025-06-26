import React from 'react';
import './../App.css'; 
import { MdOutlineLaptop } from "react-icons/md";
import { IoServerSharp } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
function Service() {
  return (
    <section id="services" className="py-20 bg-gray-900 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">My <span className="gradient-text ">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
          <div className="service-card bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-laptop-code text-3xl text-blue-400"><MdOutlineLaptop size={29} className='text-blue-200 text-xl'/></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100 ">Web Development</h3>
            <p className="text-gray-400 mb-6">
              Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS. From simple landing pages to complex web applications.
            </p>

            <div className="mb-6">
              <h4 className="font-medium mb-3 text-gray-300">Includes:</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-400 mr-2"></i>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-400 mr-2"></i>
                  SEO Optimization
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-400 mr-2"></i>
                  Performance Tuning
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-400 mr-2"></i>
                  CMS Integration
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-400 mr-2"></i>
                  Ongoing Maintenance
                </li>
              </ul>
            </div>


          </div>

          {/* Backend Development Service */}
          <div className="service-card bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-server text-3xl text-purple-400"><IoServerSharp size={29} className='text-pink-300 text-xl'/></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100 ">Backend Development</h3>
            <p className="text-gray-400 mb-6">
              Robust backend systems with APIs, databases, and server infrastructure. Secure, scalable solutions that power your web applications and business logic.
            </p>

            <div className="mb-6">
              <h4 className="font-medium mb-3 text-gray-300">Includes:</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-400 mr-2"></i>
                  REST & GraphQL APIs
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-400 mr-2"></i>
                  Database Design & Optimization
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-400 mr-2"></i>
                  Authentication & Authorization
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-400 mr-2"></i>
                  Cloud Deployment & Scaling
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-400 mr-2"></i>
                  API Documentation
                </li>
              </ul>
            </div>

      
          </div>

          {/* UI/UX Design Service */}
          <div className="service-card bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-paint-brush text-3xl text-green-400"><FaPaintBrush size={29} className='text-green-200 text-xl'/></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100 ">UI/UX Design</h3>
            <p className="text-gray-400 mb-6">
              Beautiful, intuitive interfaces designed with user experience as the top priority. Wireframes, prototypes, and high-fidelity designs for your digital products.
            </p>

            <div className="mb-6">
              <h4 className="font-medium mb-3 text-gray-300">Includes:</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  User Research
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  Wireframing
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  Prototyping
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  Usability Testing
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  Design Systems
                </li>
              </ul>
            </div>

          
          </div>
        </div>

        <div className="text-center mt-12 text-gray-100 ">
          <a href="#contact" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition text-lg">
            <i className="fas fa-envelope mr-2"></i> Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Service;
