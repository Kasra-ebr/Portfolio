import React, { useState, useEffect } from "react";
import "./../App.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("3W3TqLH2JfOLirvAU");
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6qpyu93",
        "template_wsa2ei4",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "3W3TqLH2JfOLirvAU"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert(
            `Failed to send message. ${error.text || "Please try again later."}`
          );
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  placeholder="Hello Kasra, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition text-gray-100"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-700 p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-100">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <HiOutlineMail className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-gray-100">Email</h4>
                    <p className="text-gray-400">Kasraebr1378@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <MdOutlineLocationOn className="text-purple-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-gray-100">Location</h4>
                    <p className="text-gray-400">Toronto, Canada</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <TbWorld className="text-green-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-gray-100">
                      Social Media
                    </h4>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition"
                      >
                        <FaInstagram className="text-pink-300" />
                      </a>
                      <a
                        href="https://x.com/kasraebrahimi8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
                      >
                        <FaSquareXTwitter className="text-blue-300" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/kasra-ebrahimi-50a751241/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                      >
                        <FaLinkedin className="text-blue-300" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                      >
                        <FaFacebook className="text-blue-200" />
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