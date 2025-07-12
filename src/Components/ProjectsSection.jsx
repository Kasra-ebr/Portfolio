import React from "react";
import ProjectCard from "./ProjectCard";
import "./../App.css";

export const projects = [
  {
    id: 1,
    video: '/Travelbook.mp4',
    category: 'Web Design',
    title: 'Booking-Hotel-App',
    description:
      'A modern travel assistant web application built with React, TypeScript, React.',
    price: 49,
    link: '#',
  },
  {
    id: 2,
    video: '/Freelancer.mp4',
    category: 'Freelancer-App',
    title: 'Freelancer-App',
    description:
      'A complete freelance management platform to handle projects, proposals, and collaboration. Built to simplify workflows for freelancers and clients alike.',
    price: 79,
    link: '#',
  },
  {
    id: 3,
    video: '/RickandMorty.mp4',
    category: 'UI/UX',
    title: 'RickandMorty-App',
    description:
      'A React app using functional components, React Hooks, and Context API for global state management.',
    price: 59,
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-100 font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. You can purchase templates or
            hire me for custom work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              video={project.video}
              category={project.category}
              title={project.title}
              description={project.description}
              price={project.price}
              link={project.link}
              id={project.id}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              window.open("https://github.com/Kasra-ebr/", "_blank")
            }
            className="border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-3 rounded-lg font-medium transition"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;