import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

    useEffect(() => {
        // Determine active section from current path
        const path = location.pathname;
        if (path === "/") {
            setActiveSection("home");
        } else {
            setActiveSection(path.slice(1)); // Remove leading slash
        }
    }, [location]);

    const navLinks = [
        { id: "home", label: "Home", path: "/" },
        { id: "about", label: "About", path: "/about" },
        { id: "experience", label: "Experience", path: "/experience" },
        { id: "projects", label: "Projects", path: "/projects" },
        { id: "contact", label: "Contact", path: "/contact" }
    ];

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(245,241,232,0.95)] backdrop-blur-lg border-b border-[#1a3a52]/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="/" className="font-mono text-xl font-bold text-[#1a3a52]"> 
                        {" "}
                        AJ-Olic<span className="text-[#0d5a2d]">.portfolio</span> 
                    </a>

                    <div 
                        className={`w-7 h-5 relative cursor-pointer z-40 md:hidden transition-opacity duration-200 ${
                            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                        onClick={() => setMenuOpen(true)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8 relative">
                        {navLinks.map((link) => (
                            <a 
                                key={link.id}
                                href={link.path}
                                className={`relative py-2 transition-colors duration-300 ${
                                    activeSection === link.id 
                                        ? "text-[#0d5a2d]" 
                                        : "text-[#1a3a52]/70 hover:text-[#1a3a52]"
                                }`}
                            > 
                                {link.label}
                                {activeSection === link.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] rounded-full nav-indicator" />
                                )}
                            </a>
                        ))}
                    </div>
                    
                </div>

            </div>
        
        </nav>
    );
};