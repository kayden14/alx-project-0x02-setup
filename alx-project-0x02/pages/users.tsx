// pages/users.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const formatted = data.map((user: any) => ({
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
      }));
      setUsers(formatted);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-black text-center mb-8">Users</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
// This code defines a Next.js page that fetches and displays user data from an API.
// It uses React hooks to manage state and side effects, and it renders a header and a grid of user cards.