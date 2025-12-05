import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Camera, ChevronDown, Sparkles, Code, FileText, Gift } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setHoveredItem(null);
  }, [location]);

  const navItems = [
    { 
      label: 'Product', 
      id: 'product',
      items: [
        { name: 'Features', desc: 'Explore what Smile can do', icon: Sparkles, href: '/features' },
        { name: 'Changelog', desc: 'Latest updates & improvements', icon: Gift, href: '/changelog' },
      ]
    },
    { 
      label: 'Resources', 
      id: 'resources',
      items: [
        { name: 'Documentation', desc: 'Detailed integration guides', icon: FileText, href: '#' },
        { name: 'Integration', desc: 'Connect with your stack', icon: Code, href: '/integration' },
      ]
    },
    { label: 'Pricing', id: 'pricing', href: '/pricing' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-gray-100' : 'py-5 bg-transparent'
      }`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 cursor-pointer group z-50">
          <div className="bg-black text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300">
            <Camera size={20} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">smile</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative px-4 py-2"
              onMouseEnter={() => setHoveredItem(item.id)}
            >
              {item.href ? (
                 <Link 
                   to={item.href}
                   className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1"
                 >
                   {item.label}
                 </Link>
              ) : (
                <button 
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${hoveredItem === item.id ? 'text-black' : 'text-gray-600'}`}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${hoveredItem === item.id ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 z-50">
          <Link to="#" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900">Log in</Link>
          <Button color="primary" size="sm" className="rounded-full">Book a demo</Button>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {hoveredItem && navItems.find(i => i.id === hoveredItem)?.items && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 pt-4"
              onMouseEnter={() => setHoveredItem(hoveredItem)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-screen-md mx-auto grid grid-cols-2 gap-6 relative z-40">
                {navItems.find(i => i.id === hoveredItem)?.items?.map((subItem) => (
                  <Link 
                    key={subItem.name} 
                    to={subItem.href}
                    className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <subItem.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        {subItem.name}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-600">→</span>
                      </div>
                      <p className="text-sm text-gray-500">{subItem.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};