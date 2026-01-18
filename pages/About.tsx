
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
              <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ THE_ORIGIN_STORY</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                I didn’t start with a blueprint; I started with curiosity. Like many, I started out as a petroleum engineer, who saw the potential in blockchain technology, learning the hard way through the chaos of gas wars and yield farms in the early DEFI days. That experience transformed me from a spectator into a student of the system. I realized that to survive in crypto, you have to understand not just what a protocol does, but why it was built and where its structural weaknesses lie.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ THE_BIO</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                Born out of the early DeFi summer, Golfwang0x has evolved from a retail participant into a specialized analyst focusing on the modular ecosystem. My work focuses on uncovering hidden supply dynamics, Sybil detection in emerging testnets, and technical breakdowns that even your developer would respect.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ BEYOND_THE_SCREEN</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                While my work is rooted in the digital-native world, I believe the best insights come from stepping back. I view the modular ecosystem through the lens of real-world urban planning—thinking about how digital "cities" (L2s) connect, trade, and secure their borders. This macro perspective allows me to see the human behavior driving the data, recognizing that behind every wallet address is a person with specific incentives and fears.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ MY_PHILOSOPHY</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                I value intellectual honesty above all else. In a space often blinded by tribalism and "shilling," I pride myself on being the person who asks the uncomfortable questions. If a tech stack is flawed, I’ll say it. If a narrative doesn't match the on-chain reality, I’ll expose it. My loyalty isn't to a specific coin or project, but to the long-term health and decentralization of the entire industry.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ THE_CRAFT</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                Writing is my way of thinking out loud. I don't just produce "content"; I build knowledge frameworks. There is a specific type of satisfaction I get from taking a dense, 50-page whitepaper and distilling it into a "technical breakdown your developer would respect." For me, the magic happens when a complex concept finally "clicks" for someone else, turning a confusing tech stack into a clear opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ CORE_THESIS</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                I believe the modular endgame is the only sustainable path to mass adoption. By decoupling execution, settlement, and data availability, we create a specialized stack that can handle global demand without compromising on decentralization.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black text-[#CCFF00] tracking-[0.4em] uppercase mb-6">/ THE_DRIVE</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                What keeps me up at night isn't the price volatility—it’s the potential of the endgame. I am genuinely driven by the idea that we are building the foundation for a more equitable global financial system. I do this work because I want to be one of the architects who ensured the "modular endgame" was built correctly, sustainably, and for everyone, not just the few.
              </p>
            </div>
          </div>

          <div className="space-y-12">
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

            <div className="glass p-12 rounded-[3rem] border border-white/10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 blur-3xl"></div>
              <h3 className="text-[11px] font-black text-white/20 tracking-[0.4em] uppercase mb-12 text-center">THE_ADVISORY_EDGE</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Ecosystem Advocacy", "Strategic Partnerships",
                  "Governance Stewardship", "Advisory Board Leadership",
                  "Dune/Nansen Querying", "Protocol Stress-Testing",
                  "Reward Program Auditing", "White-Glove Onboarding"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="w-2 h-2 rounded-full bg-[#CCFF00]/40 group-hover:bg-[#CCFF00] group-hover:shadow-[0_0_10px_#CCFF00] transition-all"></div>
                    <p className="text-xs font-bold tracking-wider uppercase text-white/60 group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
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
            <a href="https://t.me/mishdgr8" target="_blank" className="group">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 group-hover:text-[#CCFF00]">TELEGRAM</p>
              <p className="text-2xl font-black">@mishdgr8</p>
            </a>
            <a href="https://github.com/mishdgr8" target="_blank" className="group">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 group-hover:text-[#CCFF00]">GITHUB</p>
              <p className="text-2xl font-black">/mishdgr8</p>
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
