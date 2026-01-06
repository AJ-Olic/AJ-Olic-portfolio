import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    
    const skills = ["Go", "Python", "Java", "Azure", "Docker", "LangGraph", "Kubernetes"];

    return (
        <section 
            id="about" 
            className="py-20">
          
            <div className="max-w-3xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> 
                        About Me
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={50}>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        I'm a computer science student at Northeastern University with an AI concentration and a 3.91 GPA. 
                        I have about a year of real backend engineering experience across different industries and company sizes—not 
                        typical intern work, but as a major contributor shipping production code.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                            >
                               {tech} 
                            </span>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
          
        </section>
    );
};