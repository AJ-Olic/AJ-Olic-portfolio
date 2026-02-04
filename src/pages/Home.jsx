import { RevealOnScroll } from "../components/RevealOnScroll";
import { Link } from "react-router-dom";

const HomePage = () => {
    const aboutExcerpt = "Mechanical engineering student at Northeastern University with a minor in aerospace engineering, combining hands-on engineering experience with analytical problem-solving. From conducting system vulnerability reviews at a nuclear engineering consultancy to CFD analysis of supersonic airfoils, I thrive on tackling complex technical challenges across disciplines.";

    return (
        <section className="min-h-screen flex flex-col justify-center py-20">
            {/* Title at the top */}
            <div className="max-w-6xl mx-auto px-4 w-full mb-12">
                <RevealOnScroll delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] bg-clip-text text-transparent leading-tight">
                        Hi, I'm AJ Olic
                    </h1>
                </RevealOnScroll>
                <RevealOnScroll delay={75}>
                    <p className="text-center text-[#1a3a52]/70 text-lg mt-4">
                        Mechanical Engineer | Problem Solver | Builder
                    </p>
                </RevealOnScroll>
            </div>

            {/* Main content: photo left, about right */}
            <div className="max-w-6xl mx-auto px-4 w-full flex-1 flex flex-col md:flex-row items-center gap-12">
                
                {/* Left: Photo */}
                <RevealOnScroll delay={150} className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-sm">
                        <div className="aspect-square bg-gradient-to-br from-[#0d5a2d]/20 to-[#1a3a52]/20 rounded-lg overflow-hidden border-2 border-[#0d5a2d]/30 flex items-center justify-center">
                            <img 
                                src="/projects-images/ppt-image1.JPG" 
                                alt="AJ Olic" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Right: About section */}
                <RevealOnScroll delay={225} className="w-full md:w-1/2">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1a3a52]">About Me</h2>
                        
                        <p className="text-[#1a3a52]/80 mb-6 leading-relaxed text-lg">
                            {aboutExcerpt}
                        </p>

                        <div className="flex gap-4 flex-wrap mb-8">
                            <Link 
                                to="/about"
                                className="group bg-[#0d5a2d] text-[#f5f1e8] py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(13,90,45,0.4)] flex items-center gap-2"
                            >
                                Full Bio
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                            
                            <Link 
                                to="/experience"
                                className="group bg-[#1a3a52] text-[#f5f1e8] py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(26,58,82,0.4)] flex items-center gap-2"
                            >
                                Experience
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default HomePage;
