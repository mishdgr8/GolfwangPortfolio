
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Terminal, Zap, Cpu, Search, Fingerprint } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-48 px-6 reveal relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#CCFF00]/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center text-[10px] font-black tracking-widest text-white/40 hover:text-[#CCFF00] mb-16 group uppercase">
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>

        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-8">
             <Fingerprint className="w-5 h-5 text-[#CCFF00]" />
             <span className="text-[11px] font-black text-[#CCFF00] tracking-[0.5em] uppercase">IDENTITY_VERIFIED</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
            Decoding <br /> <span className="text-white/20">The Architect.</span>
          </h1>
          <p className="text-2xl md:text-4xl text-white/60 font-medium leading-tight max-w-4xl italic tracking-tighter">
            "GOLFWANG0X is a digital-native researcher bridging the gap between high-level protocol architecture and actionable market intelligence."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
           <div className="space-y-12">
             <div>
               <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ THE_BIO</h3>
               <p className="text-lg text-white/40 leading-relaxed font-medium">
                 Born out of the early DeFi summer, Golfwang0x has evolved from a retail participant into a specialized analyst focusing on the modular ecosystem. My work focuses on uncovering hidden supply dynamics, Sybil detection in emerging testnets, and technical breakdowns that even your developer would respect.
               </p>
             </div>
             <div>
               <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ CORE_THESIS</h3>
               <p className="text-lg text-white/40 leading-relaxed font-medium">
                 I believe the modular endgame is the only sustainable path to mass adoption. By decoupling execution, settlement, and data availability, we create a specialized stack that can handle global demand without compromising on decentralization.
               </p>
             </div>
           </div>
           
           <div className="glass p-12 rounded-[3rem] border border-white/10 relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 blur-3xl"></div>
             <h3 className="text-[11px] font-black text-white/20 tracking-[0.4em] uppercase mb-12 text-center">TECHNICAL_SPECIALIZATION</h3>
             <div className="space-y-10">
               {[
                 { icon: Shield, title: "SECURITY AUDITING", desc: "Sybil detection & cluster analysis" },
                 { icon: Terminal, title: "CONTENT STRATEGY", desc: "High-impact technical writing" },
                 { icon: Cpu, title: "MODULAR TECH", desc: "L2/L3 infrastructure deep-dives" },
                 { icon: Search, title: "ON-CHAIN ALPHA", desc: "Supply dynamics & github tracking" }
               ].map((skill, i) => (
                 <div key={i} className="flex items-start space-x-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#CCFF00] transition-all">
                     <skill.icon className="w-5 h-5 text-white/20 group-hover:text-black" />
                   </div>
                   <div>
                     <p className="text-sm font-black tracking-widest uppercase mb-1">{skill.title}</p>
                     <p className="text-xs text-white/30 font-medium">{skill.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        <div className="border-t border-white/5 pt-24 text-center">
           <h2 className="text-huge uppercase tracking-tighter mb-16">
             CONTACT
           </h2>
           <div className="flex flex-wrap justify-center gap-12">
              <a href="https://x.com/golfwang0x" target="_blank" className="group">
                 <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 group-hover:text-[#CCFF00]">TWITTER</p>
                 <p className="text-2xl font-black">@GOLFWANG0X</p>
              </a>
              <a href="https://github.com" target="_blank" className="group">
                 <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 group-hover:text-[#CCFF00]">GITHUB</p>
                 <p className="text-2xl font-black">/GOLFWANG0X</p>
              </a>
              <div className="group">
                 <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 group-hover:text-[#CCFF00]">STATUS</p>
                 <p className="text-2xl font-black text-[#CCFF00]">ONLINE</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
