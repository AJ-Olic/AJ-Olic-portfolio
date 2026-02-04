import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { useState } from "react";

const MapKeyLegend = () => (
    <div className="bg-[#f5f1e8] border border-[#1a3a52]/20 rounded-lg p-4 shadow-sm">
        <h4 className="font-bold text-[#1a3a52] mb-3 text-sm uppercase tracking-wide">Map Key</h4>
        <div className="space-y-2">
            <div className="flex items-center gap-3">
                <div className="w-6 h-4 bg-green-500 rounded-sm border border-green-600"></div>
                <span className="text-sm text-[#1a3a52]">Parks</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-6 h-4 bg-blue-500 rounded-sm border border-blue-600"></div>
                <span className="text-sm text-[#1a3a52]">Community Gardens</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-6 h-4 bg-red-500 rounded-sm border border-red-600"></div>
                <span className="text-sm text-[#1a3a52]">BU Medical Campus (Hospital)</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-6 h-4 bg-purple-500 rounded-sm border border-purple-600"></div>
                <span className="text-sm text-[#1a3a52]">Notable Locations</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-6 h-4 bg-yellow-400 rounded-sm border border-yellow-500"></div>
                <span className="text-sm text-[#1a3a52]">Homeless Resources</span>
            </div>
        </div>
    </div>
);

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    const [showVideo, setShowVideo] = useState(false);

    if (!project) {
        return (
            <div className="py-20 max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold">Project not found</h2>
                <Link to="/projects" className="text-[#0d5a2d] underline mt-4 block">Back to Projects</Link>
            </div>
        );
    }

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                        <div className="text-sm text-[#0d5a2d]">{project.tech.join(' • ')}</div>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={75}>
                    <p className="text-[#1a3a52]/80 leading-relaxed mb-6">{project.description}</p>
                </RevealOnScroll>

                {project.links && project.links.length > 0 && (
                    <RevealOnScroll delay={150}>
                        <div className="flex gap-3 flex-wrap mb-6">
                            {project.links.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0d5a2d]/10 text-[#0d5a2d] py-2 px-4 rounded">{link.label}</a>
                            ))}
                        </div>
                    </RevealOnScroll>
                )}

                {project.hasDemo && project.video && (
                    <div>
                        <button onClick={() => setShowVideo(true)} className="inline-block bg-[#0d5a2d] text-[#f5f1e8] py-2 px-4 rounded">Watch Demo</button>
                    </div>
                )}

                {showVideo && (
                    <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-20 p-4 overflow-y-auto">
                        <div className="relative w-full max-w-5xl mx-auto bg-[#f5f1e8] rounded-lg overflow-hidden max-h-[80vh]">
                            <button onClick={() => setShowVideo(false)} className="absolute top-3 right-3 bg-[#0d5a2d]/80 text-[#f5f1e8] p-2.5 rounded-full border border-[#0d5a2d] shadow-lg z-10">×</button>
                            <div className="aspect-video">
                                <video src={project.video} className="w-full h-full" controls autoPlay preload="auto" playsInline />
                            </div>
                        </div>
                    </div>
                )}

                {project.slides && project.slides.length > 0 && (
                    <div className="mt-8 space-y-8">
                        {project.slides.map((slide, slideIdx) => (
                            <div key={slideIdx} className="clear-both">
                                <h3 className="text-2xl font-bold mb-3 text-[#0d5a2d]">{slide.title}</h3>
                                <div>
                                    {slide.content.map((block, blockIdx) => (
                                        <div key={blockIdx} className="mb-4">
                                            {(block.image || block.mapKey) && (
                                                <div className={`w-full sm:w-2/5 mb-3 sm:mb-2 ${blockIdx % 2 === 0 ? 'sm:float-left sm:mr-4' : 'sm:float-right sm:ml-4'}`}>
                                                    {block.mapKey ? (
                                                        <MapKeyLegend />
                                                    ) : (
                                                        <div className="rounded-lg overflow-hidden">
                                                            <img src={block.image} alt={block.label || slide.title} className="w-full h-auto" onError={(e)=>{e.target.style.display='none'}} />
                                                        </div>
                                                    )}
                                                    {block.label && (
                                                        <p className="text-sm text-[#0d5a2d] italic mt-1">{block.label}</p>
                                                    )}
                                                </div>
                                            )}
                                            {block.text && (
                                                <p className="text-[#1a3a52]/80 leading-relaxed">{block.text}</p>
                                            )}
                                        </div>
                                    ))}
                                    <div className="clear-both"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8">
                    <Link to="/projects" className="inline-block bg-[#0d5a2d] text-[#f5f1e8] py-2 px-4 rounded">Back</Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
