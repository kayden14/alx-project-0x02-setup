import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">About</Link>
        <Link href="/about" className="hover:underline">Services</Link>
      </nav>
    </header>
  );
};

export default Header;
// This is a simple header component for a Next.js application.
// It includes navigation links to the home, about, and home pages. 