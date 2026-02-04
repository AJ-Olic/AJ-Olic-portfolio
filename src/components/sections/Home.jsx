import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4 max-w-3xl mx-auto">
                <RevealOnScroll delay={0}>
                    <img 
                        src="/projects-images/ppt-image1.JPG" 
                        alt="AJ Olic" 
                        className="w-48 h-48 rounded-full object-cover mx-auto mb-8 shadow-lg"
                    />
                </RevealOnScroll>

                <RevealOnScroll delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] bg-clip-text text-transparent leading-right">Hi, I'm AJ Olic</h1>
                </RevealOnScroll>

                <RevealOnScroll delay={75}>
                    <p className="text-[#1a3a52]/70 text-lg mb-8 max-w-lg mx-auto">
                    I'm a mechanical engineer with a passion for problem solving.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={150}>
                    <div className="flex justify-center">
                        <a 
                            href="#experience"
                            className="group bg-[#0d5a2d] text-[#f5f1e8] py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5
                             hover:shadow-[0_0_15px_rgba(13,90,45,0.4)] flex items-center gap-2"
                        >
                            View Experience
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};