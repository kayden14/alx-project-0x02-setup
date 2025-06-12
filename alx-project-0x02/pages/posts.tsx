// pages/posts.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();
      const formatted = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-black text-center mb-8">Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsPage;
// This code defines a Next.js page that fetches and displays posts from an API.
// It uses React hooks to manage state and side effects, and it renders a header and a grid of post cards.