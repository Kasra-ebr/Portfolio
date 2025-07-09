import React from "react";
import "./../App.css";

const ProjectCard = ({
  image,
  video,
  category,
  title,
  description,
  price,
  link,
  id,
}) => {
  return (
    <div className="project-card bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none w-full h-48 object-cover object-top"
          ></video>
        ) : (
          <img src={image} alt={title} className="w-full h-48 object-contain" />
        )}

        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 flex flex-col justify-end p-6 transition duration-300 transform translate-y-4 hover:opacity-100 hover:translate-y-0">
          <div className="flex justify-between items-center">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              {category}
            </span>
            <div className="flex space-x-2">
              <button
                className="like-btn text-white hover:text-red-500 transition"
                data-id={id}
              >
                <i className="far fa-heart"></i>
              </button>
              <button
                className="view-details bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition"
                data-id={id}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <span className="gradient-text">{title}</span>
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-gray-300">
            Technical Highlights:
          </h4>
          <div className="flex flex-wrap">
            <span className="tech-badge">React</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">React Router</span>
            <span className="tech-badge">Context API</span>
            <span className="tech-badge">JSON Server</span>
          </div>
        </div>

        <a
          href={link}
          className="text-blue-400 hover:text-blue-300 transition view-details"
          data-id={id}
        >
          View Details →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
