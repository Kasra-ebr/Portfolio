import React from 'react';
import './../App.css'; 
function Service() {
  return (
    <section id="services" className="py-20 bg-gray-900 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer a range of services to help bring your digital ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-laptop-code text-3xl text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-100" >Web Development</h3>
            <p className="text-gray-400 mb-4">
              Custom websites built with modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition">
              Learn More →
            </a>
          </div>

          {/* Mobile Development */}
          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-mobile-alt text-3xl text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-100">Mobile Development</h3>
            <p className="text-gray-400 mb-4">
              Cross-platform mobile apps using Flutter or React Native for iOS and Android.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition">
              Learn More →
            </a>
          </div>

          {/* UI/UX Design */}
          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-paint-brush text-3xl text-green-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-100">UI/UX Design</h3>
            <p className="text-gray-400 mb-4">
              Beautiful, intuitive interfaces designed with user experience as the top priority.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
