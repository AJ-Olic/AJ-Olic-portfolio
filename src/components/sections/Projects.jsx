import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Projects = () => {
    const projects = [
        {
            name: "Supersonic Rivet Deformation",
            description: "CFD analysis exploring how rivet protrusions impact aerodynamics and fuel efficiency for supersonic commercial travel. Modeled a Concorde airfoil with rivet deformations using AutoCAD and SolidWorks, then analyzed in ANSYS Fluent to study shockwave behavior and drag coefficients.",
            tech: ["ANSYS Fluent", "AutoCAD", "SolidWorks", "CFD"],
            id: "supersonic-rivet-deformation"
        },
        {
            name: "Lasercut Challenger Model",
            description: "Designed a laser-cut model of the Space Shuttle Challenger for an engineering capstone project. Created mortise and tenon joints in AutoCAD, built sizing templates for laser cutter tolerances, and integrated with an Arduino-based interactive learning system.",
            tech: ["AutoCAD", "Arduino", "C++", "Laser Cutting"],
            id: "lasercut-challenger"
        },
        {
            name: "Autonomous Temperature Sensor",
            description: "Led design of an autonomous radiator controller during my semester in London. Built a 3D-printed enclosure housing a temperature sensor, LCD, and DC motor to automatically adjust radiator valves based on preset temperatures.",
            tech: ["Arduino", "C++", "3D Printing", "AutoCAD"],
            id: "autonomous-temperature-sensor"
        },
        {
            name: "South End Urban Study",
            description: "Sociological investigation of Boston's South End neighborhood examining homelessness, gentrification, and community resources. Created interactive maps documenting parks, community gardens, medical facilities, and homeless resources.",
            tech: ["Research", "GIS Mapping", "Field Work"],
            id: "south-end-urban-study"
        }
    ];
    
    return (
        <section 
            id="projects" 
            className="py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] bg-clip-text text-transparent"> 
                        Projects
                    </h2>
                </RevealOnScroll>

                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index} delay={50 + index * 50}>
                            <div className={`py-6 ${index !== 0 ? 'border-t border-[#1a3a52]/10' : ''}`}>
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#1a3a52]">{project.name}</h3>
                                    <div className="flex gap-3">
                                        <Link 
                                            to={`/projects/${project.id}`}
                                            className="btn-interactive text-[#0d5a2d]"
                                        > 
                                            View Details <span className="arrow">→</span>
                                        </Link>
                                    </div>
                                </div>
                                
                                <p className="text-[#1a3a52]/80 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="bg-[#0d5a2d]/10 text-[#0d5a2d] py-1 px-3 rounded-full text-sm hover:bg-[#0d5a2d]/20
                                                        hover:shadow-[0_2px_8px_rgba(13,90,45,0.2)] transition-all"
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
