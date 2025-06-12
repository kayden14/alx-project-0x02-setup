import React from "react";
import Card from "@/components/common/Card";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Welcome to the Home Page
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="First Card"
            content="This is the content of the first card."
          />
          <Card
            title="Second Card"
            content="Here’s some more content in another card."
          />
          <Card
            title="Third Card"
            content="Cards are reusable and styled with Tailwind CSS!"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
// This is a simple home page component for a Next.js application.
// It includes a header and a grid of cards, each displaying a title and content.