import React from "react";

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

          <div class="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              class="w-12 h-12 mb-3"
              alt="Git"
            />
            <span class="text-sm font-medium">Git</span>
          </div>
          <div class="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              class="w-12 h-12 mb-3"
              alt="GitHub"
            />
            <span class="text-sm font-medium">GitHub</span>
          </div>
          <div class="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              class="w-12 h-12 mb-3"
              alt="npm"
            />
            <span class="text-sm font-medium">npm</span>
          </div>
          <div class="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://formik.org/images/favicon.png"
              class="w-12 h-12 mb-3"
              alt="Formik"
            />
            <span class="text-sm font-medium">Formik</span>
          </div>
          <div class="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              class="w-12 h-12 mb-3"
              alt="Redux"
            />
            <span class="text-sm font-medium">Redux</span>
          </div>
          <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              className="w-12 h-12 mb-3"
              alt="MongoDB"
            />
            <span className="text-sm font-medium">MongoDB</span>
          </div>
          <div class="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              class="w-12 h-12 mb-3"
              alt="Postman"
            />
            <span class="text-sm font-medium">Postman</span>
          </div>
           <div class="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" class="w-12 h-12 mb-3" alt="Jest" />
                        <span class="text-sm font-medium">Jest</span>
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              className="w-12 h-12 mb-3"
              alt="Sass"
            />
            <span className="text-sm font-medium">Sass</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
