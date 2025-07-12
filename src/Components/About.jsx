import React from "react";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { GoPerson } from "react-icons/go";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-700 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-xl">
                    <GoPerson />
                  </i>
                </div>
                <h3 className="text-2xl font-bold">Personal Background</h3>
              </div> 
              <p className="text-gray-400 mb-3">
                Based in Toronto, I’m a former aviation enthusiast with a
                lifelong passion for technology and creativity. My journey into
                coding began through self-directed learning, driven by curiosity
                and a desire to build. Before transitioning fully into tech, I
                cultivated my creative foundation as a designer and developed a
                deep interest in architecture drawn to the harmony between form
                and function.
              </p>
              <p className="text-gray-400 mb-6">
                I'm a builder who crafts code, creates music, shoots
                videography, and reads up on innovation and creativity. My
                passions drive my work, blending tech smarts with bold ideas.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-700 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-laptop-code text-xl">
                    <MdOutlinePersonalVideo />
                  </i>
                </div>
                <h3 className="text-2xl font-bold">Professional Journey</h3>
              </div>
              <p className="text-gray-400 mb-3">
                With a background in design and a curiosity for how things work,
                I taught myself to code and fell in love with the process of
                turning ideas into functional, elegant digital products. Over
                time, I've combined my design instincts with technical skills to
                focus on building user-friendly, well-crafted applications.
              </p>
              <p className="text-gray-400 mb-6">
                I specialize in React ecosystems and designing intuitive user
                interfaces. My work has been featured in design awards and
                helped businesses scale their digital presence.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() =>
                    window.open("https://github.com/Kasra-ebr/", "_blank")
                  }
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                  View Projects
                </button>

                <a
                  href="#technologies"
                  className="border border-blue-400 px-6 py-2 rounded-lg font-medium hover:bg-blue-900 hover:bg-opacity-30 transition"
                >
                  My Tech Stack
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
