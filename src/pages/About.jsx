import { RevealOnScroll } from "../components/RevealOnScroll";

const AboutPage = () => {
    
    const skills = ["ANSYS (Fluent and Mechanical)","Matlab", "Solidworks", "Autocad", "C++", "3D Printing", "Lasercutting", "Soldering"];

    return (
        <section className="py-20">
          
            <div className="max-w-3xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] bg-clip-text text-transparent"> 
                        About Me
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={50}>
                    <div className="text-[#1a3a52]/80 mb-6 leading-relaxed space-y-4">
                        <p>I'm a third-year mechanical engineering student at Northeastern University with a minor in aerospace engineering (GPA: 3.65, Dean's List). My coursework spans CFD, heat transfer, fluid mechanics, thermodynamics, and aeronautical propulsion—complemented by hands-on experience in SolidWorks, ANSYS Fluent, AutoCAD, MATLAB, and C++.</p>
                        <p>Most recently, I completed a co-op at MPR Associates, a nuclear engineering consultancy, where I conducted system vulnerability reviews analyzing 10+ years of plant data, designed issue-tracking systems using GitLab, and verified engineering calculations for seismic analysis and structural loads. Prior internships at Summit Engineers and Stantec gave me experience in electrical system design and architectural engineering.</p>
                        <p>My project experience includes leading CFD analysis of supersonic rivet deformation on Concorde-style airfoils, building RC aircraft from scratch with Northeastern's Fixed Wing club, and designing an autonomous temperature sensor using Arduino and C++.</p>
                        <p>Beyond engineering, I've traveled to 60 countries across 6 continents, serve as a USSF-certified soccer referee, and have coached youth soccer teams. I bring the same teamwork, quick decision-making, and leadership to my engineering work.</p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-[#0d5a2d]/10 text-[#0d5a2d] py-1 px-3 rounded-full text-sm hover:bg-[#0d5a2d]/20
                                                hover:shadow-[0_2px_8px_rgba(13,90,45,0.2)] transition"
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

export default AboutPage;
