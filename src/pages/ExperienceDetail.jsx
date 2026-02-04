import { useParams, Link } from "react-router-dom";
import { experiences } from "../data/experiences";
import { RevealOnScroll } from "../components/RevealOnScroll";

const ExperienceDetail = () => {
    const { id } = useParams();
    const exp = experiences.find(e => e.id === id);

    if (!exp) {
        return (
            <div className="py-20 max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold">Experience not found</h2>
                <Link to="/experience" className="text-[#0d5a2d] underline mt-4 block">Back to Experience</Link>
            </div>
        );
    }

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold mb-2">{exp.company}</h2>
                        <div className="text-sm text-[#0d5a2d]">{exp.title} • {exp.dates}</div>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={75}>
                    <div className="rounded-lg overflow-hidden mb-6">
                        <img src={exp.image} alt={exp.company} className="w-full h-64 object-cover" onError={(e)=>{e.target.style.display='none'}} />
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={150}>
                    <p className="text-[#1a3a52]/80 leading-relaxed mb-6">{exp.description}</p>
                </RevealOnScroll>

                {exp.companyUrl && (
                    <RevealOnScroll delay={200}>
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-[#0d5a2d] underline">Visit company page</a>
                    </RevealOnScroll>
                )}

                <div className="mt-8">
                    <Link to="/experience" className="inline-block bg-[#0d5a2d] text-[#f5f1e8] py-2 px-4 rounded">Back</Link>
                </div>
            </div>
        </section>
    );
};

export default ExperienceDetail;
