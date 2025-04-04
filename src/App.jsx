import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  // Initial loading
  useEffect(() => {
    // Random time between 5-10 seconds
    const randomTime = Math.floor(Math.random() * 5000) + 5000; // 5000-10000ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, randomTime);

    return () => clearTimeout(timer);
  }, []);

  // Handle page transitions
  useEffect(() => {
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 1000); // Show loading for 1 second during page transitions

    return () => clearTimeout(timer);
  }, [window.location.pathname]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isLoading && <Loading />}
        {isPageTransitioning && <Loading />}
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
