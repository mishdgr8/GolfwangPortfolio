
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Twitter, MessageSquare, ArrowUpRight, Menu, X, Send, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

// Route-level code splitting — each page loads on demand
const Home = lazy(() => import('./pages/Home'));
const ContentDetail = lazy(() => import('./pages/ContentDetail'));
const Tweets = lazy(() => import('./pages/Tweets'));
const Research = lazy(() => import('./pages/Research'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path ? "text-accent" : "hover:text-text-primary";

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
          <Link to="/" className={`transition-colors ${isActive('/')}`}>HOME</Link>
          <Link to="/tweets" className={`transition-colors ${isActive('/tweets')}`}>TWEETS</Link>
          <Link to="/research" className={`transition-colors ${isActive('/research')}`}>RESEARCH</Link>
          <Link to="/projects" className={`transition-colors ${isActive('/projects')}`}>PROJECTS</Link>
          <Link to="/about" className={`transition-colors ${isActive('/about')}`}>ABOUT</Link>
          <a href="https://github.com/mishdgr8" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center">
            GITHUB <Github className="w-3 h-3 ml-1" />
          </a>
          <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center">
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
          <Link to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <a href="https://github.com/mishdgr8" target="_blank" rel="noopener noreferrer" className="flex items-center">GITHUB <Github className="w-3 h-3 ml-1" /></a>
          <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="flex items-center">X <ArrowUpRight className="w-3 h-3 ml-1" /></a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-glass-border bg-bg-secondary overflow-hidden">
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

    <div className="w-full mt-24 border-t border-glass-border pt-16">
      <h2 className="text-huge text-center uppercase tracking-tighter">GOLFWANG0X</h2>
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

    const updateProgress = () => {
      const bar = document.getElementById('scroll-progress');
      if (bar) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, [pathname]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bg-primary relative">
      <div className="fixed top-0 left-0 h-[2px] bg-accent z-[100] transition-all duration-300 pointer-events-none" id="scroll-progress"></div>

      {/* GLOBAL ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=40&w=1200&fm=webp"
          alt="Atmospheric Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-10 grayscale brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary"></div>
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent/[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-accent/[0.03] blur-[150px] rounded-full"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/content/:id" element={<ContentDetail />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
