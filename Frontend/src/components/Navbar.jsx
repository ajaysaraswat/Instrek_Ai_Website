import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Strengths", href: "#strengths" },
    { name: "Contact", href: "#contact" },
  ];

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Function to handle smooth scrolling
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId.substring(1));
    if (element) {
      // Get the position of the element relative to the viewport
      const yOffset = -80; // Adjust this value based on your navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Scroll to the calculated position
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle mobile and desktop navigation
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    // Extract ID without the #
    const sectionId = href;
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <span className="text-2xl font-bold text-primary-600">
                Instrek
              </span>
            </motion.div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-black px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full text-black px-6 py-2 rounded-full hover:bg-primary-700 hover:text-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
