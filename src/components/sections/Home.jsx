import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4 max-w-3xl mx-auto">
                <RevealOnScroll delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                        Hi, I'm Ryan Mahshie
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll delay={75}>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a backend engineer who likes building things that work at scale.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={150}>
                    <div className="flex justify-center">
                        <a 
                            href="#experience"
                            className="group bg-purple-500 text-white py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5
                             hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center gap-2"
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