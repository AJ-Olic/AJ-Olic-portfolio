import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const Projects = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    
    // Close modal when Escape key is pressed
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setShowVideoModal(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const projects = [
        {
            name: "LawSearch AI",
            description: "An AI-powered tool built for a lobbyist client to search federal spending bills. Parses 2,000+ page bills into 14 specialized vector stores by committee, routes queries via LLM, and combines results through RAG map-reduce. Built pre-MCP, pre-evals - I tuned retrieval parameters through manual testing. Reduced response time from 3 minutes to 30 seconds and cut research time by 90%.",
            tech: ["Python", "LangChain", "LangGraph", "ChromaDB", "requests", "ChatGPT API", "Congressional API"],
            links: [
                { label: "GitHub", url: "https://github.com/RMahshie/lawsearchprod" },
            ],
            hasDemo: true
        },
        {
            name: "Sonara",
            description: "A room acoustics analyzer for improving speaker setups and sound treatment. Play a sine sweep through your speakers, record with a USB mic, and get your room's frequency response with calculated room modes. Uses sweep deconvolution and fractional octave smoothing for accurate measurements. Built with Go and goroutines for audio processing, deployed on Railway with Docker.",
            tech: ["Go", "Python", "Huma", "PostgreSQL", "Docker", "WebRTC", "AWS", "React"],
            links: [
                { label: "GitHub", url: "https://github.com/RMahshie/sonara" },
                { label: "Try It Out", url: "https://sonara.up.railway.app/" },
            ],
            hasDemo: false
        },
        {
            name: "Nitpick",
            description: "A GitHub Action that provides AI-powered code reviews on pull requests, automatically routing between lightweight reviews for simple changes and agentic reviews for complex cross-file modifications that trace code flow and dependencies.",
            tech: ["Claude Agent SDK", "LangChain", "OpenAI API", "GitHub Actions", "Pydantic", "Python"],
            links: [
                { label: "GitHub", url: "https://github.com/RMahshie/codereviewer" },
            ],
            hasDemo: false
        },
        {
            name: "This Website",
            description: "I'm not a frontend engineer, but I built this site to showcase my work. It's a simple React app with Tailwind CSS, deployed on GitHub Pages.",
            tech: ["React", "Tailwind CSS"],
            links: [],
            hasDemo: false
        }
    ];
    
    return (
        <section 
            id="projects" 
            className="py-20"
        >
            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-20 p-4 overflow-y-auto">
                    <div className="relative w-full max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden max-h-[80vh]">
                        {/* Close button positioned over video */}
                        <button 
                            onClick={() => setShowVideoModal(false)}
                            className="absolute top-3 right-3 bg-purple-600/80 text-white p-2.5 rounded-full 
                                     border border-purple-500 shadow-lg z-10
                                     hover:bg-purple-700 hover:scale-110 transition-all duration-200"
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="aspect-video">
                            <video 
                                src="/LawSearchAI-Demo.mov" 
                                className="w-full h-full" 
                                controls
                                autoPlay
                                preload="auto"
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
          
            <div className="max-w-3xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> 
                        Projects
                    </h2>
                </RevealOnScroll>

                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index} delay={50 + index * 50}>
                            <div className={`py-6 ${index !== 0 ? 'border-t border-gray-800' : ''}`}>
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                    <div className="flex gap-3">
                                        {project.links.map((link, linkIndex) => (
                                            <a 
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-interactive text-purple-400"
                                            > 
                                                {link.label} <span className="arrow">→</span>
                                            </a>
                                        ))}
                                        {project.hasDemo && (
                                            <button 
                                                onClick={() => setShowVideoModal(true)}
                                                className="btn-interactive text-purple-400 cursor-pointer"
                                            > 
                                                Watch Demo <span className="arrow">→</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all"
                                        >
                                            {tech} 
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
          
        </section>
    );
};
