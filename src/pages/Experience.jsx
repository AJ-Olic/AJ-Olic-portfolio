import { RevealOnScroll } from "../components/RevealOnScroll";
import { experiences } from "../data/experiences";

const ExperiencePage = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] bg-clip-text text-transparent"> 
                        Experience
                    </h2>
                </RevealOnScroll>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <RevealOnScroll key={exp.id} delay={50 + index * 50}>
                            <div className={`${index !== 0 ? 'border-t border-[#1a3a52]/10 pt-6' : ''}`}>
                                <h3 className="text-xl font-semibold text-[#1a3a52] mb-1">{exp.company}</h3>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm text-[#1a3a52]">{exp.title}</span>
                                    <span className="text-sm text-[#0d5a2d]">{exp.dates}</span>
                                </div>
                                <p className="text-[#1a3a52]/80 leading-relaxed">{exp.description}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperiencePage;
