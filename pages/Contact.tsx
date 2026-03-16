
import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { Send, CheckCircle2, Globe, Cpu, Smartphone, Cloud, Code, Zap } from 'lucide-react';

const services = [
    {
        title: "Web Development",
        description: "We build beautiful, fast, and easy-to-use websites. We focus on making sure your site looks great on every screen and works perfectly for your visitors.",
        icon: <Globe className="w-6 h-6" />
    },
    {
        title: "Software Engineering",
        description: "We create reliable and powerful systems that handle the technical heavy lifting, making sure your application stays fast and secure as your business grows.",
        icon: <Code className="w-6 h-6" />
    },
    {
        title: "AI & Automation",
        description: "We help you use artificial intelligence to save time and work smarter. We build tools that can learn and automate tasks, specialized for your business.",
        icon: <Cpu className="w-6 h-6" />
    },
    {
        title: "Mobile App Development",
        description: "We design and build custom apps for iPhone and Android. Our apps are smooth, reliable, and provide a great experience for your customers on the go.",
        icon: <Smartphone className="w-6 h-6" />
    },
    {
        title: "Hosting & Cloud Services",
        description: "We make sure your website or app is always online and safe. We handle all the technical setup and maintenance so you can focus on your business.",
        icon: <Cloud className="w-6 h-6" />
    },
    {
        title: "Full-Service Solutions",
        description: "From the initial idea to the final product, we handle everything. We take care of both the design and the technical systems running behind the scenes.",
        icon: <Zap className="w-6 h-6" />
    }
];

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const illustrationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Content reveal
            gsap.to(".reveal-content", {
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out"
            });

            // Service cards reveal
            gsap.to(".service-card", {
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.2)",
                delay: 0.6
            });

            // Gentle floating/breath animation for the whole hub
            gsap.to(illustrationRef.current, {
                y: -40,
                rotation: 2,
                duration: 12,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Transmission received. We will respond shortly.");
    };

    return (
        <div ref={containerRef} className="min-h-screen pt-24 md:pt-40 pb-24 px-6 md:px-32 relative overflow-hidden bg-bg-primary">
            <SEO
                title="Contact GOLFWANG0X | Web Development Services in Nigeria"
                description="Get in touch with GOLFWANG0X for premium web development, software engineering, and technical writing services. Let's build your next digital masterpiece."
            />

            {/* MEGA SCALE BACKGROUND HUB (Behind everything) */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
                <div ref={illustrationRef} className="relative scale-[1.5] md:scale-[2.5] lg:scale-[4.0] opacity-30">
                    <svg width="900" height="650" viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="megaCoreGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
                                <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                            </radialGradient>
                            <filter id="megaGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="12" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Central Core */}
                        <g className="animate-pulse">
                            <circle cx="450" cy="325" r="180" fill="url(#megaCoreGradient)" opacity="0.4" />
                            <circle cx="450" cy="325" r="60" fill="var(--accent)" filter="url(#megaGlow)" />
                        </g>

                        {/* Advanced Orbital Rings */}
                        <g opacity="0.25">
                            <ellipse cx="450" cy="325" rx="450" ry="180" stroke="var(--accent)" strokeWidth="0.5" className="origin-center animate-[spin_60s_linear_infinite]" />
                            <ellipse cx="450" cy="325" rx="180" ry="450" stroke="var(--accent)" strokeWidth="0.5" className="origin-center animate-[spin_55s_linear_infinite_reverse]" />
                            <ellipse cx="450" cy="325" rx="350" ry="350" stroke="var(--accent)" strokeWidth="1" strokeDasharray="30 60" className="origin-center animate-[spin_100s_linear_infinite]" />
                            <circle cx="450" cy="325" r="140" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="10 20" className="animate-spin-slow" />
                        </g>

                        {/* Simple Background Nodes */}
                        <g className="nodes">
                            {[
                                { cx: 150, cy: 150, label: "Web", delay: "0s", dur: "2.5s" },
                                { cx: 750, cy: 150, label: "App", delay: "0.5s", dur: "3s" },
                                { cx: 800, cy: 450, label: "AI", delay: "1s", dur: "2.2s" },
                                { cx: 100, cy: 480, label: "Cloud", delay: "1.5s", dur: "2.8s" },
                                { cx: 450, cy: 50, label: "Design", delay: "0.2s", dur: "3.5s" },
                                { cx: 450, cy: 600, label: "Systems", delay: "0.8s", dur: "4s" },
                                { cx: 50, cy: 325, label: "Security", delay: "1.2s", dur: "2s" },
                                { cx: 850, cy: 325, label: "Speed", delay: "0.4s", dur: "2.5s" }
                            ].map((node, i) => (
                                <g key={i} className="node-group">
                                    <circle cx={node.cx} cy={node.cy} r="22" fill="var(--bg-primary)" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
                                    <path d={`M450 325 L${node.cx} ${node.cy}`} stroke="var(--accent)" strokeWidth="1" strokeDasharray="10 20" opacity="0.1" />
                                    <circle cx={node.cx} cy={node.cy} r="5" fill="var(--accent)" filter="url(#megaGlow)">
                                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin={node.delay} />
                                    </circle>
                                    <circle cx="0" cy="0" r="2.5" fill="var(--accent)">
                                        <animateMotion path={`M450 325 L${node.cx} ${node.cy}`} dur={node.dur} repeatCount="indefinite" begin={node.delay} />
                                    </circle>
                                </g>
                            ))}
                        </g>
                    </svg>
                </div>
            </div>

            {/* Fog/Vignette Overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary/80 z-[1] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-16 md:mb-32">
                    <div className="flex items-center space-x-3 mb-10 reveal-content opacity-0 translate-y-8">
                        <Zap className="w-5 h-5 text-accent animate-pulse" />
                        <span className="text-[11px] font-bold text-accent tracking-[0.6em] uppercase">SYSTEM_ONLINE</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-text-primary uppercase mb-10 reveal-content opacity-0 translate-y-8 leading-[0.8]">
                        Build Your <br /><span className="text-accent italic drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.4)]">Masterpiece.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-text-secondary max-w-3xl reveal-content opacity-0 translate-y-8 leading-tight font-medium tracking-tight">
                        We build high-quality digital products for brands that value excellence.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-40 items-start">
                    {/* EXPERTISE GRID */}
                    <div>
                        <h2 className="text-[11px] font-bold tracking-[0.5em] text-text-faint uppercase mb-12 reveal-content opacity-0 translate-y-4">[ 01 ] WHAT WE DO</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="service-card p-10 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] hover:border-accent/40 shadow-2xl transition-all duration-500 group opacity-0 translate-y-12">
                                    <div className="text-accent mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tighter">{service.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed font-medium opacity-80">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="reveal-content opacity-0 translate-y-12">
                        <div className="p-10 md:p-16 bg-black/60 border border-white/10 rounded-[4rem] backdrop-blur-3xl relative shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
                            <h2 className="text-[11px] font-bold tracking-[0.5em] text-text-faint uppercase mb-12">[ 02 ] GET IN TOUCH</h2>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Your name"
                                        className="w-full px-8 py-6 bg-white/[0.03] border border-white/5 rounded-2xl focus:border-accent/40 outline-none text-text-primary transition-all placeholder:text-text-muted/20 font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="email@example.com"
                                        className="w-full px-8 py-6 bg-white/[0.03] border border-white/5 rounded-2xl focus:border-accent/40 outline-none text-text-primary transition-all placeholder:text-text-muted/20 font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">How can we help?</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        className="w-full px-8 py-6 bg-white/[0.03] border border-white/5 rounded-2xl focus:border-accent/40 outline-none text-text-primary transition-all resize-none placeholder:text-text-muted/20 font-medium"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-7 bg-accent text-black font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-white transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center space-x-3 shadow-xl shadow-accent/20 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <span className="relative z-10">Submit Inquiry</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform relative z-10" />
                                </button>
                            </form>

                            <div className="mt-14 flex items-center justify-center space-x-4 text-text-faint">
                                <span className="w-12 h-[1px] bg-white/5"></span>
                                <CheckCircle2 className="w-5 h-5 text-accent/50" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Securely Encrypted</span>
                                <span className="w-12 h-[1px] bg-white/5"></span>
                            </div>
                        </div>

                        {/* SECONDARY INFO */}
                        <div className="mt-8 flex flex-col md:flex-row gap-4">
                            <div className="flex-1 p-8 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl">
                                <p className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-2">Availability</p>
                                <div className="flex items-center space-x-3">
                                    <span className="w-3 h-3 rounded-full bg-accent animate-ping absolute"></span>
                                    <span className="w-3 h-3 rounded-full bg-accent relative"></span>
                                    <p className="text-xl font-bold text-text-primary uppercase tracking-tighter">Accepting new projects</p>
                                </div>
                            </div>
                            <div className="flex-1 p-8 bg-accent/5 backdrop-blur-2xl border border-accent/10 rounded-3xl">
                                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Email us directly</p>
                                <p className="text-xl font-black text-text-primary uppercase font-mono tracking-tighter">info@golfwang0x.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
