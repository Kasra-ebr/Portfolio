import React from 'react';
import './../App.css'; 
function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 ">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-100 ">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 " placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 ">Your Email</label>
                <input type="email" id="email" className="w-full px-4 text-gray-100  py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 " placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-100  ">Your Message</label>
                <textarea id="message" rows="5" className="w-full text-gray-100  px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 " placeholder=" Hello Kasra, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="w-full text-gray-100  bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 text-gray-100  transition">Send Message</button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-700 p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-100 ">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-gray-100 ">Email</h4>
                    <p className="text-gray-400 text-gray-100 ">contact@kasraebrahimi.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-purple-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-gray-100 ">Location</h4>
                    <p className="text-gray-400 text-gray-100 ">Tehran, Iran</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-globe text-green-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-gray-100 ">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                        <i className="fab fa-dribbble"></i>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 hover:text-gray-900 transition">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
