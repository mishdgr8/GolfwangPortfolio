
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowLeft, TrendingUp, Search } from 'lucide-react';

const Tweets: React.FC = () => {
  // All items that are categorized as 'tweet' or 'thread'
  const tweets = portfolioData.filter(item => item.type === 'tweet');

  return (
    <div className="pt-32 pb-48 px-6 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <Link to="/" className="inline-flex items-center text-[10px] font-black tracking-widest text-white/40 hover:text-[#CCFF00] group uppercase">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Terminal
          </Link>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="SEARCH SIGNAL ARCHIVE..." 
              className="bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-[10px] font-black tracking-widest w-full md:w-80 focus:outline-none focus:border-[#CCFF00]/50 transition-colors"
            />
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-12 h-[1px] bg-[#CCFF00]"></div>
             <span className="text-[10px] font-black text-[#CCFF00] tracking-[0.4em] uppercase">Transmission Archive</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            Archive <br /> <span className="text-white/20">Feed.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl font-medium leading-relaxed italic">
            "A complete history of decoded signals, technical deep-dives, and community strategies."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className="text-white/20">{item.date}</span>
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
