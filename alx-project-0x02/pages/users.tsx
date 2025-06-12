// pages/users.tsx
import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-black text-center mb-8">User Directory</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
};

// ✅ This must be exported from the page file
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: `${user.address.street}, ${user.address.city}`,
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
// This page fetches user data from an API and displays it using the UserCard component.
// It uses getStaticProps to fetch data at build time, ensuring fast page loads and SEO optimization.