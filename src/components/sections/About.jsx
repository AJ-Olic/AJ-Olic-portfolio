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
                    Over the past year, I've worked as a backend engineer across different industries and company sizes, 
                    owning features and shipping production code. I work primarily in Go and Python, with experience across 
                    AWS and deep work in Azure infrastructure. I've also been building with agentic AI frameworks since 
                    before the tooling matured.
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