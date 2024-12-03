import React from 'react';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
import { BackgroundStripes } from './components/BackgroundStripes';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundStripes />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-auto p-8 bg-white/30 backdrop-blur-sm rounded-lg shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-105 animate-float">
          <Logo />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;