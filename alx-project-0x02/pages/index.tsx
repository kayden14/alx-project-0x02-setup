// pages/index.tsx
import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Next.js setup project for ALX" />
      </Head>
      <main>
        <Header />
        <section className="p-4 text-center">
          <h1 className="text-3xl font-bold">Hello, welcome to my ALX Project 2!</h1>
        </section>
      </main>
    </>
  );
}
