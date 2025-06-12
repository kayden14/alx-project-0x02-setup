// pages/home.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal, { Post } from "@/components/common/PostModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { title: "First Card", content: "This is the content of the first card." },
    { title: "Second Card", content: "Here’s some more content in another card." },
    { title: "Third Card", content: "Cards are reusable and styled with Tailwind CSS!" },
  ]);

  const handleAddPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Welcome to the Home Page
          </h1>

          <div className="text-center mb-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Post
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>
        </div>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
};

export default HomePage;
