import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData, projectsData } from '../data';
import { ArrowRight, TrendingUp, Sparkles, BookOpen, ExternalLink, Terminal, Cpu, PenTool, BarChart, Twitter, Code } from 'lucide-react';
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
    // 1. Initial Page Load Animations
    // Immediately set all animated elements to their "from" state via GSAP.set()
    // This prevents them from being visible in their final state before the animation runs (FOUC).
    gsap.set('.sidebar-text-cont', { opacity: 0, y: 50, visibility: 'visible' });
    gsap.set('.hero-headline-line', { yPercent: 100, opacity: 0, visibility: 'visible' });
    gsap.set('.hero-subtitle', { opacity: 0, x: 50, visibility: 'visible' });
    gsap.set('.role-tag', { opacity: 0, scale: 0.5, visibility: 'visible' });
    gsap.set('.architect-card', { opacity: 0, y: 100, scale: 0.95, visibility: 'visible' });
    gsap.set('.telemetry-shard', { opacity: 0, x: 100, rotation: 10, visibility: 'visible' });

    const tl = gsap.timeline({ defaults: { force3d: true } });

    tl.to('.sidebar-text-cont',
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' },
      0.2
    );

    tl.to('.hero-headline-line',
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' },
      0.3
    );

    tl.to('.hero-subtitle',
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
      0.8
    );

    tl.to('.role-tag',
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)' },
      1
    );

    tl.to('.architect-card',
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
      1.2
    );

    tl.to('.telemetry-shard',
      { opacity: 1, x: 0, rotation: 2, duration: 1, stagger: 0.2, ease: 'power3.out', clearProps: 'transform' },
      1.5
    );

    // 2. HORIZONTAL SCROLL FOR DEV PORTFOLIO
    const devTrack = document.querySelector('.dev-track') as HTMLElement;
    if (devTrack) {
      gsap.to(devTrack, {
        x: () => -(devTrack.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '#dev-portfolio',
          pin: true,
          scrub: true,
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
          scrub: true,
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

    // 5. MEDIUM SECTION (Slide-in immediately after analytical unpins)
    gsap.fromTo('#medium-section',
      { yPercent: 30 },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#medium-section',
          start: 'top bottom',
          end: 'top 60%',
          scrub: true,
          invalidateOnRefresh: true,
        }
      }
    );

  }, { scope: container });

  return (
    <div ref={container} className="relative pt-24 min-h-screen">

      {/* Cinematic Sidebar Text */}
      <div className="fixed left-6 top-0 bottom-0 items-center z-50 pointer-events-none hidden xl:flex">
        <div className="sidebar-text-cont rotate-180 pointer-events-auto" style={{ writingMode: 'vertical-rl', visibility: 'hidden' }}>
          <span className="text-[10px] font-black tracking-[0.4em] text-text-muted uppercase hover:text-accent transition-colors cursor-pointer">
            GOLFWANG0X // SYSTEMS ONLINE
          </span>
        </div>
      </div>

      <div className="fixed right-6 top-0 bottom-0 items-center z-50 pointer-events-none hidden xl:flex">
        <div className="sidebar-text-cont pointer-events-auto" style={{ writingMode: 'vertical-rl', visibility: 'hidden' }}>
          <span className="text-[10px] font-black tracking-[0.4em] text-text-muted uppercase hover:text-accent transition-colors cursor-pointer">
            GOLFWANG0X // EST. 2023
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 xl:px-32 pt-12 pb-6 md:pb-24 z-10 bg-bg-primary overflow-clip">
        <div className="role-tag absolute top-[10%] left-[8%] xl:left-32 hidden lg:flex items-center space-x-3 bg-glass-bg backdrop-blur-xl border border-glass-border px-5 py-2 rounded-full cursor-crosshair" style={{ visibility: 'hidden' }}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <PenTool className="w-3 h-3 text-text-muted" />
          <span className="text-[11px] font-black text-text-secondary tracking-[0.2em] uppercase">CONTENT WRITER</span>
        </div>

        <div className="role-tag absolute top-[18%] right-[5%] xl:right-32 hidden lg:flex items-center space-x-3 bg-glass-bg backdrop-blur-xl border border-glass-border px-5 py-2 rounded-full cursor-crosshair" style={{ visibility: 'hidden' }}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <Terminal className="w-3 h-3 text-text-muted" />
          <span className="text-[11px] font-black text-text-secondary tracking-[0.2em] uppercase">WEB DEVELOPER</span>
        </div>

        <div className="role-tag absolute bottom-[25%] right-[8%] xl:right-32 hidden lg:flex items-center space-x-3 bg-glass-bg backdrop-blur-xl border border-glass-border px-5 py-2 rounded-full cursor-crosshair" style={{ visibility: 'hidden' }}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <Cpu className="w-3 h-3 text-text-muted" />
          <span className="text-[11px] font-black text-text-secondary tracking-[0.2em] uppercase">BLOCKCHAIN TECH</span>
        </div>

        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start md:items-end justify-between mb-24 relative">
          <div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase mb-8 flex flex-col">
              <span className="overflow-hidden pb-2"><span className="hero-headline-line block" style={{ visibility: 'hidden' }}>SIGNAL</span></span>
              <span className="overflow-hidden pb-2"><span className="hero-headline-line block text-text-faint" style={{ visibility: 'hidden' }}>OVER</span></span>
              <span className="overflow-hidden pb-4 pt-2 -mt-2"><span className="hero-headline-line block text-accent drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.3)]" style={{ visibility: 'hidden' }}>NOISE.</span></span>
            </h1>
          </div>

          <div className="hero-subtitle max-w-md text-right self-end" style={{ visibility: 'hidden' }}>
            <div className="w-20 h-1 bg-accent mb-8 ml-auto"></div>
            <p className="text-text-muted text-2xl md:text-3xl leading-relaxed font-medium italic tracking-tight">
              "Channeling my creativity and passion through my content and web development."
            </p>
          </div>
        </div>

        <div className="architect-card relative w-full max-w-7xl px-4 flex flex-col items-center z-10" style={{ visibility: 'hidden' }}>
          <div className="relative block w-full aspect-square sm:aspect-[5/6] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl border border-glass-border transition-all duration-700 hover:border-accent/40 z-10 hover:z-[60]">
            <Link to="/about" className="absolute inset-0 z-20 cursor-pointer" aria-label="Go to About page"></Link>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=40&w=800&fm=webp"
              alt="The Architect"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/50 shadow-[0_0_15px_var(--accent)] -translate-y-full group-hover:animate-[scan_4s_linear_infinite]"></div>

            <div className="absolute top-4 left-3 right-3 md:top-12 md:left-12 md:right-12 flex flex-col items-start gap-3 md:gap-8 z-30">
              <div className="max-w-2xl text-left">
                <div className="flex items-center space-x-2 mb-2 md:mb-4">
                  <span className="text-accent text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase bg-bg-primary/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-1.5 rounded-full border border-accent/20">
                    ABOUT_ME
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-6xl font-black text-text-primary leading-tight tracking-tighter mb-2 md:mb-4 uppercase">
                  The Architect <br /> behind the Signal
                </h3>
                <p className="text-text-muted text-sm md:text-xl font-medium max-w-lg leading-relaxed mb-3 md:mb-6">Web3 researcher, technical content strategist, and security analyst dedicated to the modular endgame.</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 relative z-40 pointer-events-auto">
                  <a href="mailto:golfwang0x@gmail.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 md:px-8 md:py-3 bg-accent text-bg-primary text-[10px] md:text-sm font-black uppercase tracking-wider rounded-full hover:scale-105 transition-transform flex items-center shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]">
                    Contact
                  </a>
                  <a href="https://x.com/golfwang0x" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 md:px-8 md:py-3 bg-bg-primary/80 border border-accent text-accent text-[10px] md:text-sm font-black uppercase tracking-wider rounded-full hover:bg-accent/10 transition-colors flex items-center shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)]">
                    <Twitter className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> X
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="telemetry-shard absolute -bottom-16 right-0 w-full max-w-md glass rounded-[2.5rem] p-10 hidden lg:flex flex-col justify-between border-accent/30 z-20 shadow-2xl hover:rotate-0 transition-transform duration-500 cursor-default" style={{ visibility: 'hidden' }}>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-3">
                <BarChart className="w-5 h-5 text-accent" />
                <span className="text-[10px] font-black opacity-60 uppercase tracking-[0.3em]">X_IMPACT_TELEMETRY</span>
              </div>
              <div className="px-2 py-0.5 rounded-sm bg-accent text-[8px] text-bg-primary font-black uppercase">LIVE_STATS</div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-text-primary/10 pb-4">
                <div>
                  <p className="text-[9px] font-black text-text-primary/20 uppercase tracking-widest mb-1">IMPRESSIONS</p>
                  <p className="text-4xl font-black text-text-primary tracking-tighter">10.5M</p>
                </div>
                <TrendingUp className="w-6 h-6 text-accent mb-1" />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[8px] font-black text-text-primary/20 uppercase tracking-widest mb-1">ENGAGEMENTS</p>
                  <p className="text-2xl font-black text-text-primary/90">396.6K</p>
                </div>
                <div>
                  <p className="text-[8px] font-black text-text-primary/20 uppercase tracking-widest mb-1">LIKES</p>
                  <p className="text-2xl font-black text-text-primary/90">119.9K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SECTION 1: DEV PORTFOLIO */}
      <section id="dev-portfolio" className="w-full h-screen relative z-20 bg-bg-primary border-t border-glass-border">
        <div className="dev-wrapper w-full h-full relative overflow-clip flex flex-col justify-center">
          <div className="w-full px-6 xl:px-32 absolute top-16 left-0 right-0 z-40">
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

          <div className="dev-track flex gap-8 px-6 xl:px-32 w-max mt-32 min-w-full items-center pl-6 xl:pl-32">
            {featuredProjects.map((project, idx) => (
              <Link
                key={project.id}
                to="/projects"
                className="group relative block w-[80vw] md:w-[42vw] lg:w-[40vw] shrink-0"
              >
                <div className="glass overflow-hidden rounded-[2.5rem] border border-glass-border hover-card flex flex-col justify-between relative h-[560px]">
                  <div className="aspect-[16/9] overflow-hidden relative shrink-0 bg-[#0a0a0a]">
                    {project.demoUrl ? (
                      <iframe
                        src={project.demoUrl}
                        title={project.title}
                        className="w-[200%] h-[200%] origin-top-left scale-[0.5] group-hover:scale-[0.52] transition-transform duration-1000 border-none"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                      />
                    )}
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center space-x-4 mb-6 flex-wrap">
                        {project.techStack.map(tech => (
                          <span key={tech} className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/80 bg-accent/5 px-2 py-1 rounded-sm border border-accent/10">{tech}</span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black group-hover:text-accent transition-colors leading-[1.1] tracking-tighter mb-4 uppercase">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-sm md:text-base line-clamp-3 leading-relaxed mb-6 font-medium tracking-tight">
                        {project.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-glass-border">
                      <span className="text-[10px] uppercase font-black tracking-widest text-text-secondary">{project.date}</span>
                      <ExternalLink className="w-5 h-5 text-text-faint group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZONTAL SECTION 2: TOP SIGNAL */}
      <section id="top-signal" className="w-full h-screen relative z-30 bg-bg-primary border-t border-glass-border">
        <div className="signal-wrapper w-full h-full relative overflow-clip flex flex-col justify-center">
          <div className="w-full px-6 xl:px-32 absolute top-16 left-0 right-0 z-40">
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

          <div className="signal-track flex gap-8 px-6 xl:px-32 w-max mt-32 min-w-full items-center pl-6 xl:pl-32">
            {topSignal.map((tweet, idx) => (
              <Link
                key={tweet.id}
                to={`/content/${tweet.id}`}
                className="group relative block w-[85vw] md:w-[40vw] lg:w-[28vw] shrink-0"
              >
                <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-glass-border hover-card h-full flex flex-col justify-between overflow-hidden relative min-h-[450px]">
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-5xl md:text-6xl font-black text-accent/10 group-hover:text-accent transition-all duration-500">
                        0{idx + 1}
                      </span>
                      <TrendingUp className="w-6 h-6 text-text-muted group-hover:text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6 group-hover:text-accent transition-colors leading-[1.1] tracking-tighter uppercase">
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
      <section id="analytical-section" className="stacked-panel px-6 xl:px-32 py-24 xl:py-32 border-t border-glass-border bg-bg-primary shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
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
                className="panel-item group flex flex-col md:flex-row items-center justify-between p-8 md:p-16 border-b border-glass-border hover:bg-bg-secondary/20 transition-all relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-500 shadow-[0_0_20px_var(--accent)]"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                  <span className="text-[11px] font-black text-text-faint tracking-[0.4em] uppercase mb-6 md:mb-0 md:mr-20 lg:mr-32 shrink-0 font-mono">
                    LOG.TYPE / GT-{idx + 1}
                  </span>
                  <div className="max-w-4xl">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-text-primary group-hover:text-accent transition-all tracking-tighter mb-4 md:mb-6 leading-tight md:leading-[0.9] uppercase">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-base md:text-2xl font-medium tracking-tight leading-relaxed">
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
        <div className="max-w-7xl mx-auto w-full flex flex-col">
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
