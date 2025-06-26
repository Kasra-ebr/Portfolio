import React from 'react';

function Technologies() {
  return (
    <section id="technologies" className="py-20 text-gray-100 bg-gray-900  ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies <span className="gradient-text">I Use</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Frontend Technologies */}
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-12 h-12 mb-3"
              alt="React"
            />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              className="w-12 h-12 mb-3"
              alt="Next.js"
            />
            <span className="text-sm font-medium">Next.js</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              className="w-12 h-12 mb-3"
              alt="Tailwind CSS"
            />
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="w-12 h-12 mb-3"
              alt="JavaScript"
            />
            <span className="text-sm font-medium">JavaScript</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              className="w-12 h-12 mb-3"
              alt="TypeScript"
            />
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              className="w-12 h-12 mb-3"
              alt="HTML5"
            />
            <span className="text-sm font-medium">HTML5</span>
          </div>

          {/* Backend Technologies */}
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              className="w-12 h-12 mb-3"
              alt="Node.js"
            />
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              className="w-12 h-12 mb-3"
              alt="Express"
            />
            <span className="text-sm font-medium">Express</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              className="w-12 h-12 mb-3"
              alt="MongoDB"
            />
            <span className="text-sm font-medium">MongoDB</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              className="w-12 h-12 mb-3"
              alt="PostgreSQL"
            />
            <span className="text-sm font-medium">PostgreSQL</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              className="w-12 h-12 mb-3"
              alt="Firebase"
            />
            <span className="text-sm font-medium">Firebase</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
              className="w-12 h-12 mb-3"
              alt="GraphQL"
            />
            <span className="text-sm font-medium">GraphQL</span>
          </div>

          {/* Mobile & Design */}
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-12 h-12 mb-3"
              alt="React Native"
            />
            <span className="text-sm font-medium">React Native</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              className="w-12 h-12 mb-3"
              alt="Flutter"
            />
            <span className="text-sm font-medium">Flutter</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              className="w-12 h-12 mb-3"
              alt="Figma"
            />
            <span className="text-sm font-medium">Figma</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg"
              className="w-12 h-12 mb-3"
              alt="Adobe"
            />
            <span className="text-sm font-medium">Adobe XD</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              className="w-12 h-12 mb-3"
              alt="Sass"
            />
            <span className="text-sm font-medium">Sass</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              className="w-12 h-12 mb-3"
              alt="Docker"
            />
            <span className="text-sm font-medium">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
