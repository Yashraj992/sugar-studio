import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/about' },
    { title: 'Career', path: '/career' },
    { title: 'Contact', path: '/contact' }
  ];

  const getNavbarStyle = () => {
    const path = location.pathname;
    
    // Default style (for home page)
    let style = {
      bgColor: scrolled ? 'bg-black' : 'bg-transparent',
      textColor: 'text-white',
      logoColor: scrolled ? 'brightness-0 invert' : ''
    };

    // Style for specific sections
    switch (path) {
      case '/projects':
      case '/about':
      case '/career':
      case '/contact':
        style = {
          bgColor: scrolled ? 'bg-black' : 'bg-transparent',
          textColor: scrolled ? 'text-white' : 'text-black',
          logoColor: scrolled ? 'brightness-0 invert' : ''
        };
        break;
      default:
        // Home page style remains as default
        break;
    }

    return style;
  };

  const { bgColor, textColor, logoColor } = getNavbarStyle();

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 h-[100px] flex items-center ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-wider">
            <img
              src={logo}
              alt=""
              className={`img-fluid h-16 w-auto ${logoColor}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            {!showSearch && menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
                onClick={() => setIsOpen(false)}
              >
                <span className={`text-sm tracking-wider ${textColor} font-medium hover:opacity-80`}>
                  {item.title}
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-px ${scrolled ? 'bg-black' : 'bg-white'} group-hover:w-full transition-all duration-300`} />
              </Link>
            ))}
            
            {/* Search Input */}
            <div className="flex items-center">
              {showSearch && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`bg-transparent border-b ${textColor} border-current px-2 py-1 focus:outline-none`}
                />
              )}
              <button 
                onClick={handleSearchClick}
                className={`ml-4 ${textColor} font-medium`}
              >
                {showSearch ? '✕' : 'Search'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-8 h-8 focus:outline-none"
          >
            <div className="relative w-full h-full">
              <span className={`absolute w-full h-px transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-black'}
                ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
              <span className={`absolute w-full h-px transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-black'}
                ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute w-full h-px transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-black'}
                ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black z-40"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="relative group"
                    >
                      <span className="text-white font-medium hover:text-white transition-colors">
                        {item.title}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Search */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="w-3/4"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full bg-transparent border-b border-white text-white px-2 py-1 focus:outline-none"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;