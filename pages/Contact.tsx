
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Send, CheckCircle2, Globe, Cpu, Smartphone, Cloud, Code, Zap } from 'lucide-react';

const services = [
    {
        title: "Precision Frontend",
        description: "We don’t just build websites; we engineer digital experiences. Using React and Next.js, we craft high-signal interfaces that combine technical performance with cinematic motion design. Every pixel is calculated for maximum impact and retention.",
        icon: <Globe className="w-6 h-6" />
    },
    {
        title: "Robust Architectures",
        description: "Highly available, distributed backend systems designed to handle complex logic and massive data throughput. We specialize in building scalable APIs and microservices that serve as the indestructible spine of your application.",
        icon: <Code className="w-6 h-6" />
    },
    {
        title: "Agentic AI Systems",
        description: "Moving beyond basic LLM integrations. We build sophisticated AI agents and automation workflows that execute complex tasks, optimize business processes, and provide deep intelligence at scale. Your business, supercharged by autonomous logic.",
        icon: <Cpu className="w-6 h-6" />
    },
    {
        title: "Cross-Platform Genesis",
        description: "Native-level performance for iOS and Android. Our mobile development strategy focuses on fluid interactions and shared logic, ensuring your brand maintains a premium feel regardless of the device in the user's hand.",
        icon: <Smartphone className="w-6 h-6" />
    },
    {
        title: "Cloud Supremacy",
        description: "Architecting for zero downtime. We leverage modern cloud providers to build secure, serverless, and auto-scaling infrastructures. From CI/CD pipelines to container orchestration, we ensure your system is always online.",
        icon: <Cloud className="w-6 h-6" />
    },
    {
        title: "Full-Spectrum Fullstack",
        description: "Unified engineering from the metal to the monitor. We manage the entire vertical stack—database, server, and interface—to ensure complete architectural cohesion, faster deployment cycles, and a seamless user pipeline.",
        icon: <Zap className="w-6 h-6" />
    }
];

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const illustrationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out"
            });

            gsap.from(".service-card", {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.7)",
                delay: 0.4
            });

            // Gentle floating/breath animation for the whole hub
            gsap.to(illustrationRef.current, {
                y: -15,
                rotation: 1,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For demo purposes, we'll just show an alert
        alert("Message sent! We'll get back to you soon.");
    };

    return (
        <div ref={containerRef} className="min-h-screen pt-24 md:pt-32 pb-24 px-6 md:px-32 relative overflow-hidden bg-bg-primary">
            {/* Mega Background SVG Hub (Neural Transmission System) - Fixed Background Position */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
                <div
                    ref={illustrationRef}
                    className="relative scale-[1.5] md:scale-[2] lg:scale-[2.5] opacity-25 transition-opacity duration-1000"
                    style={{ filter: 'grayscale(0.3) brightness(0.9)' }}
                >
                    <svg width="900" height="650" viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_120px_rgba(var(--accent-rgb),0.4)]">
                        <defs>
                            <radialGradient id="megaCoreGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                                <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                            </radialGradient>
                            <filter id="megaGlow">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Central Core */}
                        <circle cx="450" cy="325" r="120" fill="url(#megaCoreGradient)" className="animate-pulse opacity-40" />
                        <circle cx="450" cy="325" r="40" fill="var(--accent)" filter="url(#megaGlow)" />

                        {/* Advanced Orbital Rings */}
                        <g opacity="0.2">
                            <ellipse cx="450" cy="325" rx="350" ry="120" stroke="var(--accent)" strokeWidth="0.5" className="origin-center animate-[spin_40s_linear_infinite]" />
                            <ellipse cx="450" cy="325" rx="120" ry="350" stroke="var(--accent)" strokeWidth="0.5" className="origin-center animate-[spin_35s_linear_infinite_reverse]" />
                            <ellipse cx="450" cy="325" rx="300" ry="300" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="10 20" className="origin-center animate-[spin_60s_linear_infinite]" />
                        </g>

                        {/* Transmission Nodes */}
                        <g className="nodes">
                            {[
                                { cx: 150, cy: 150, label: "Frontend_Engine", delay: "0s", dur: "2.5s" },
                                { cx: 750, cy: 150, label: "Backend_Vault", delay: "0.5s", dur: "3s" },
                                { cx: 800, cy: 450, label: "Agentic_AI", delay: "1s", dur: "2.2s" },
                                { cx: 100, cy: 480, label: "Cloud_Genesis", delay: "1.5s", dur: "2.8s" },
                                { cx: 450, cy: 80, label: "Mobile_Core", delay: "0.2s", dur: "3.5s" },
                                { cx: 450, cy: 570, label: "Protocols", delay: "0.8s", dur: "4s" },
                                { cx: 70, cy: 325, label: "Security_Matrix", delay: "1.2s", dur: "2s" },
                                { cx: 830, cy: 325, label: "Performance_Stack", delay: "0.4s", dur: "2.5s" },
                                { cx: 250, cy: 100, label: "Technical_Writer", delay: "1.8s", dur: "3.2s" },
                                { cx: 650, cy: 100, label: "UI_Cinematics", delay: "0.6s", dur: "2.7s" }
                            ].map((node, i) => (
                                <g key={i} className="node-group">
                                    <circle cx={node.cx} cy={node.cy} r="16" fill="var(--bg-primary)" stroke="var(--accent)" strokeWidth="1.5" filter="url(#megaGlow)" />
                                    <path d={`M450 325 L${node.cx} ${node.cy}`} stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.15" />
                                    <text x={node.cx < 450 ? node.cx - 15 : node.cx + 25} y={node.cy < 325 ? node.cy - 25 : node.cy + 40} fill="var(--accent)" fontSize="8" fontWeight="900" textAnchor={node.cx < 450 ? "end" : "start"} className="uppercase tracking-[0.5em] font-mono opacity-70">
                                        {node.label}
                                    </text>
                                    <circle cx={node.cx} cy={node.cy} r="4" fill="var(--accent)">
                                        <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" begin={node.delay} />
                                    </circle>
                                    <circle cx="0" cy="0" r="3" fill="var(--accent)">
                                        <animateMotion path={`M450 325 L${node.cx} ${node.cy}`} dur={node.dur} repeatCount="indefinite" begin={node.delay} />
                                    </circle>
                                </g>
                            ))}
                        </g>
                    </svg>
                </div>
            </div>

            {/* Glowing Atmosphere */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-20 md:mb-28">
                    <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-text-primary uppercase mb-8 reveal leading-[0.85]">
                        Let's <span className="text-accent italic drop-shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)]">Build</span><br />Something Great.
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl reveal leading-relaxed font-semibold italic opacity-90">
                        "Architecting the future through technical excellence and cinematic immersion."
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                    {/* Left Column: Our Expertise */}
                    <div className="space-y-12">
                        <div className="flex items-center space-x-4 reveal">
                            <div className="h-[1px] w-12 bg-accent"></div>
                            <span className="text-xs font-black tracking-[0.6em] text-accent uppercase">Operational_Capabilities</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-card p-8 glass border border-glass-border rounded-3xl hover:border-accent transition-all duration-700 group relative overflow-hidden backdrop-blur-xl shadow-xl"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors"></div>
                                    <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_12px_rgba(var(--accent-rgb),0.4)]">
                                        {React.cloneElement(service.icon as React.ReactElement, { strokeWidth: 2.5 })}
                                    </div>
                                    <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tighter leading-none">{service.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Transmission Interface (Form) */}
                    <div className="reveal">
                        <div className="p-10 md:p-14 glass border border-glass-border rounded-[3.5rem] backdrop-blur-3xl relative shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-[80px] animate-pulse"></div>

                            <h2 className="text-3xl md:text-4xl font-black mb-12 text-text-primary uppercase tracking-tighter">Establish_Connection</h2>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="block text-[11px] font-black uppercase tracking-[0.4em] text-accent ml-1 opacity-70">SENDER_NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Identification required"
                                        className="w-full px-8 py-6 bg-bg-secondary/20 border border-glass-border rounded-2xl focus:border-accent outline-none text-text-primary transition-all placeholder:text-text-muted/20 focus:bg-bg-secondary/40 font-mono text-sm uppercase tracking-widest"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="email" className="block text-[11px] font-black uppercase tracking-[0.4em] text-accent ml-1 opacity-70">SIGNAL_ENDPOINT (EMAIL)</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="name@nexus.com"
                                        className="w-full px-8 py-6 bg-bg-secondary/20 border border-glass-border rounded-2xl focus:border-accent outline-none text-text-primary transition-all placeholder:text-text-muted/20 focus:bg-bg-secondary/40 font-mono text-sm tracking-widest"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="service" className="block text-[11px] font-black uppercase tracking-[0.4em] text-accent ml-1 opacity-70">MISSION_TYPE</label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            className="w-full px-8 py-6 bg-bg-secondary/20 border border-glass-border rounded-2xl focus:border-accent outline-none text-text-primary transition-all appearance-none cursor-pointer focus:bg-bg-secondary/40 font-mono text-sm uppercase tracking-widest"
                                        >
                                            <option value="">Select_Category</option>
                                            {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                            <option value="other">Other_Protocol</option>
                                        </select>
                                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-accent opacity-50">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className="block text-[11px] font-black uppercase tracking-[0.4em] text-accent ml-1 opacity-70">ENCODED_MESSAGE</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Transmit mission parameters..."
                                        className="w-full px-8 py-6 bg-bg-secondary/20 border border-glass-border rounded-2xl focus:border-accent outline-none text-text-primary transition-all resize-none placeholder:text-text-muted/20 focus:bg-bg-secondary/40 font-mono text-sm uppercase tracking-widest"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-7 bg-accent text-bg-primary font-black uppercase tracking-[0.5em] text-[11px] rounded-2xl hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-4 shadow-[0_25px_50px_rgba(var(--accent-rgb),0.3)] group"
                                >
                                    <span>Transmit Signal</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </form>

                            {/* Security Status */}
                            <div className="mt-12 flex items-center justify-center space-x-3 text-text-faint">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Signal_Latticing_Encrypted_Secure</span>
                            </div>
                        </div>

                        {/* Telemetry Data (Contact Info) */}
                        <div className="mt-10 grid grid-cols-2 gap-8">
                            <div className="p-8 glass border border-glass-border rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-700"></div>
                                <p className="text-[11px] font-black text-text-faint uppercase tracking-[0.4em] mb-3 opacity-60">Base_Station</p>
                                <p className="text-lg font-black text-text-primary uppercase tracking-tighter">UTC +1 STUDIO</p>
                            </div>
                            <div className="p-8 glass border border-glass-border rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-700"></div>
                                <p className="text-[11px] font-black text-text-faint uppercase tracking-[0.4em] mb-3 opacity-60">Frequency</p>
                                <p className="text-lg font-black text-accent uppercase font-mono tracking-tighter drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]">info@golfwang0x.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
