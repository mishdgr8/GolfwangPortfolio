
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowLeft, ArrowRight, TrendingUp, BarChart3, Clock } from 'lucide-react';

const Archive: React.FC = () => {
  return (
    <div className="pt-32 pb-48 px-6 reveal">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[10px] font-black tracking-widest text-white/40 hover:text-[#CCFF00] mb-16 group uppercase">
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Complete Signal Archive</h1>
          <p className="text-white/40 text-lg max-w-2xl">Every analysis, performance metric, and technical thread documented in full.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((item, idx) => (
            <Link 
              key={item.id} 
              to={`/content/${item.id}`}
              className="group glass p-8 rounded-[2rem] border border-white/5 hover:border-[#CCFF00]/30 transition-all duration-500 hover:bg-white/[0.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-2 text-[10px] font-black text-white/20 uppercase tracking-widest">
                    <span>{item.type}</span>
                    <span className="h-1 w-1 rounded-full bg-white/20"></span>
                    <span>{item.date}</span>
                  </div>
                  {item.metrics && <TrendingUp className="w-4 h-4 text-[#CCFF00]" />}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 group-hover:text-[#CCFF00] transition-colors leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm line-clamp-3 mb-8 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center space-x-4">
                  {item.metrics && (
                    <div className="text-[10px] font-black text-[#CCFF00]">
                      {item.metrics[0].value} {item.metrics[0].label}
                    </div>
                  )}
                </div>
                <div className="text-[10px] font-black text-white/20 uppercase group-hover:text-white transition-colors">
                  Open Signal
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
