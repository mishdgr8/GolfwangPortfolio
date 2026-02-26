import React from 'react';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import { projectsData } from '../data';

const Projects: React.FC = () => {
    return (
        <div className="pt-24 pb-24 relative min-h-screen overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 reveal">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Code className="w-6 h-6 text-accent" />
                        </div>
                        <span className="text-[11px] font-black text-text-muted tracking-[0.5em] uppercase">Dev Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
                        Visual <br /><span className="text-text-faint">Interfaces.</span>
                    </h1>
                    <p className="max-w-2xl text-text-muted text-xl font-medium tracking-tight leading-relaxed">
                        A showcase of functional architectures and aesthetic frontend systems. Engineered for scale, designed for impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {projectsData.map((project, idx) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col h-full reveal rounded-[2rem] glass border border-glass-border hover:border-accent/40 transition-all duration-700 hover:shadow-2xl overflow-hidden"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {/* IMAGE WRAPPER */}
                            <div className="aspect-[16/10] overflow-hidden relative shrink-0 border-b border-glass-border">
                                {project.demoUrl ? (
                                    <>
                                        <div className="absolute inset-0 z-10 bg-bg-primary/40 group-hover:bg-transparent transition-colors duration-700 pointer-events-none flex items-center justify-center">
                                            <div className="px-4 py-2 bg-accent/20 backdrop-blur-md border border-accent/40 rounded-full text-[8px] font-black text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                                Interactive Preview
                                            </div>
                                        </div>
                                        <iframe
                                            src={project.demoUrl}
                                            title={project.title}
                                            className="w-[200%] h-[200%] origin-top-left scale-[0.5] group-hover:scale-[0.52] transition-transform duration-1000 border-none"
                                            loading="lazy"
                                            sandbox="allow-scripts allow-same-origin"
                                        />
                                    </>
                                ) : (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                )}

                                {/* Date Tag */}
                                <div className="absolute top-6 right-6">
                                    <span className="px-3 py-1 bg-glass-bg backdrop-blur-md border border-glass-border text-[9px] font-black uppercase tracking-widest text-text-secondary rounded-sm">
                                        {project.date}
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-8 md:p-10 flex flex-col flex-1 bg-bg-primary/50 backdrop-blur-sm">
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-[9px] font-black uppercase tracking-[0.2em] text-accent/80 bg-accent/5 px-2.5 py-1 rounded-sm border border-accent/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl font-black text-text-primary group-hover:text-accent transition-colors leading-[1.1] tracking-tight mb-4 uppercase">
                                    {project.title}
                                </h3>

                                <p className="text-text-muted text-base line-clamp-3 leading-relaxed mb-8 flex-1">
                                    {project.longDescription || project.excerpt}
                                </p>

                                {/* ACTION BUTTONS */}
                                <div className="flex items-center gap-4 pt-8 border-t border-glass-border mt-auto">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center py-3 px-6 bg-accent text-bg-primary text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]"
                                        >
                                            Live Demo <ExternalLink className="w-3.5 h-3.5 ml-2" />
                                        </a>
                                    )}
                                    {project.repoUrl && (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center py-3 px-6 glass border border-glass-border text-text-primary text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-glass-bg transition-colors"
                                        >
                                            Source Code <Github className="w-3.5 h-3.5 ml-2" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Let's Work Together Banner */}
                <div className="mt-32 p-12 glass border border-glass-border rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 reveal">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase mb-4">Ready to build?</h3>
                        <p className="text-text-muted font-medium">Available for frontend & full-stack opportunities.</p>
                    </div>
                    <a
                        href="mailto:contact@golfwang0x.xyz"
                        className="w-full md:w-auto px-10 py-5 bg-text-primary text-bg-primary rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-colors flex items-center justify-center whitespace-nowrap z-10"
                    >
                        Start Transmission <ArrowRight className="w-4 h-4 ml-3" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
