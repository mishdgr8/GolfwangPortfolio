
import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ContentDetail from './pages/ContentDetail';
import Tweets from './pages/Tweets';
import Research from './pages/Research';
import About from './pages/About';
import { Github, Twitter, MessageSquare, ArrowUpRight, Menu, X, Send, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 border-b border-glass-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform bg-text-primary">
            <div className="w-4 h-4 rounded-full bg-bg-primary"></div>
          </div>
          <span className="font-bold tracking-tighter text-xl text-text-primary">GOLFWANG0X</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-text-secondary">
          <Link to="/" className="hover:opacity-100 transition-opacity">HOME</Link>
          <Link to="/tweets" className="hover:opacity-100 transition-opacity">TWEETS</Link>
          <Link to="/research" className="hover:opacity-100 transition-opacity">RESEARCH</Link>
          <Link to="/about" className="hover:opacity-100 transition-opacity">ABOUT</Link>
          <a href="https://github.com/mishdgr8" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex items-center">
            GITHUB <Github className="w-3 h-3 ml-1" />
          </a>
          <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex items-center">
            X <ArrowUpRight className="w-3 h-3 ml-1" />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all hover:scale-110 bg-glass-bg border border-glass-border"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-text-primary" />}
          </button>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-glass-bg border border-glass-border"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-text-primary" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full p-6 flex flex-col space-y-4 md:hidden bg-bg-secondary border-b border-glass-border text-text-primary">
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/tweets" onClick={() => setIsOpen(false)}>TWEETS</Link>
          <Link to="/research" onClick={() => setIsOpen(false)}>RESEARCH</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <a href="https://github.com/mishdgr8" target="_blank" rel="noopener noreferrer" className="flex items-center">GITHUB <Github className="w-3 h-3 ml-1" /></a>
          <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="flex items-center">X <ArrowUpRight className="w-3 h-3 ml-1" /></a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-glass-border bg-bg-secondary">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h3 className="text-3xl font-black tracking-tighter mb-2 text-text-primary">GOLFWANG0X</h3>
        <p className="text-sm text-text-muted">Smart research. Seamless alpha.</p>
      </div>
      <div className="flex space-x-6">
        <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass transition-colors text-text-primary">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://github.com/mishdgr8" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass transition-colors text-text-primary">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://t.me/mishdgr8" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass transition-colors text-text-primary">
          <Send className="w-5 h-5" />
        </a>
        <a href="mailto:golfwang0x@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass transition-colors text-text-primary">
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 flex flex-col md:flex-row justify-between text-xs uppercase tracking-widest gap-4 border-t border-glass-border text-text-faint">
      <p>© 2026 GOLFWANG0X STUDIO</p>
      <p>EST. 2023 • WEB3 RESEARCHER • CONTENT STRATEGIST</p>
    </div>
  </footer>
);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bg-primary">
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
