
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowLeft, TrendingUp, Search, ChevronDown, X } from 'lucide-react';

// Helper to format date - show "Recent" for unknown dates
const formatDate = (date: string): string => {
  if (date.toLowerCase().includes('unknown') || date.toLowerCase().includes('metrics fetched')) {
    return 'Recent';
  }
  return date;
};

const Tweets: React.FC = () => {
  const tweets = portfolioData.filter(item => item.type === 'tweet');
  const [selectedTweet, setSelectedTweet] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedItem = tweets.find(t => t.id === selectedTweet);

  return (
    <div className="pt-32 pb-48 px-6 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <Link to="/" className="inline-flex items-center text-[10px] font-black tracking-widest text-text-muted hover:text-accent group uppercase">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Terminal
          </Link>

          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-faint" />
            <input
              type="text"
              placeholder="SEARCH SIGNAL ARCHIVE..."
              className="bg-bg-tertiary border border-glass-border rounded-full pl-12 pr-6 py-3 text-[10px] font-black tracking-widest w-full md:w-80 focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
        </div>

        <div className="mb-12 md:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase">Transmission Archive</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            Archive <br /> <span className="text-text-faint">Feed.</span>
          </h1>
          <p className="text-text-muted text-base md:text-xl max-w-2xl font-medium leading-relaxed italic">
            "A complete history of decoded signals, technical deep-dives, and community strategies."
          </p>
        </div>

        {/* Dropdown Selector */}
        <div className="mb-12 max-w-2xl">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full p-4 glass border border-glass-border rounded-2xl flex items-center justify-between text-left hover:border-accent/50 transition-colors"
          >
            <span className="text-sm font-black uppercase tracking-wider text-text-muted">
              {selectedItem ? selectedItem.title : 'Select an article...'}
            </span>
            <ChevronDown className={`w-5 h-5 text-accent transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="mt-2 glass border border-glass-border rounded-2xl max-h-[50vh] overflow-y-auto z-30 relative">
              {tweets.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedTweet(item.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full p-4 text-left border-b border-glass-border last:border-0 hover:bg-bg-tertiary transition-colors ${selectedTweet === item.id ? 'bg-accent/10 border-l-2 border-l-accent' : ''
                    }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-black text-accent">#{idx + 1}</span>
                    <span className="text-[10px] text-text-faint">{formatDate(item.date)}</span>
                  </div>
                  <p className="text-sm font-bold text-text-secondary line-clamp-2">{item.title}</p>
                </button>
              ))}
            </div>
          )}

          {/* Selected Card Display */}
          {selectedItem && (
            <div className="mt-12 glass p-10 md:p-12 rounded-[2.5rem] border border-accent/40 relative reveal">
              <button
                onClick={() => setSelectedTweet(null)}
                className="absolute top-6 right-6 p-3 glass rounded-full hover:bg-accent hover:text-bg-primary transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-4 text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                <span className="text-accent font-mono">#{tweets.findIndex(t => t.id === selectedItem.id) + 1}</span>
                <span className="w-1 h-1 rounded-full bg-text-faint"></span>
                <span className="text-text-muted">{formatDate(selectedItem.date)}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-6 text-accent leading-[0.9] tracking-tighter uppercase">
                {selectedItem.title}
              </h3>
              <p className="text-text-muted text-lg md:text-2xl mb-12 leading-relaxed font-medium tracking-tight">
                {selectedItem.excerpt}
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 pt-12 border-t border-glass-border">
                {selectedItem.metrics && (
                  <div className="flex items-center space-x-12">
                    {selectedItem.metrics.slice(0, 4).map((m, i) => (
                      <div key={i}>
                        <p className="text-[10px] font-black text-text-faint uppercase tracking-[0.2em] mb-2">{m.label}</p>
                        <p className="text-3xl font-black text-text-primary tracking-tighter">{m.value}</p>
                      </div>
                    ))}
                  </div>
                )}
                <Link
                  to={`/content/${selectedItem.id}`}
                  className="w-full md:w-auto px-12 py-5 bg-accent text-bg-primary font-black uppercase text-xs tracking-[0.2em] rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] text-center"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Grid View: Only shown when no article is selected */}
        {!selectedItem && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {tweets.map((item, idx) => (
              <Link
                key={item.id}
                to={`/content/${item.id}`}
                className="group glass p-8 rounded-[2rem] border border-glass-border hover:border-accent/30 transition-all duration-500 hover:bg-bg-tertiary flex flex-col justify-between min-h-[380px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest">
                      <span className="text-accent font-mono">#{idx + 1}</span>
                      <span className="w-1 h-1 rounded-full bg-text-faint"></span>
                      <span className="text-text-faint">{formatDate(item.date)}</span>
                    </div>
                    {item.metrics && <TrendingUp className="w-4 h-4 text-accent/40 group-hover:text-accent transition-colors" />}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors leading-[1.1] tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-4 mb-8 leading-relaxed font-medium">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-glass-border mt-auto">
                  <div className="flex items-center space-x-6">
                    {item.metrics ? (
                      <div className="flex items-center space-x-1">
                        <span className="text-[10px] font-black text-accent">{item.metrics[0].value}</span>
                        <span className="text-[8px] font-black text-text-faint tracking-tighter uppercase">{item.metrics[0].label}</span>
                      </div>
                    ) : (
                      <span className="text-[8px] font-black text-text-faint uppercase tracking-widest">SIGNAL_VERIFIED</span>
                    )}
                  </div>
                  <div className="text-[10px] font-black text-text-muted uppercase group-hover:text-text-primary transition-colors tracking-widest">
                    READ_MORE
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-40 text-center">
          <p className="text-[10px] font-black text-text-faint tracking-[0.5em] uppercase mb-8">End of Transmission</p>
          <div className="w-1 h-20 bg-gradient-to-b from-accent to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
