
import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Twitter, MessageSquare, ArrowUpRight, Menu, X, Send, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const brandRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (brandRef.current) {
      const chars = brandRef.current.querySelectorAll('.char');
      gsap.fromTo(chars,
        { y: '100%' },
        {
          y: '0%',
          duration: 1,
          stagger: 0.02,
          ease: "power4.out",
          delay: 0.2
        }
      );
    }
  }, []);

  const isActive = (path: string) => pathname === path ? "text-accent" : "hover:text-text-primary";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-3 md:px-32 glass border-b border-glass-border">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <img src="/favicon.svg" alt="" className="w-8 h-8 rounded-lg group-hover:scale-110 transition-transform hidden lg:block" />
          <span ref={brandRef} className="font-black tracking-[-0.1em] text-2xl text-text-primary uppercase flex overflow-hidden py-1">
            {"GOLFWANG0X".split("").map((char, i) => (
              <span key={i} className="char inline-block translate-y-full">{char === " " ? "\u00A0" : char}</span>
            ))}
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-12 text-[12px] font-black tracking-[0.4em] text-text-muted uppercase">
          <Link to="/projects" className={`transition-colors py-2 ${isActive('/projects')}`}>Work</Link>
          <Link to="/research" className={`transition-colors py-2 ${isActive('/research')}`}>Research</Link>
          <Link to="/tweets" className={`transition-colors py-2 ${isActive('/tweets')}`}>Tweets</Link>
          <Link to="/about" className={`transition-colors py-2 ${isActive('/about')}`}>About</Link>

          <div className="flex items-center space-x-8 pl-8 border-l border-glass-border">
            <a href="mailto:golfwang0x@gmail.com" className="text-text-primary hover:text-accent transition-colors underline decoration-2 underline-offset-8 decoration-accent py-2">
              Start a project
            </a>
            <button
              onClick={toggleTheme}
              className="transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-accent" aria-hidden="true" /> : <Moon className="w-4 h-4 text-text-primary" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-glass-bg border border-glass-border"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-accent" aria-hidden="true" /> : <Moon className="w-4 h-4 text-text-primary" aria-hidden="true" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full p-8 flex flex-col space-y-6 md:hidden bg-bg-secondary border-b border-glass-border text-text-primary font-black tracking-[0.1em] text-sm">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors p-2">HOME</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors p-2">WORK</Link>
          <Link to="/research" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors p-2">RESEARCH</Link>
          <Link to="/tweets" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors p-2">TWEETS</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors p-2">ABOUT</Link>
          <a href="mailto:golfwang0x@gmail.com" onClick={() => setIsOpen(false)} className="text-accent underline p-2">START A PROJECT</a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="relative py-24 px-6 border-t border-glass-border bg-bg-secondary overflow-hidden">
      {/* Top Section: Navigation Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img src="/favicon.svg" alt="" className="w-10 h-10 rounded-xl" />
            <h3 className="text-2xl font-black tracking-tighter text-text-primary">GOLFWANG0X</h3>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
            Pushing the boundaries of web development, research, and technical strategy.
            Smart insights. Seamless experiences.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/10 transition-colors text-text-secondary hover:text-accent">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/mishdgr8" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/10 transition-colors text-text-secondary hover:text-accent">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://t.me/mishdgr8" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/10 transition-colors text-text-secondary hover:text-accent">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-accent">NAVIGATE</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="text-text-secondary hover:text-accent transition-colors">HOME</Link></li>
            <li><Link to="/projects" className="text-text-secondary hover:text-accent transition-colors">WORK</Link></li>
            <li><Link to="/research" className="text-text-secondary hover:text-accent transition-colors">RESEARCH</Link></li>
            <li><Link to="/about" className="text-text-secondary hover:text-accent transition-colors">ABOUT</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-accent">OFFERINGS</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="text-text-secondary">WEB DEVELOPMENT</li>
            <li className="text-text-secondary">UI/UX DESIGN</li>
            <li className="text-text-secondary">CONTENT STRATEGY</li>
            <li className="text-text-secondary">WEB3 CONSULTING</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-accent">ENQUIRIES</h4>
          <p className="text-sm text-text-secondary mb-4 font-medium">Have an ambitious project in mind?</p>
          <a href="mailto:golfwang0x@gmail.com" className="text-lg font-bold text-text-primary hover:text-accent transition-colors block">
            golfwang0x@gmail.com
          </a>
          <p className="text-xs text-text-muted mt-4 uppercase">© 2026 GOLFWANG0X STUDIO</p>
        </div>
      </div>

      {/* Massive Brand Footer Decoration */}
      <div className="w-full border-t border-glass-border pt-12 overflow-hidden" aria-hidden="true">
        <h2 className={`text-huge text-center uppercase tracking-tighter transition-all duration-700 select-none ${theme === 'dark' ? 'text-white/5' : 'text-black/5'}`}>
          GOLFWANG0X
        </h2>
      </div>

      {/* Bottom Minimal Bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] text-text-muted">
        <p className="font-semibold">MADE WITH PRECISION FOR THE OPEN WEB</p>
        <div className="flex gap-8">
          <p>EST. 2023</p>
          <p>UTC +1</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // We expect Lenis to be available via CDN script in index.html
    const Lenis = (window as any).Lenis;
    let lenis: any;

    if (Lenis && !isMobile) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      // Sync Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }

    // Scroll progress bar logic
    const updateProgress = () => {
      const bar = document.getElementById('scroll-progress');
      if (bar) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      if (lenis) {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
      }
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-full focus:font-bold">
        Skip to main content
      </a>

      {/* FIXED OVERLAYS — outside smooth wrapper so position:fixed works */}
      <div className="fixed top-0 left-0 h-[2px] bg-accent z-[100] transition-all duration-300 pointer-events-none" id="scroll-progress"></div>

      {/* GLOBAL ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=30&w=800&fm=webp"
          alt=""
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover grayscale transition-all duration-700 ${theme === 'dark' ? 'opacity-10 brightness-[0.2]' : 'opacity-[0.05] brightness-150'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/50 to-bg-primary"></div>
        <div className={`absolute top-[10%] left-[20%] w-[500px] h-[500px] blur-[120px] rounded-full transition-colors duration-700 ${theme === 'dark' ? 'bg-accent/[0.03]' : 'bg-accent/[0.08]'}`}></div>
        <div className={`absolute bottom-[20%] right-[10%] w-[600px] h-[600px] blur-[150px] rounded-full transition-colors duration-700 ${theme === 'dark' ? 'bg-accent/[0.03]' : 'bg-accent/[0.08]'}`}></div>
      </div>

      <Navbar />

      {/* SMOOTH-SCROLLED CONTENT */}
      <div id="smooth-wrapper">
        <div id="smooth-content" className="bg-bg-primary">
          <main id="main-content" className="relative z-10 outline-none">
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
      </div>
    </>
  );
}

