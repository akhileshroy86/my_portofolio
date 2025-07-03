"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// Define navigation items with section links
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutMe" },
  { name: "Projects", href: "/projects" },
  { name: "Let's Talk", href: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const NavLink = ({ item }: { item: { name: string; href: string } }) => (
    <a
      href={item.href}
    
      onClick={() => setOpen(false)} // Close mobile menu on click
    >
      <span className="absolute inset-0 rounded-full p-[1px] bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f6_0%,#9333ea_50%,#3b82f6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <span className="relative z-10 px-4 py-1 bg-black/30 rounded-full backdrop-blur-md group-hover:text-white/90">
        {item.name}
      </span>
    </a>
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-white tracking-wider">
            <span className="text-blue-400">Devarashetty</span> Akhilesh
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 backdrop-blur-xl border-t border-white/10 space-y-3">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default NavBar;
