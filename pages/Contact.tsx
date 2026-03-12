
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Send, CheckCircle2, Globe, Cpu, Smartphone, Cloud, Code, Zap } from 'lucide-react';

const services = [
    {
        title: "Frontend Websites",
        description: "Premium, high-performance interfaces built with React, Next.js, and GSAP.",
        icon: <Globe className="w-6 h-6" />
    },
    {
        title: "Backend Systems",
        description: "Robust, scalable server-side architectures and secure API integrations.",
        icon: <Code className="w-6 h-6" />
    },
    {
        title: "Fullstack Solutions",
        description: "End-to-end development from database design to polished user interfaces.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile experiences for iOS and Android.",
        icon: <Smartphone className="w-6 h-6" />
    },
    {
        title: "AI Automation",
        description: "Intelligent systems and agentic workflows to optimize your business.",
        icon: <Cpu className="w-6 h-6" />
    },
    {
        title: "Cloud Solutions",
        description: "Architecture, migration, and management on AWS, GCP, and Azure.",
        icon: <Cloud className="w-6 h-6" />
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

            // Simple floating animation for illustration
            gsap.to(illustrationRef.current, {
                y: -20,
                duration: 2,
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
        <div ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 md:px-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-text-primary uppercase mb-6 reveal">
                        Let's <span className="text-accent italic">Build</span><br />Something Great.
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl reveal">
                        Ready to push boundaries? Whether you need a high-end website, a complex backend system,
                        or AI-driven automation, we're here to turn your vision into reality.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Services Grid */}
                    <div className="space-y-12">
                        <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase reveal">Our Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <div key={index} className="service-card p-6 bg-glass-bg border border-glass-border rounded-2xl hover:border-accent transition-all group">
                                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary mb-2 uppercase">{service.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Smart Illustration (SVG based on inspiration images) */}
                        <div ref={illustrationRef} className="hidden lg:block pt-12">
                            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto drop-shadow-[0_0_30px_rgba(154,255,2,0.15)]">
                                {/* Desk Base */}
                                <rect x="50" y="220" width="300" height="10" rx="5" fill="#1A1A1A" />
                                <rect x="80" y="230" width="10" height="50" fill="#1A1A1A" />
                                <rect x="310" y="230" width="10" height="50" fill="#1A1A1A" />

                                {/* Character */}
                                <circle cx="200" cy="120" r="30" fill="#9AFF02" fillOpacity="0.2" />
                                <rect x="180" y="150" width="40" height="60" rx="10" fill="#9AFF02" fillOpacity="0.1" stroke="#9AFF02" strokeWidth="2" />
                                <circle cx="200" cy="120" r="15" fill="#9AFF02" />

                                {/* Floating Elements (representing different services) */}
                                <g className="floating-elements">
                                    <rect x="100" y="50" width="40" height="40" rx="8" fill="#1A1A1A" stroke="#9AFF02" strokeWidth="1" />
                                    <Code className="w-4 h-4 text-accent" x="112" y="62" />

                                    <rect x="260" y="70" width="40" height="40" rx="8" fill="#1A1A1A" stroke="#9AFF02" strokeWidth="1" />
                                    <Smartphone className="w-4 h-4 text-accent" x="272" y="82" />

                                    <rect x="300" y="150" width="30" height="30" rx="6" fill="#1A1A1A" stroke="#9AFF02" strokeWidth="1" />
                                    <Cpu className="w-3 h-3 text-accent" x="309" y="159" />
                                </g>

                                {/* Connected Lines */}
                                <path d="M200 150 L120 70" stroke="#9AFF02" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
                                <path d="M200 150 L280 90" stroke="#9AFF02" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
                                <path d="M220 180 L300 165" stroke="#9AFF02" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
                            </svg>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="reveal">
                        <div className="p-8 md:p-12 bg-glass-bg border border-glass-border rounded-[2.5rem] backdrop-blur-xl relative">
                            <h2 className="text-3xl font-black mb-8 text-text-primary uppercase">Send an Enquiry</h2>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full px-6 py-4 bg-bg-primary/50 border border-glass-border rounded-xl focus:border-accent outline-none text-text-primary transition-colors placeholder:text-text-muted/50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="name@company.com"
                                        className="w-full px-6 py-4 bg-bg-primary/50 border border-glass-border rounded-xl focus:border-accent outline-none text-text-primary transition-colors placeholder:text-text-muted/50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Service Needed</label>
                                    <select
                                        id="service"
                                        className="w-full px-6 py-4 bg-bg-primary/50 border border-glass-border rounded-xl focus:border-accent outline-none text-text-primary transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your project ambition..."
                                        className="w-full px-6 py-4 bg-bg-primary/50 border border-glass-border rounded-xl focus:border-accent outline-none text-text-primary transition-colors resize-none placeholder:text-text-muted/50"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-accent text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                                >
                                    <span>Transmit Query</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>

                            {/* Security Badge */}
                            <div className="mt-8 flex items-center justify-center space-x-2 text-text-muted">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                <span className="text-[10px] uppercase tracking-widest">End-to-End Encrypted Communication</span>
                            </div>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-6 bg-glass-bg border border-glass-border rounded-2xl">
                                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Direct Line</p>
                                <p className="text-sm font-bold text-text-primary uppercase">UTC +1 STUDIO</p>
                            </div>
                            <div className="p-6 bg-glass-bg border border-glass-border rounded-2xl">
                                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">E-Mail</p>
                                <p className="text-sm font-bold text-accent uppercase">info@golfwang0x@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
