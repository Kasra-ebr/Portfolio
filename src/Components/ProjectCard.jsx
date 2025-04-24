// ProjectCard.js
import React from 'react';
import './../App.css'; 
const ProjectCard = ({ image, category, title, description, price, link, id }) => {
  return (
    <div className="project-card bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition ">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 flex flex-col justify-end p-6 transition duration-300 transform translate-y-4">
          <div className="flex justify-between items-center">
            <span className={`bg-${category}-500 text-white text-xs px-2 py-1 rounded`}>{category}</span>
            <div className="flex space-x-2">
              <button className="like-btn text-white hover:text-red-500 transition" data-id={id}>
                <i className="far fa-heart"></i>
              </button>
              <button className="add-to-cart bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition" data-id={id}>
                <i className="fas fa-cart-plus mr-1"></i> ${price}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href={link} className="text-blue-400 hover:text-blue-300 transition view-details" data-id={id}>View Details →</a>
      </div>
    </div>
  );
};

export default ProjectCard;
