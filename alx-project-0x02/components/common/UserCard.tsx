// components/common/UserCard.tsx
import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
// This is a user card component for a Next.js application.
// It accepts props for name, email, and address, and applies Tailwind CSS styles for layout and design.