import React from 'react';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}