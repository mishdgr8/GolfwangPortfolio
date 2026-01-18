
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
          <Link to="/" className="inline-flex items-center text-[10px] font-black tracking-widest text-white/40 hover:text-[#CCFF00] group uppercase">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Terminal
          </Link>

          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="text"
              placeholder="SEARCH SIGNAL ARCHIVE..."
              className="bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-[10px] font-black tracking-widest w-full md:w-80 focus:outline-none focus:border-[#CCFF00]/50 transition-colors"
            />
          </div>
        </div>

        <div className="mb-12 md:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-[1px] bg-[#CCFF00]"></div>
            <span className="text-[10px] font-black text-[#CCFF00] tracking-[0.4em] uppercase">Transmission Archive</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            Archive <br /> <span className="text-white/20">Feed.</span>
          </h1>
          <p className="text-white/40 text-base md:text-xl max-w-2xl font-medium leading-relaxed italic">
            "A complete history of decoded signals, technical deep-dives, and community strategies."
          </p>
        </div>

        {/* MOBILE: Dropdown Selector */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full p-4 glass border border-white/10 rounded-2xl flex items-center justify-between text-left"
          >
            <span className="text-sm font-black uppercase tracking-wider text-white/60">
              {selectedItem ? selectedItem.title : 'Select an article...'}
            </span>
            <ChevronDown className={`w-5 h-5 text-[#CCFF00] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="mt-2 glass border border-white/10 rounded-2xl max-h-[50vh] overflow-y-auto">
              {tweets.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedTweet(item.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full p-4 text-left border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${selectedTweet === item.id ? 'bg-[#CCFF00]/10 border-l-2 border-l-[#CCFF00]' : ''
                    }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-black text-[#CCFF00]">#{idx + 1}</span>
                    <span className="text-[10px] text-white/30">{formatDate(item.date)}</span>
                  </div>
                  <p className="text-sm font-bold text-white/80 line-clamp-2">{item.title}</p>
                </button>
              ))}
            </div>
          )}

          {/* MOBILE: Selected Card Display */}
          {selectedItem && (
            <div className="mt-6 glass p-6 rounded-[2rem] border border-[#CCFF00]/30 relative">
              <button
                onClick={() => setSelectedTweet(null)}
                className="absolute top-4 right-4 p-2 glass rounded-full"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
              <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest mb-4">
                <span className="text-[#CCFF00] font-mono">#{tweets.findIndex(t => t.id === selectedItem.id) + 1}</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-white/40">{formatDate(selectedItem.date)}</span>
              </div>
              <h3 className="text-xl font-black mb-3 text-[#CCFF00] leading-tight tracking-tighter">
                {selectedItem.title}
              </h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                {selectedItem.excerpt}
              </p>
              {selectedItem.metrics && (
                <div className="flex items-center space-x-4 mb-6">
                  {selectedItem.metrics.slice(0, 3).map((m, i) => (
                    <div key={i} className="text-center">
                      <p className="text-lg font-black text-white">{m.value}</p>
                      <p className="text-[8px] font-black text-white/30 uppercase">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
              <Link
                to={`/content/${selectedItem.id}`}
                className="block w-full py-3 bg-[#CCFF00] text-black text-center font-black uppercase text-xs tracking-wider rounded-full"
              >
                Read Full Article
              </Link>
            </div>
          )}
        </div>

        {/* DESKTOP: Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tweets.map((item, idx) => (
            <Link
              key={item.id}
              to={`/content/${item.id}`}
              className="group glass p-8 rounded-[2rem] border border-white/5 hover:border-[#CCFF00]/30 transition-all duration-500 hover:bg-white/[0.02] flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-[#CCFF00] font-mono">#{idx + 1}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-white/20">{formatDate(item.date)}</span>
                  </div>
                  {item.metrics && <TrendingUp className="w-4 h-4 text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors" />}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#CCFF00] transition-colors leading-[1.1] tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm line-clamp-4 mb-8 leading-relaxed font-medium">
                  {item.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <div className="flex items-center space-x-6">
                  {item.metrics ? (
                    <div className="flex items-center space-x-1">
                      <span className="text-[10px] font-black text-[#CCFF00]">{item.metrics[0].value}</span>
                      <span className="text-[8px] font-black text-white/20 tracking-tighter uppercase">{item.metrics[0].label}</span>
                    </div>
                  ) : (
                    <span className="text-[8px] font-black text-white/10 uppercase tracking-widest">SIGNAL_VERIFIED</span>
                  )}
                </div>
                <div className="text-[10px] font-black text-white/20 uppercase group-hover:text-white transition-colors tracking-widest">
                  READ_MORE
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-40 text-center">
          <p className="text-[10px] font-black text-white/10 tracking-[0.5em] uppercase mb-8">End of Transmission</p>
          <div className="w-1 h-20 bg-gradient-to-b from-[#CCFF00] to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
