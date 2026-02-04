import { RevealOnScroll } from "../components/RevealOnScroll";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] bg-clip-text text-transparent"> 
                        Projects
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <RevealOnScroll key={project.id} delay={50 + idx * 50}>
                            <Link to={`/projects/${project.id}`} className="group block relative overflow-hidden rounded-lg">
                                <div className="aspect-[4/3] bg-[#e9efe9] rounded-lg overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => { e.target.style.objectFit = 'cover'; e.target.style.background = '#f3f6f3'; e.target.src = ''; }}
                                    />

                                    <div className="absolute left-4 bottom-4 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-md max-w-[80%] translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-lg font-semibold text-[#1a3a52]">{project.name}</h3>
                                        <div className="text-sm text-[#1a3a52]/80">{project.tech.slice(0,3).join(', ')}{project.tech.length>3? '...' : ''}</div>
                                    </div>
                                </div>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
