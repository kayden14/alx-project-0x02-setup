// components/common/PostCard.tsx
import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-4">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
