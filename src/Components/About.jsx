import React from 'react'
import { MdOutlinePersonalVideo } from "react-icons/md";
import { GoPerson } from "react-icons/go";
function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-gray-100">
    <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get to know the person behind the code</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="bg-gray-700 p-8 rounded-xl shadow-xl">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-user text-xl"><GoPerson/></i>
                        </div>
                        <h3 className="text-2xl font-bold">Personal Background</h3>
                    </div>
                    <p className="text-gray-400 mb-6">
                        Born and raised in Tehran, I've always been fascinated by technology and design. My coding journey began at 14 when I built my first website (a terrible fan page for my favorite band). Since then, I've dedicated myself to mastering both the technical and creative aspects of digital product development.
                    </p>
                    <p className="text-gray-400 mb-6">
                        When I'm not coding, you'll find me hiking in the mountains, experimenting with photography, or reading sci-fi novels. I believe great products come from diverse experiences, so I make sure to keep my life full of them.
                    </p>
                </div>
            </div>
            <div className="md:w-1/2">
                <div className="bg-gray-700 p-8 rounded-xl shadow-xl">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-laptop-code text-xl"> <MdOutlinePersonalVideo/></i>
                        </div>
                        <h3 className="text-2xl font-bold">Professional Journey</h3>
                    </div>
                    <p className="text-gray-400 mb-6">
                        With over 5 years of professional experience, I've worked with startups, agencies, and enterprise clients to build digital products that users love. My approach combines technical excellence with thoughtful design - I don't just write code, I solve problems.
                    </p>
                    <p className="text-gray-400 mb-6">
                        I specialize in React ecosystems, Node.js backends, and designing intuitive user interfaces. My work has been featured in design awards and helped businesses scale their digital presence.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-medium hover:opacity-90 transition">View Projects</a>
                        <a href="#technologies" className="border border-blue-400 px-6 py-2 rounded-lg font-medium hover:bg-blue-900 hover:bg-opacity-30 transition">My Tech Stack</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About