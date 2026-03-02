import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Search, Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Buy', href: '#' },
    { name: 'Sell', href: '#' },
    { name: 'Rent', href: '#' },
    { name: 'Financing', href: '#' },
  ];

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 w-full overflow-hidden ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3'
        : 'bg-[#eff1f1] py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="bg-primary p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <Gauge size={20} />
              </div>
              <h1 className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                Velocity <span className="text-primary">Auto</span>
              </h1>
            </motion.div>

            <nav className="hidden md:flex gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-sm font-semibold hover:text-primary transition-colors text-slate-900"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
              <input
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Search inventory..."
                type="text"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="hidden sm:block bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Drive Your Way
            </motion.button>

            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer">
              <img
                alt="User Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZgB9ffXnxMVvwDA_dAT6JylDs65CPBGaABVWwUUbqV3ZcUGhYkLHb8-B9VtkUHxKu-E1I2OGOuUUMuXoM84hLDnLh3-6ild-W3b0c3b3ZjjzPwJ_f7eqq3BssFQgYyt67G25fWE6gUS3LYgSK7O7TWzAYdUSMIH23GwGLp-HrbFdWSstdh17_CTEb1Z2T3V2rTaz-6GeILMddtXylIbuj0hYNJHsglrlj0Mo8fB9GBbjI7Bg3gCTOE6KiMhbaxI-B9RIV_bYLkQ"
              />
            </div>

            <button
              className="md:hidden text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-bold text-slate-900 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold">
                  Drive Your Way
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
