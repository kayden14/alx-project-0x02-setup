// components/layout/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-center space-x-6">
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
        <Link href="/users" className="hover:underline">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
// This is a simple header component for a Next.js application.
// It includes navigation links to the Home, About, and Posts pages, styled using Tailwind CSS.