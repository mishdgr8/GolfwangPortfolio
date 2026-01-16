
import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ContentDetail from './pages/ContentDetail';
import Tweets from './pages/Tweets';
import Research from './pages/Research';
import About from './pages/About';
import { Github, Twitter, MessageSquare, ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform">
             <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
          <span className="font-bold tracking-tighter text-xl">GOLFWANG0X</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
          <Link to="/" className="hover:text-white transition-colors">HOME</Link>
          <Link to="/tweets" className="hover:text-white transition-colors">TWEETS</Link>
          <Link to="/research" className="hover:text-white transition-colors">RESEARCH</Link>
          <Link to="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
            GITHUB <Github className="w-3 h-3 ml-1" />
          </a>
          <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
            X <ArrowUpRight className="w-3 h-3 ml-1" />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/tweets" onClick={() => setIsOpen(false)}>TWEETS</Link>
          <Link to="/research" onClick={() => setIsOpen(false)}>RESEARCH</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">GITHUB <Github className="w-3 h-3 ml-1" /></a>
          <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="flex items-center">X <ArrowUpRight className="w-3 h-3 ml-1" /></a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h3 className="text-3xl font-black tracking-tighter mb-2">GOLFWANG0X</h3>
        <p className="text-white/40 text-sm">Smart research. Seamless alpha.</p>
      </div>
      <div className="flex space-x-6">
        <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-white/20 uppercase tracking-widest gap-4">
      <p>© 2024 GOLFWANG0X STUDIO</p>
      <p>EST. 2021 • WEB3 RESEARCHER • CONTENT STRATEGIST</p>
    </div>
  </footer>
);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/content/:id" element={<ContentDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
