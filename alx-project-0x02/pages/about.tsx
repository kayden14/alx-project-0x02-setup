// pages/about.tsx
import React from "react";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-black mb-6">About Us</h1>

      <div className="space-x-4">
        <Button label="Small" size="small" shape="rounded-sm" />
        <Button label="Medium" size="medium" shape="rounded-md" />
        <Button label="Large" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
// This is the About page for a Next.js application.
// It includes a title and three buttons with different sizes and shapes, styled using Tailwind CSS.