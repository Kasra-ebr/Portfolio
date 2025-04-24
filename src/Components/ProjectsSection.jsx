// ProjectsSection.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './../App.css'; 
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x400',
      category: 'Web Design',
      title: 'E-commerce Dashboard',
      description: 'A modern dashboard for e-commerce businesses with analytics and inventory management.',
      price: 49,
      link: '#',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/600x400',
      category: 'Mobile App',
      title: 'Fitness Tracker App',
      description: 'Comprehensive fitness tracking application with workout plans and nutrition guides.',
      price: 79,
      link: '#',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/600x400',
      category: 'UI/UX',
      title: 'Banking Interface',
      description: 'Modern banking interface with seamless transaction flows and financial insights.',
      price: 59,
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl  text-gray-100 font-bold mb-4">Featured <span className="   gradient-text">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Here are some of my recent projects. You can purchase templates or hire me for custom work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
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
          <a href="#" className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-3 rounded-lg font-medium transition">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
