import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

export const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f5f1e8] text-[#1a3a52]">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {menuOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 opacity-0 animate-fade-in"></div>
            )}
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            
            <main className="pt-16">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
};
