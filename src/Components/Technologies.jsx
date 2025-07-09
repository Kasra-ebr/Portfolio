import React from "react";
import { technologies } from "../data/TechList";

function Technologies() {
  return (
    <section id="technologies" className="py-20 text-gray-100 bg-gray-900">
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
          {technologies?.map(({ name, src }) => (
            <TechCard key={name} name={name} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ name, src }) {
  return (
    <div className="tech-icon bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
      <img src={src} alt={name} className="w-12 h-12 mb-3" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
export default Technologies;
