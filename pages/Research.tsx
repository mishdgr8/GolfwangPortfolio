
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowLeft, BookOpen, Clock, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  const articles = portfolioData.filter(item => item.type === 'article');

  return (
    <div className="pt-32 pb-48 px-6 reveal">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[10px] font-black tracking-widest text-white/40 hover:text-[#CCFF00] mb-16 group uppercase">
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>

        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-4 h-4 text-[#CCFF00]" />
              <span className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase">Intelligence Archive</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Research</h1>
          </div>
          <p className="text-white/40 text-lg max-w-sm font-medium leading-relaxed italic">
            "Deep dives into the protocols shaping the modular endgame."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((item, idx) => (
            <Link 
              key={item.id} 
              to={`/content/${item.id}`}
              className="group block p-1 border border-white/5 rounded-2xl hover:border-[#CCFF00]/30 transition-all duration-500 hover:bg-white/[0.02] relative overflow-hidden"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="px-8 pb-8">
                <div className="flex items-center space-x-6 text-[10px] font-black text-[#CCFF00] uppercase tracking-widest mb-6">
                  <span>CASE.0{idx + 1}</span>
                  <span className="flex items-center text-white/30"><Clock className="w-3 h-3 mr-1" /> {item.date}</span>
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-[#CCFF00] transition-colors tracking-tighter leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-lg line-clamp-2 max-w-3xl font-medium mb-8">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex space-x-8">
                     {item.metrics?.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <p className="text-[8px] uppercase tracking-widest text-white/20 font-black">{m.label}</p>
                          <p className="text-xl font-black text-white/80">{m.value}</p>
                        </div>
                     ))}
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/10 group-hover:text-[#CCFF00]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
