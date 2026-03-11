import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData, projectsData } from '../data';
import { ArrowRight, TrendingUp, Sparkles, BookOpen, ExternalLink, Terminal, Cpu, PenTool, BarChart, Twitter, Code, X, Monitor, Activity } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const parseViewCount = (value: string): number => {
  const cleaned = value.replace(/,/g, '').trim();
  if (cleaned.endsWith('K')) {
    return parseFloat(cleaned.slice(0, -1)) * 1000;
  } else if (cleaned.endsWith('M')) {
    return parseFloat(cleaned.slice(0, -1)) * 1000000;
  }
  return parseFloat(cleaned) || 0;
};

const Home: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  );
  const { theme } = useTheme();
  const magneticCtaRef = useRef<HTMLDivElement>(null);

  const sonarColor = theme === 'dark' ? 'var(--accent)' : 'black';
  const sonarBorder = theme === 'dark' ? 'border-accent/60' : 'border-black/50';
  const sonarSweep = theme === 'dark' ? 'via-accent' : 'via-black';
  const sonarGrid = theme === 'dark' ? 'border-accent/10' : 'border-black/10';

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const allTweets = portfolioData.filter(item => item.type === 'tweet');
  const sortedByViews = [...allTweets].sort((a, b) => {
    const aViews = a.metrics?.find(m => m.label === 'Views')?.value || '0';
    const bViews = b.metrics?.find(m => m.label === 'Views')?.value || '0';
    return parseViewCount(bViews) - parseViewCount(aViews);
  });

  const topSignal = sortedByViews.slice(0, 6);
  const analyticalPosts = sortedByViews.slice(6, 12);
  const mediumResearch = portfolioData.filter(item => item.type === 'article').slice(0, 3);
  const featuredProjects = projectsData.filter(item => item.featured).slice(0, 3);

  useGSAP(() => {
    // ── MOBILE: skip all GSAP, just make hidden elements visible ──
    if (isMobile) {
      gsap.set(
        '.sidebar-text-cont, .hero-headline-line, .hero-subtitle, .role-tag, .architect-card, .telemetry-shard',
        { visibility: 'visible', opacity: 1, x: 0, y: 0, yPercent: 0, scale: 1, rotation: 0, clearProps: 'transform' }
      );
      return; // no animations, no ScrollTriggers, no pinning
    }

    // ── DESKTOP: full GSAP experience ──

    // 1. Initial Page Load Animations
    gsap.set('.sidebar-text-cont', { opacity: 0, y: 50, visibility: 'visible' });
    gsap.set('.hero-reveal-line span', { yPercent: 100 });
    gsap.set('.hero-subtitle-box', { opacity: 0, y: 30 });
    gsap.set('.hero-label', { opacity: 0, x: -20 });
    gsap.set('.hero-massive-bg', { opacity: 0, y: 300, scale: 0.8 });
    gsap.set('.floating-reel-card', { opacity: 0, x: -600, rotation: -15 });

    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => {
        // Re-enable scroll if it was locked (optional, depends on if we add a loader)
      }
    });

    tl.to('.hero-reveal-line span', {
      yPercent: 0,
      duration: 1.8,
      stagger: 0.1,
    }, 0.5);

    tl.to('.floating-reel-card', {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: 2,
      ease: 'expo.out'
    }, 1.2);

    tl.to('.hero-label, .hero-subtitle-box', {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      stagger: 0.1,
    }, 1.5);

    tl.to('.sidebar-text-cont',
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
      1.8
    );

    // GOLF text: Glides up quickly as soon as scroll begins
    gsap.fromTo('.hero-massive-bg',
      { opacity: 0, y: 150 },
      {
        y: 0,
        scale: 1,
        opacity: 0.9,
        scrollTrigger: {
          trigger: '#hero-section',
          start: '5% top', // Start shortly after scroll begins
          end: '60% top', // Reach full state quickly
          scrub: 0.6,
        }
      }
    );

    // Reel Card Exit: We use a separate tween that starts AFTER the entrance, or use overwrite: 'auto'
    // To ensure it comes back, we use fromTo so it always knows its 'center' state
    gsap.fromTo('.floating-reel-card',
      { x: 0, rotation: 0, opacity: 1 },
      {
        x: -500,
        rotation: -20,
        opacity: 0.2,
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
          immediateRender: false, // CRITICAL: Only start controlling after entrance timeline
        }
      }
    );

    gsap.to('.hero-content-inner', {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: '50% top',
        scrub: 0.6,
      }
    });

    // 2. HORIZONTAL SCROLL FOR DEV PORTFOLIO
    const devTrack = document.querySelector('.dev-track') as HTMLElement;
    if (devTrack) {
      gsap.to(devTrack, {
        x: () => -(devTrack.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '#dev-portfolio',
          pin: true,
          scrub: 0.6,
          start: 'top top',
          end: () => `+=${devTrack.scrollWidth - window.innerWidth + 80}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });
    }

    // 3. HORIZONTAL SCROLL FOR TOP SIGNAL
    const signalTrack = document.querySelector('.signal-track') as HTMLElement;
    if (signalTrack) {
      gsap.to(signalTrack, {
        x: () => -(signalTrack.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '#top-signal',
          pin: true,
          scrub: 0.6,
          start: 'top top',
          end: () => `+=${signalTrack.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });
    }

    // 4. ANALYTICAL SECTION (Pin bottom bottom — minimal extra scroll)
    ScrollTrigger.create({
      trigger: '#analytical-section',
      start: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    // GPU acceleration hints for high-frequency elements
    gsap.set('.dev-track, .signal-track, .hero-massive-bg', { willChange: 'transform' });

    // 5. MEDIUM SECTION (Slide-in immediately after analytical unpins)
    gsap.fromTo('#medium-section',
      { yPercent: 30 },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#medium-section',
          start: 'top bottom',
          end: 'top 15%', // Stop earlier so the "MEDIUM RESEARCH" text remains perfectly framed mid-screen
          scrub: 0.6, // Weighted response for silky smooth control
          snap: {
            snapTo: [0, 1],
            duration: { min: 1.0, max: 2.0 }, // Smooth, controlled glide
            delay: 0.15, // Tiny wait before taking over
            ease: 'sine.inOut' // Very gentle, consistent movement
          },
          invalidateOnRefresh: true,
        }
      }
    );

    // 5. MAGNETIC CTA EFFECT
    const mBtn = magneticCtaRef.current;
    if (mBtn && !isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = mBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Influence area (pixels)
        if (Math.abs(distanceX) < 200 && Math.abs(distanceY) < 200) {
          gsap.to(mBtn, {
            x: distanceX * 0.25,
            y: distanceY * 0.25,
            duration: 0.4,
            ease: 'power2.out',
          });
        } else {
          gsap.to(mBtn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)',
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }

  }, { scope: container, dependencies: [isMobile] });

  return (
    <div ref={container} className="relative min-h-screen">

      {/* Cinematic Sidebar Text */}
      <div className="absolute left-6 top-0 bottom-0 items-center z-50 pointer-events-none hidden xl:flex" aria-hidden="true">
        <div className="sidebar-text-cont rotate-180 pointer-events-auto" style={{ writingMode: 'vertical-rl', visibility: 'hidden' }}>
          <span className="text-[10px] font-black tracking-[0.4em] text-text-secondary uppercase hover:text-accent transition-colors cursor-pointer">
            GOLFWANG0X // SYSTEMS ONLINE
          </span>
        </div>
      </div>

      <div className="absolute right-6 top-0 bottom-0 items-center z-50 pointer-events-none hidden xl:flex" aria-hidden="true">
        <div className="sidebar-text-cont pointer-events-auto" style={{ writingMode: 'vertical-rl', visibility: 'hidden' }}>
          <span className="text-[10px] font-black tracking-[0.4em] text-text-secondary uppercase hover:text-accent transition-colors cursor-pointer">
            GOLFWANG0X // EST. 2023
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero-section" className="relative h-[100vh] flex flex-col justify-between px-6 xl:px-32 pt-32 pb-6 md:pb-12 z-10 bg-bg-primary overflow-hidden">

        {/* Sonar / Radar SVG Background */}
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.1]"
            style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${sonarColor} 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl max-h-4xl flex items-center justify-center">
              {/* Sonar Rings - Very Visible */}
              <div className={`absolute w-[20%] aspect-square rounded-full border ${sonarBorder} animate-sonar shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]`} style={{ animationDelay: '0s' }}></div>
              <div className={`absolute w-[40%] aspect-square rounded-full border ${sonarBorder} animate-sonar shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]`} style={{ animationDelay: '1s' }}></div>
              <div className={`absolute w-[60%] aspect-square rounded-full border ${sonarBorder} animate-sonar shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]`} style={{ animationDelay: '2s' }}></div>
              <div className={`absolute w-[80%] aspect-square rounded-full border ${sonarBorder} animate-sonar shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]`} style={{ animationDelay: '3s' }}></div>

              {/* Radar Sweep - Bright & Sharp */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <div className={`w-[80%] h-[2px] bg-gradient-to-r from-transparent ${sonarSweep} to-transparent animate-radar-sweep shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]`}></div>
              </div>

              {/* Grid Lines */}
              <div className={`absolute inset-0 border-x ${sonarGrid}`}></div>
              <div className={`absolute inset-0 border-y ${sonarGrid}`}></div>
            </div>
          </div>
          {/* Subtle Gradient Overlays */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent"></div>
        </div>

        {/* Hero Top Content */}
        <div className="hero-content-inner relative z-20 w-full flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col space-y-1 md:space-y-2">
            <div className="hero-label flex items-center space-x-2">
              <span className="text-[10px] md:text-[11px] font-black text-accent tracking-[0.4em] uppercase">(01)</span>
              <span className="h-[1px] w-8 md:w-12 bg-text-muted opacity-30"></span>
              <span className="text-[10px] md:text-[12px] font-black text-text-muted tracking-[0.4em] uppercase">Software Engineer</span>
            </div>
            <div className="hero-label flex items-center space-x-2">
              <span className="text-[10px] md:text-[11px] font-black text-accent tracking-[0.4em] uppercase">(02)</span>
              <span className="h-[1px] w-8 md:w-12 bg-text-muted opacity-30"></span>
              <span className="text-[10px] md:text-[12px] font-black text-text-muted tracking-[0.4em] uppercase">Blockchain Developer</span>
            </div>
            <div className="hero-label flex items-center space-x-2">
              <span className="text-[10px] md:text-[11px] font-black text-accent tracking-[0.4em] uppercase">(03)</span>
              <span className="h-[1px] w-8 md:w-12 bg-text-muted opacity-30"></span>
              <span className="text-[10px] md:text-[12px] font-black text-text-muted tracking-[0.4em] uppercase">Technical Writer</span>
            </div>
            <div className="hero-label flex items-center space-x-2">
              <span className="text-[10px] md:text-[11px] font-black text-accent tracking-[0.4em] uppercase">(04)</span>
              <span className="h-[1px] w-8 md:w-12 bg-text-muted opacity-30"></span>
              <span className="text-[10px] md:text-[12px] font-black text-text-muted tracking-[0.4em] uppercase">Engineer</span>
            </div>
          </div>

          <div className="hero-subtitle-box max-w-xl self-end mt-12 md:mt-0">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter uppercase hero-reveal-line overflow-hidden">
              <span className="block">Channeling Creativity</span>
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter uppercase hero-reveal-line overflow-hidden">
              <span className="block">& Passion Through My</span>
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter uppercase hero-reveal-line overflow-hidden">
              <span className="block text-accent">Web Dev & Technical Writing.</span>
            </h2>
          </div>
        </div>

        {/* Floating Play Reel Card */}
        <div className="floating-reel-card absolute left-6 md:left-32 bottom-[10%] md:bottom-[15%] w-[190px] md:w-[340px] z-30 group cursor-pointer">
          <div className="relative aspect-[3/4] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-glass-border shadow-2xl glass transition-transform duration-700 group-hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
              alt="Play Showreel"
              fetchPriority="high"
              width="800"
              height="1067"
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-1">Play Reel</p>
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">(00:33)</p>
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-xl group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="hero-massive-bg absolute bottom-[-10%] md:bottom-[-20%] left-0 w-full z-10 pointer-events-none select-none opacity-0" aria-hidden="true">
          <h1 className="text-[25vw] md:text-[35vw] font-black italic leading-[0.7] tracking-[-0.08em] text-text-primary uppercase flex justify-center translate-y-[20%]">
            GOLF
          </h1>
        </div>

        {/* Premium Magnetic CTA */}
        <div ref={magneticCtaRef} className="absolute right-6 md:right-32 bottom-12 z-30">
          <Link to="/about" className="group flex flex-col items-end">
            <div className="flex items-center space-x-3 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.5em]">AVAILABILITY: Q2 2026_OPEN</span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-end">
                <span className="text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-2 font-mono">INITIATE_BUILD</span>
                <span className="text-2xl md:text-3xl font-black text-text-primary uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">WORK WITH US.</span>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-glass-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-2xl relative overflow-hidden group-hover:scale-110">
                <div className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full"></div>
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-text-primary group-hover:text-bg-primary relative z-10 group-hover:rotate-[-45deg] transition-transform duration-500" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* HORIZONTAL SECTION 1: DEV PORTFOLIO */}
      <section id="dev-portfolio" className={`w-full relative z-20 bg-bg-primary border-t border-glass-border ${isMobile ? 'min-h-fit py-24' : 'h-[100svh] min-h-[800px]'}`}>
        <div className={`dev-wrapper w-full relative flex flex-col ${isMobile ? '' : 'h-full overflow-clip justify-center pt-24 pb-12'}`}>
          <div className={`w-full px-6 xl:px-32 z-40 shrink-0 ${isMobile ? 'mb-6' : 'mb-10 xl:mb-16'}`}>
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[11px] font-black text-text-muted tracking-[0.5em] uppercase">Visual Interfaces</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">Dev <br /><span className="text-text-faint">Portfolio.</span></h2>
              </div>
              <Link to="/projects" className="hidden md:flex items-center px-8 py-4 rounded-full border border-glass-border text-[11px] font-black text-text-muted hover:text-text-primary hover:border-accent/50 transition-all uppercase tracking-[0.3em] group backdrop-blur-md">
                ALL PROJECTS <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform text-accent" />
              </Link>
            </div>
          </div>

          <div className={`dev-track px-6 xl:px-32 ${isMobile ? 'flex flex-col gap-6 w-full' : 'flex gap-8 w-max min-w-full items-stretch pl-6 xl:pl-32 py-4'}`}>
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`group relative flex flex-col ${isMobile ? 'w-full' : 'w-[80vw] md:w-[42vw] lg:w-[40vw] max-w-[800px] shrink-0'}`}
              >
                <div className="glass overflow-hidden rounded-[2.5rem] border border-glass-border hover-card flex flex-col justify-between relative h-[65vh] md:h-full md:min-h-[560px]">

                  <div className="flex-1 md:flex-none md:h-[350px] xl:h-[380px] 2xl:flex-1 2xl:h-auto overflow-hidden relative shrink-0 bg-[#0a0a0a] w-full">
                    {project.demoUrl ? (
                      <div
                        className="w-full h-full cursor-pointer relative"
                        onClick={() => setActiveDemo(activeDemo === project.id ? null : (project.id || null))}
                      >
                        {activeDemo === project.id && !isMobile ? (
                          <div className="w-full h-full relative group/iframe">
                            <iframe
                              src={project.demoUrl}
                              title={project.title}
                              className="w-[200%] h-[200%] origin-top-left scale-[0.5] transition-transform duration-1000 border-none relative z-10"
                            />
                            {/* Close Button Overlay */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveDemo(null);
                              }}
                              className="absolute top-6 right-6 z-50 bg-bg-primary/90 hover:bg-accent hover:text-bg-primary text-accent border border-accent/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center space-x-2 transition-all shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]"
                            >
                              <X className="w-3 h-3" />
                              <span>Exit Interface</span>
                            </button>
                            {/* Active Scanline Overlay */}
                            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-10">
                              <div className="w-full h-[2px] bg-accent/30 animate-scanline"></div>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full border-beam-container group/launcher">
                            {/* The Revolving Beam */}
                            <div className="border-beam"></div>
                            {/* Inner Mask/Content Wrapper */}
                            <div className="border-beam-mask flex flex-col items-center justify-center p-8 overflow-hidden">
                              {/* Backgrid Pattern */}
                              <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                              <div className="relative z-10 flex flex-col items-center">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-zinc-800 flex items-center justify-center mb-6 group-hover/launcher:border-accent/40 group-hover/launcher:scale-110 transition-all duration-700 bg-zinc-900/50 relative">
                                  <Activity className="w-8 h-8 md:w-12 md:h-12 text-zinc-500 group-hover/launcher:text-accent transition-colors" />
                                  <div className="absolute inset-0 rounded-full border border-accent/0 group-hover/launcher:border-accent/20 animate-ping opacity-0 group-hover/launcher:opacity-100"></div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-zinc-100 tracking-tighter uppercase mb-2 group-hover/launcher:text-accent transition-colors text-center px-4">
                                  {project.title}
                                </h3>

                                <div className="flex items-center space-x-3">
                                  <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                                  </div>
                                  <span className="text-[10px] md:text-[11px] font-black text-accent uppercase tracking-[0.4em] font-mono group-hover/launcher:text-white transition-colors">
                                    CLICK_TO_INITIATE_PREVIEW_
                                  </span>
                                </div>
                              </div>

                              {/* Corner Accents */}
                              <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/10 group-hover/launcher:border-accent/30 transition-colors"></div>
                              <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/10 group-hover/launcher:border-accent/30 transition-colors"></div>
                              <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/10 group-hover/launcher:border-accent/30 transition-colors"></div>
                              <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/10 group-hover/launcher:border-accent/30 transition-colors"></div>

                              {/* Telemetry data overlay */}
                              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-12 flex justify-between opacity-0 group-hover/launcher:opacity-100 transition-opacity duration-500">
                                <span className="text-[8px] font-mono text-zinc-600 uppercase">SYS.STATUS: RDY</span>
                                <span className="text-[8px] font-mono text-zinc-600 uppercase">ID: {project.id?.split('-').pop()}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] relative overflow-hidden px-8 text-center">
                        <Monitor className="w-12 h-12 text-text-faint mb-4 opacity-50" />
                        <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] font-mono mb-2">Internal_Interface</span>
                        <h3 className="text-lg font-black text-text-secondary uppercase tracking-tight">{project.title}</h3>
                      </div>
                    )}
                  </div>

                  <Link to="/projects" className="px-6 py-4 md:px-8 md:py-6 flex flex-col justify-end flex-initial md:flex-1 2xl:hidden bg-bg-primary/40 backdrop-blur-sm z-10 border-t border-glass-border">
                    <div className="flex flex-col justify-center h-full">
                      <div className="flex items-center space-x-4 mb-3 md:mb-4 flex-wrap">
                        {project.techStack.map(tech => (
                          <span key={tech} className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-accent/80 bg-accent/5 px-2 py-1 rounded-sm border border-accent/10 mb-1">{tech}</span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-3xl font-black group-hover:text-accent transition-colors leading-[1.1] tracking-tighter uppercase text-left">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-sm md:text-base line-clamp-3 leading-relaxed mt-2 md:mt-3 font-medium tracking-tight text-left">
                        {project.excerpt}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZONTAL SECTION 2: TOP SIGNAL */}
      <section id="top-signal" className={`w-full relative z-30 bg-bg-primary border-t border-glass-border ${isMobile ? 'min-h-fit py-24' : 'h-[100svh] min-h-[800px]'}`}>
        <div className={`signal-wrapper w-full relative flex flex-col ${isMobile ? '' : 'h-full overflow-clip justify-center pt-24 pb-12'}`}>
          <div className={`w-full px-6 xl:px-32 z-40 shrink-0 ${isMobile ? 'mb-6' : 'mb-10 xl:mb-16'}`}>
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[11px] font-black text-text-muted tracking-[0.4em] uppercase">High Performance Feed</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">Top Signal <br /><span className="text-text-faint">Archive.</span></h2>
              </div>
              <Link to="/tweets" className="hidden md:flex items-center px-8 py-4 rounded-full border border-glass-border text-[11px] font-black text-text-muted hover:text-text-primary hover:border-accent/50 transition-all uppercase tracking-[0.3em] group backdrop-blur-md">
                ALL TRANSMISSIONS <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform text-accent" />
              </Link>
            </div>
          </div>

          <div className={`signal-track px-6 xl:px-32 ${isMobile ? 'flex flex-col gap-6 w-full' : 'flex gap-8 w-max min-w-full items-stretch pl-6 xl:pl-32 py-4'}`}>
            {topSignal.map((tweet, idx) => (
              <Link
                key={tweet.id}
                to={`/content/${tweet.id}`}
                className={`group relative flex flex-col ${isMobile ? 'w-full' : 'w-[85vw] md:w-[40vw] lg:w-[28vw] max-w-[550px] shrink-0'}`}
              >
                <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-glass-border hover-card h-full flex flex-col justify-between overflow-hidden relative min-h-[450px]">
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-5xl md:text-6xl font-black text-accent/10 group-hover:text-accent transition-all duration-500">
                        0{idx + 1}
                      </span>
                      <TrendingUp className="w-6 h-6 text-text-muted group-hover:text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6 group-hover:text-accent transition-colors leading-[1.1] tracking-tighter uppercase line-clamp-3">
                      {tweet.title}
                    </h3>
                    <p className="text-text-muted mb-8 line-clamp-4 text-sm md:text-base leading-relaxed font-medium tracking-tight">
                      {tweet.excerpt}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 mt-auto border-t border-glass-border">
                    {['Views', 'Likes', 'Replies'].map((label, i) => {
                      const metric = tweet.metrics?.find(m => m.label === label);
                      return metric ? (
                        <div key={i}>
                          <p className="text-[9px] uppercase tracking-[0.2em] text-text-faint mb-2 font-black truncate">{metric.label}</p>
                          <p className="text-xl font-black text-text-secondary group-hover:text-text-primary transition-colors tracking-tighter">{metric.value}</p>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STACKED PANEL 3: ANALYTICAL POSTS */}
      <section id="analytical-section" className="stacked-panel px-6 xl:px-32 pt-24 pb-0 xl:pt-32 xl:pb-0 border-t border-glass-border bg-bg-primary shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex flex-col">
          <div className="panel-header mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-[2px] bg-accent"></div>
              <span className="text-[11px] font-black text-text-muted tracking-[0.5em] uppercase">Intelligence Ledger</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">Analytical <br /><span className="text-text-faint">Breakdowns.</span></h2>
          </div>

          <div className="flex flex-col">
            {analyticalPosts.map((post, idx) => (
              <Link
                key={post.id}
                to={`/content/${post.id}`}
                className="panel-item group flex flex-col md:flex-row items-center justify-between p-6 md:p-10 border-b border-glass-border hover:bg-bg-secondary/20 transition-all relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-500 shadow-[0_0_20px_var(--accent)]"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                  <span className="text-[11px] font-black text-text-faint tracking-[0.4em] uppercase mb-6 md:mb-0 md:mr-20 lg:mr-32 shrink-0 font-mono">
                    LOG.TYPE / GT-{idx + 1}
                  </span>
                  <div className="max-w-4xl">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-text-primary group-hover:text-accent transition-all tracking-tighter mb-3 md:mb-4 leading-tight uppercase">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-sm md:text-lg font-medium tracking-tight leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="mt-12 md:mt-0 flex items-center space-x-4 text-[11px] font-black tracking-[0.4em] uppercase text-text-faint group-hover:text-text-primary transition-colors">
                  <span>DECODE_SIGNAL</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform text-accent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STACKED PANEL 4: MEDIUM RESEARCH */}
      <section id="medium-section" className="stacked-panel px-6 xl:px-32 py-24 xl:py-32 border-t border-glass-border bg-bg-primary flex flex-col shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col">
          <div className="panel-header flex justify-between items-end mb-20">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <span className="text-[11px] font-black text-text-muted tracking-[0.5em] uppercase">Deep Intelligence</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">Medium <br /><span className="text-text-faint">Research.</span></h2>
            </div>
            <Link to="/research" className="flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full border border-glass-border text-[10px] md:text-[11px] font-black text-text-muted hover:text-text-primary hover:border-accent/50 transition-all uppercase tracking-[0.3em] group backdrop-blur-md">
              VIEW ARCHIVE <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform text-accent" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
            {mediumResearch.map((article, idx) => (
              <Link
                key={article.id}
                to={`/content/${article.id}`}
                className="panel-item group relative flex flex-col h-full overflow-hidden rounded-[3rem] glass border border-glass-border hover:border-accent/40 transition-all duration-700 hover:shadow-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden relative shrink-0">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    width="1600"
                    height="1000"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent"></div>
                </div>

                <div className="p-6 md:p-12 flex flex-col justify-between flex-1 relative z-10">
                  <div>
                    <div className="flex items-center space-x-5 mb-8">
                      {article.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80 bg-accent/5 px-3 py-1 rounded-sm border border-accent/10">#{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-3xl font-black group-hover:text-accent transition-colors leading-tight md:leading-[1.1] tracking-tight mb-4 md:mb-6 uppercase">
                      {article.title}
                    </h3>
                    <p className="text-text-muted text-sm md:text-lg line-clamp-2 leading-relaxed mb-6 md:mb-8 font-medium tracking-tight">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-glass-border mt-auto">
                    <div className="flex items-center space-x-6 md:space-x-10">
                      {article.metrics?.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <p className="text-[9px] uppercase tracking-[0.3em] text-text-faint font-black mb-2">{m.label}</p>
                          <p className="text-2xl font-black text-text-secondary">{m.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="w-14 h-14 rounded-full border border-glass-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all shadow-xl">
                      <ExternalLink className="w-6 h-6 text-text-faint group-hover:text-bg-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL NOT PINNED SECTION: CONTACT */}
      <section className="px-6 xl:px-32 py-32 md:py-48 relative overflow-hidden border-t border-glass-border bg-bg-primary z-[60]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-12 animate-pulse">
            SYSTEMS ONLINE / OPEN_FOR_OPS
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-black tracking-tighter mb-12 md:mb-16 leading-[0.8] uppercase">
            Start the <br /> <span className="text-accent drop-shadow-[0_0_50px_rgba(var(--accent-rgb),0.4)]">Transmission.</span>
          </h2>
          <p className="text-text-muted mb-16 md:mb-24 text-2xl md:text-4xl font-medium max-w-3xl mx-auto leading-tight italic tracking-tighter">
            "The best way to predict the future is to encode it."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12">
            <a href="mailto:contact@golfwang0x.xyz" target="_blank" rel="noopener noreferrer" className="px-16 md:px-20 py-7 md:py-9 bg-accent text-bg-primary font-black rounded-[2rem] hover:scale-105 transition-all uppercase tracking-[0.3em] text-xs shadow-[0_0_50px_rgba(var(--accent-rgb),0.3)] text-center">
              ESTABLISH CONNECTION
            </a>
            <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="px-16 md:px-20 py-7 md:py-9 glass border border-glass-border text-text-primary font-black rounded-[2rem] hover:bg-glass-bg transition-all uppercase tracking-[0.3em] text-xs text-center backdrop-blur-md">
              FOLLOW_FEED
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
