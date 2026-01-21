
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowRight, TrendingUp, Sparkles, Zap, BookOpen, ExternalLink, Terminal, Cpu, PenTool, BarChart3, MessageCircle, Twitter, Send } from 'lucide-react';

// Helper to parse view count strings like "88.6K", "1,234", "10.5M" into numbers
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
  // Filter only tweets
  const allTweets = portfolioData.filter(item => item.type === 'tweet');

  // Sort tweets by view count (descending)
  const sortedByViews = [...allTweets].sort((a, b) => {
    const aViews = a.metrics?.find(m => m.label === 'Views')?.value || '0';
    const bViews = b.metrics?.find(m => m.label === 'Views')?.value || '0';
    return parseViewCount(bViews) - parseViewCount(aViews);
  });

  // Top 6 for Top Signal section
  const topSignal = sortedByViews.slice(0, 6);

  // 7th to 12th highest for Analytical Breakdowns section
  const analyticalPosts = sortedByViews.slice(6, 12);

  const mediumResearch = portfolioData.filter(item => item.type === 'article').slice(0, 3);

  return (
    <div className="pt-24 relative overflow-hidden">
      {/* 
        CINEMATIC BACKGROUND IMAGE 
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2500"
          alt="Atmospheric Background"
          className="w-full h-full object-cover opacity-25 grayscale brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary"></div>

        {/* Glowing Ambient Orbs */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full"></div>
      </div>

      {/* 
        VERTICAL SIDEBAR TEXT 
      */}
      <div className="fixed left-0 top-0 h-full w-24 hidden xl:flex flex-col items-center justify-start z-20 pointer-events-none pt-24 overflow-hidden">
        <div className="sidebar-text rotate-180 pointer-events-auto" style={{ writingMode: 'vertical-rl' }}>
          GOLFWANG0X
        </div>
      </div>
      <div className="fixed right-0 bottom-0 h-full w-24 hidden xl:flex flex-col items-center justify-end z-20 pointer-events-none pb-24 overflow-hidden">
        <div className="sidebar-text pointer-events-auto" style={{ writingMode: 'vertical-rl' }}>
          GOLFWANG0X
        </div>
      </div>

      <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 pt-12 pb-6 md:pb-24 z-10">

        {/* Adjusted Role Tags Position to avoid obstruction */}
        <div className="absolute top-[10%] left-[8%] hidden lg:flex items-center space-x-3 bg-glass-bg backdrop-blur-xl border border-glass-border px-5 py-2 rounded-full animate-float cursor-crosshair">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <PenTool className="w-3 h-3 text-text-muted" />
          <span className="text-[11px] font-black text-text-secondary tracking-[0.2em] uppercase">CONTENT WRITER</span>
        </div>

        <div className="absolute top-[18%] right-[5%] hidden lg:flex items-center space-x-3 bg-glass-bg backdrop-blur-xl border border-glass-border px-5 py-2 rounded-full animate-float cursor-crosshair" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <Terminal className="w-3 h-3 text-text-muted" />
          <span className="text-[11px] font-black text-text-secondary tracking-[0.2em] uppercase">WEB DEVELOPER</span>
        </div>

        <div className="absolute bottom-[25%] right-[8%] hidden lg:flex items-center space-x-3 bg-glass-bg backdrop-blur-xl border border-glass-border px-5 py-2 rounded-full animate-float cursor-crosshair" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <Cpu className="w-3 h-3 text-text-muted" />
          <span className="text-[11px] font-black text-text-secondary tracking-[0.2em] uppercase">BLOCKCHAIN TECH</span>
        </div>

        {/* Cinematic Header Text */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start md:items-end justify-between mb-24 relative">
          <div className="reveal">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase mb-8">
              SIGNAL <br />
              <span className="text-text-faint">OVER</span> <br />
              <span className="text-accent drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.3)]">NOISE.</span>
            </h1>
          </div>

          <div className="max-w-md reveal text-right self-end" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-1 bg-accent mb-8 ml-auto"></div>
            <p className="text-text-muted text-2xl md:text-3xl leading-relaxed font-medium italic tracking-tight">
              "Channeling my creativity and passion through my content and web development."
            </p>
          </div>
        </div>

        {/* About Me Card Showcase */}
        <div className="relative w-full max-w-7xl px-4 flex flex-col items-center">

          <div className="relative block w-full aspect-square sm:aspect-[5/6] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl reveal border border-glass-border transition-all duration-700 hover:border-accent/40 z-10 hover:z-[60]" style={{ animationDelay: '0.4s' }}>
            <Link to="/about" className="absolute inset-0 z-20 cursor-pointer" aria-label="Go to About page"></Link>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
              alt="The Architect"
              className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent"></div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/50 shadow-[0_0_15px_var(--accent)] -translate-y-full group-hover:animate-[scan_4s_linear_infinite]"></div>

            {/* 
                CONTENT REPOSITIONED TO TOP-LEFT 
                Ensures write-up is left-aligned and NOT behind the bottom-left telemetry shard.
                Arrow is moved BELOW the text.
              */}
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
                  {/* Mobile: Arrow to indicate card is clickable */}
                  <div className="md:hidden p-1.5 bg-glass-bg border border-glass-border text-text-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  {/* Desktop: Telegram button */}
                  <a href="https://t.me/mishdgr8" target="_blank" rel="noopener noreferrer" className="hidden md:flex p-3 glass border border-glass-border text-text-primary rounded-full hover:bg-glass-bg transition-colors items-center justify-center">
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Learn More Button - Desktop only */}
              <Link to="/about" className="hidden md:flex pointer-events-auto px-8 py-4 bg-glass-bg backdrop-blur-md border border-glass-border text-text-primary hover:bg-accent hover:text-bg-primary hover:border-transparent transition-all duration-300 rounded-full items-center space-x-3 group/btn">
                <span className="font-black tracking-[0.2em] uppercase text-xs">LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* PERFORMANCE METRICS SHARD (xImpact Telemetry) */}
          <div className="absolute -bottom-16 right-0 w-full max-w-md glass rounded-[2.5rem] p-10 hidden lg:flex flex-col justify-between border-accent/30 rotate-2 hover:rotate-0 transition-all duration-500 reveal z-20 shadow-2xl" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-accent" />
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

              <div className="grid grid-cols-2 gap-8 pt-2">
                <div>
                  <p className="text-[8px] font-black text-text-primary/20 uppercase tracking-widest mb-1">REPOSTS</p>
                  <p className="text-2xl font-black text-text-primary/90">10.9K</p>
                </div>
                <div>
                  <p className="text-[8px] font-black text-text-primary/20 uppercase tracking-widest mb-1">RATE</p>
                  <p className="text-2xl font-black text-accent">3.7%</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECONDARY MINI SHARD */}
          <div className="absolute -top-12 right-0 w-64 glass rounded-3xl p-8 hidden lg:flex flex-col border-glass-border rotate-3 hover:rotate-0 transition-all duration-500 reveal z-20 shadow-2xl" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-[9px] font-black opacity-30 uppercase tracking-widest">NETWORK_REACH</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-text-primary/40 font-black">VISITS</span>
                <span className="text-xl font-black">36.9K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-text-primary/40 font-black">FOLLOWERS</span>
                <span className="text-xl font-black text-accent">3.1K</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 md:mt-48 overflow-hidden border-t border-glass-border pt-4 md:pt-16">
          <div className="reveal">
            <h2 className="text-huge text-center uppercase tracking-tighter">
              GOLFWANG0X
            </h2>
          </div>
        </div>
      </section>

      {/* Global Telemetry Bar */}
      <div className="max-w-7xl mx-auto px-6 xl:px-32 mb-24 hidden lg:flex justify-between items-start pt-12 border-t border-glass-border reveal" style={{ animationDelay: '1s' }}>
        {[
          { label: 'Replies', val: '42.7K', icon: MessageCircle },
          { label: 'Bookmarks', val: '4.6K', icon: Zap },
          { label: 'Verified', val: '939', icon: Sparkles },
          { label: 'Shares', val: '522', icon: ArrowRight },
          { label: 'Visits', val: '36.9K', icon: TrendingUp }
        ].map((item, i) => (
          <div key={i} className="group cursor-default">
            <div className="flex items-center space-x-2 mb-2">
              <item.icon className="w-3 h-3 text-text-faint group-hover:text-accent transition-colors" />
              <p className="text-[9px] font-black text-text-faint uppercase tracking-[0.2em]">{item.label}</p>
            </div>
            <p className="text-3xl font-black tracking-tighter text-text-primary group-hover:text-accent transition-colors">{item.val}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}</style>

      {/* 1. TOP SIGNAL TWEETS */}
      <section id="top-signal" className="px-6 py-20 relative z-10 border-t border-glass-border bg-bg-primary/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="reveal">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <span className="text-[11px] font-black text-text-muted tracking-[0.4em] uppercase">High Performance Feed</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Top Signal <br /><span className="text-text-faint">Archive.</span></h2>
            </div>
            <Link to="/tweets" className="hidden md:flex items-center px-8 py-4 rounded-full border border-glass-border text-[11px] font-black text-text-muted hover:text-text-primary hover:border-accent/50 transition-all uppercase tracking-[0.3em] group backdrop-blur-md">
              ALL TRANSMISSIONS <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform text-accent" />
            </Link>
          </div>

          {/* Mobile: Show 3 cards */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {topSignal.slice(0, 3).map((tweet, idx) => (
              <Link
                key={tweet.id}
                to={`/content/${tweet.id}`}
                className="group relative block reveal"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="glass p-6 rounded-[1.5rem] border border-glass-border hover-card h-full flex flex-col justify-between overflow-hidden relative min-h-[280px]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-4xl font-black text-accent/10 group-hover:text-accent transition-all duration-500">
                        0{idx + 1}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-bg-secondary/20 group-hover:bg-accent flex items-center justify-center transition-all duration-500">
                        <TrendingUp className="w-5 h-5 text-text-muted group-hover:text-bg-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black mb-4 group-hover:text-accent transition-colors leading-[1.1] tracking-tighter uppercase">
                      {tweet.title}
                    </h3>
                    <p className="text-text-muted mb-6 line-clamp-2 text-sm leading-relaxed font-medium">
                      {tweet.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 pt-4 border-t border-glass-border mt-auto">
                    {['Views', 'Likes'].map((label, i) => {
                      const metric = tweet.metrics?.find(m => m.label === label);
                      return metric ? (
                        <div key={i}>
                          <p className="text-[9px] uppercase tracking-wider text-text-faint font-black">{metric.label}</p>
                          <p className="text-lg font-black text-text-secondary">{metric.value}</p>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </Link>
            ))}
            <Link
              to="/tweets"
              className="flex items-center justify-center py-4 px-6 glass border border-accent/30 rounded-2xl text-accent font-black uppercase text-sm tracking-wider hover:bg-accent/10 transition-colors"
            >
              See All Signals <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Desktop: Show all 6 cards */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {topSignal.map((tweet, idx) => (
              <Link
                key={tweet.id}
                to={`/content/${tweet.id}`}
                className="group relative block reveal"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="glass p-10 md:p-12 rounded-[2.5rem] border border-glass-border hover-card h-full flex flex-col justify-between overflow-hidden relative min-h-[480px]">
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-6xl font-black text-accent/10 group-hover:text-accent transition-all duration-500">
                        0{idx + 1}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-bg-secondary/20 group-hover:bg-accent flex items-center justify-center transition-all duration-500 shadow-xl">
                        <TrendingUp className="w-7 h-7 text-text-muted group-hover:text-bg-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-8 group-hover:text-accent transition-colors leading-[1.1] tracking-tighter uppercase">
                      {tweet.title}
                    </h3>
                    <p className="text-text-muted mb-12 line-clamp-3 text-lg leading-relaxed font-medium tracking-tight">
                      {tweet.excerpt}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-8 pt-10 border-t border-glass-border mt-auto">
                    {['Views', 'Likes', 'Replies'].map((label, i) => {
                      const metric = tweet.metrics?.find(m => m.label === label);
                      return metric ? (
                        <div key={i}>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-text-faint mb-3 font-black truncate">{metric.label}</p>
                          <p className="text-2xl font-black text-text-secondary group-hover:text-text-primary transition-colors tracking-tighter">{metric.value}</p>
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

      {/* 2. ANALYTICAL POSTS */}
      <section id="analytical" className="px-6 py-24 border-t border-glass-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-[2px] bg-accent"></div>
              <span className="text-[11px] font-black text-text-muted tracking-[0.5em] uppercase">Intelligence Ledger</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">Analytical <br /><span className="text-text-faint">Breakdowns.</span></h2>
          </div>

          {/* Mobile: Show 3 posts */}
          <div className="flex flex-col md:hidden">
            {analyticalPosts.slice(0, 3).map((post, idx) => (
              <Link
                key={post.id}
                to={`/content/${post.id}`}
                className="group flex flex-col p-6 border-b border-glass-border hover:bg-glass-bg transition-all relative overflow-hidden reveal"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500"></div>
                <span className="text-[10px] font-black text-text-faint tracking-widest uppercase mb-2 font-mono">
                  GT-{idx + 1}
                </span>
                <h3 className="text-lg font-black text-text-primary group-hover:text-accent transition-all tracking-tighter mb-2 uppercase">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm font-medium line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
            <Link
              to="/tweets"
              className="flex items-center justify-center py-4 px-6 mt-4 glass border border-accent/30 rounded-2xl text-accent font-black uppercase text-sm tracking-wider hover:bg-accent/10 transition-colors"
            >
              See All Breakdowns <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Desktop: Show all 6 posts */}
          <div className="hidden md:flex flex-col">
            {analyticalPosts.map((post, idx) => (
              <Link
                key={post.id}
                to={`/content/${post.id}`}
                className="group flex flex-col md:flex-row items-center justify-between p-12 md:p-16 border-b border-glass-border hover:bg-bg-secondary/20 transition-all relative overflow-hidden reveal"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-500 shadow-[0_0_20px_var(--accent)]"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                  <span className="text-[11px] font-black text-text-faint tracking-[0.4em] uppercase mb-6 md:mb-0 md:mr-20 lg:mr-32 shrink-0 font-mono">
                    LOG.TYPE / GT-{idx + 1}
                  </span>

                  <div className="max-w-4xl">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-text-primary group-hover:text-accent transition-all tracking-tighter mb-6 leading-[0.9] uppercase">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-xl md:text-2xl font-medium tracking-tight leading-relaxed">
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

      {/* 3. MEDIUM RESEARCH */}
      <section id="medium-research" className="px-6 py-24 border-t border-glass-border relative z-10 bg-bg-primary/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div className="reveal">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <span className="text-[11px] font-black text-text-muted tracking-[0.5em] uppercase">Deep Intelligence</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">Medium <br /><span className="text-text-faint">Research.</span></h2>
            </div>
            <Link to="/research" className="hidden md:flex items-center px-8 py-4 rounded-full border border-glass-border text-[11px] font-black text-text-muted hover:text-text-primary hover:border-accent/50 transition-all uppercase tracking-[0.3em] group backdrop-blur-md">
              VIEW ARCHIVE <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform text-accent" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
            {mediumResearch.map((article, idx) => (
              <Link
                key={article.id}
                to={`/content/${article.id}`}
                className="group relative flex flex-col h-full reveal overflow-hidden rounded-[3rem] glass border border-glass-border hover:border-accent/40 transition-all duration-700 hover:shadow-2xl"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="aspect-[16/10] overflow-hidden relative shrink-0">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent"></div>
                </div>

                <div className="p-10 md:p-12 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center space-x-5 mb-8">
                      {article.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80 bg-accent/5 px-3 py-1 rounded-sm border border-accent/10">#{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-black group-hover:text-accent transition-colors leading-[1.1] tracking-tight mb-6 uppercase">
                      {article.title}
                    </h3>
                    <p className="text-text-muted text-lg line-clamp-2 leading-relaxed mb-8 font-medium tracking-tight">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-glass-border mt-auto">
                    <div className="flex items-center space-x-10">
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

      {/* Contact Section */}
      <section className="px-6 py-32 md:py-48 relative overflow-hidden border-t border-glass-border z-10">
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
