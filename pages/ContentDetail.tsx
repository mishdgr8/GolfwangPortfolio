
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowLeft, ExternalLink, Calendar, Tag, Share2, CornerDownRight } from 'lucide-react';

const ContentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = portfolioData.find(i => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">404</h1>
          <p className="text-white/40 mb-8 uppercase tracking-widest">Content Not Found</p>
          <button onClick={() => navigate('/')} className="px-8 py-4 glass text-xs font-black rounded-full text-[#CCFF00]">
            BACK TO SAFETY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-48 px-6 reveal">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[10px] font-black tracking-widest text-white/40 hover:text-[#CCFF00] mb-16 group uppercase">
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>

        {item.imageUrl && (
          <div className="mb-16 rounded-[2rem] overflow-hidden glass aspect-video border border-white/5 p-2">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover rounded-[1.8rem] opacity-70 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-8">
          {item.tags.map(tag => (
            <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-[0.15em] text-[#CCFF00] border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
          {item.title}
        </h1>

        <div className="flex flex-wrap items-center gap-10 mb-16 pb-12 border-b border-white/5 text-[10px] font-black tracking-[0.2em] text-white/30 uppercase">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-2 text-[#CCFF00]" />
            {item.date}
          </div>
          <div className="flex items-center">
            <Tag className="w-3 h-3 mr-2 text-[#CCFF00]" />
            {item.type}
          </div>
          <a href={item.externalLink} target="_blank" className="flex items-center hover:text-white transition-colors">
            <ExternalLink className="w-3 h-3 mr-2 text-[#CCFF00]" />
            Live Feed
          </a>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-24">
          <div className="text-2xl md:text-3xl text-white/80 leading-snug font-bold mb-12 flex items-start">
            <CornerDownRight className="w-6 h-6 mr-4 text-[#CCFF00] shrink-0 mt-1" />
            <p className="italic font-medium">{item.excerpt}</p>
          </div>
          <div className="text-white/50 leading-relaxed whitespace-pre-wrap space-y-8 font-medium text-lg">
            {item.fullContent}
          </div>
        </div>

        {item.metrics && (
          <div className="glass p-12 rounded-[2rem] border border-white/10 mb-24 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-[#CCFF00]"></div>
            <h3 className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-12">Performance Statistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
              {item.metrics.map((m, i) => (
                <div key={i} className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#CCFF00] mb-4 font-black">{m.label}</p>
                  <p className="text-5xl font-black tracking-tighter text-white">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href={item.externalLink} 
            target="_blank" 
            className="flex-1 px-12 py-6 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-[#CCFF00] transition-colors"
          >
            Access Full Context
          </a>
          <button className="flex-1 px-12 py-6 glass border border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-white/5 transition-colors flex items-center justify-center text-white/60 hover:text-white">
            <Share2 className="w-4 h-4 mr-3" />
            Broadcast Signal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
