
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Gameplay from './pages/Gameplay';
import Characters from './pages/Characters';
import Community from './pages/Community';
import News from './pages/News';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading time for cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8 seconds matches the feel of the loading bar animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-slate-200 overflow-hidden selection:bg-oneirism-orange selection:text-white">
      {/* Loading Screen Overlay */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Background - Persist to prevent re-render glitches */}
      <AnimatedBackground />

      {/* Main Content - Only mounts after loading to trigger 'enter' animations correctly */}
      {!isLoading && (
        <>
          <Navbar />
          <ScrollToTop />
          
          <main className="flex-grow relative z-10 pt-20">
            <AnimatePresence mode='wait'>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gameplay" element={<Gameplay />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/community" element={<Community />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
