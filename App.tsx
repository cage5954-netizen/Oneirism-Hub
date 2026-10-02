import React, { useEffect, useRef } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gameplay from "./pages/Gameplay";
import Characters from "./pages/Characters";
import Community from "./pages/Community";
import News from "./pages/News";
import "./styles.css";
function AppContent() {
  const { pathname } = useLocation();
  const previous = useRef(pathname);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title =
      pathname === "/"
        ? "Oneirism — An exploratory experience"
        : `${pathname.slice(1).replace(/^./, (c) => c.toUpperCase())} — Oneirism`;
    if (previous.current !== pathname)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    previous.current = pathname;
  }, [pathname]);
  return (
    <MotionConfig reducedMotion="user">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/community" element={<Community />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </MotionConfig>
  );
}
export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
