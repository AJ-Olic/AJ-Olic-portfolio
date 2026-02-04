export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    // Handle click outside to close menu
    const handleBackdropClick = (e) => {
        // Check if the click target is the backdrop (not the menu items)
        if (e.target === e.currentTarget) {
            setMenuOpen(false);
        }
    };

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Experience", path: "/experience" },
        { label: "Projects", path: "/projects" },
        { label: "Contact", path: "/contact" }
    ];

    return (
        <div 
            className={`fixed top-0 left-0 w-full bg-[rgba(245,241,232,0.95)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out

                         ${
                            menuOpen ? "h-screen opacity-100 pointer-events-auto" 
                            : "h-0 opacity-0 pointer-events-none"
                         }
                       `}
            onClick={handleBackdropClick}
        >
            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-[#1a3a52] text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {navLinks.map((link) => (
                <a 
                    key={link.path}
                    href={link.path}
                    onClick={() => setMenuOpen(false)} 
                    className={`text-2xl font-semibold text-[#1a3a52] my-4 transform transition-transform duration-300
                                ${
                                    menuOpen 
                                        ? "opacity-100 translate-y-0" 
                                        : "opacity-0 translate-y-5"
                                }
                    `}
                >             
                    {link.label}
                </a>
            ))}
        </div>
    );
};