import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
// This is a simple card component for a Next.js application.
// It accepts a title and content as props and applies Tailwind CSS styles for layout and hover effects.