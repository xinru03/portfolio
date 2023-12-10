import dynamic from 'next/dynamic';
import React from 'react';
import Projects from '../components/Project';

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
        <main>
        <HeroSection />
        <Projects />
        </main>
    </div>
  );
}