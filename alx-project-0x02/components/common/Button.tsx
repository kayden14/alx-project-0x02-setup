// components/common/Button.tsx
import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<string, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white hover:bg-blue-700 transition ${sizeClasses[size]} ${shape}`}
    >
      {label}
    </button>
  );
};

export default Button;
// This is a reusable button component for a Next.js application.
// It accepts props for label, size, shape, and click handler, and applies Tailwind CSS styles for layout and hover effects.