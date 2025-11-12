import { useState } from "react";
import redStudio from "../../assets/images/red-studio.png";
import ContactModal from "../contacts/ContactModal";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <a href="#home">
                <div className="flex items-center">
                    <img
                    src={redStudio}
                    alt="Red Studio"
                    className="h-12 drop-shadow-[5px_5px_10px_white]"
                    />
                </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                <a
                    href="#home"
                    className="text-white hover:text-red-600 transition-colors font-medium"
                >
                    Home
                </a>
                <a
                    href="#porto"
                    className="text-white hover:text-red-600 transition-colors font-medium"
                >
                    Works
                </a>
                <a
                    href="#service"
                    className="text-white hover:text-red-600 transition-colors font-medium"
                >
                    Service
                </a>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                    Get in Touch
                </button>
                </div>

                {/* Mobile button */}
                <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? (
                    // Close icon
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                ) : (
                    // Hamburger icon
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                )}
                </button>
            </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
            className={`md:hidden bg-black/90 backdrop-blur-md transition-all duration-300 ${
                isMenuOpen
                ? "max-h-60 opacity-100 py-4 border-t border-white/10"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
            >
            <div className="flex flex-col items-center space-y-4 text-white font-medium">
                <a
                href="#home"
                className="hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                >
                Home
                </a>
                <a
                href="#porto"
                className="hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                >
                Works
                </a>
                <a
                href="#service"
                className="hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                >
                Service
                </a>
                <button
                onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                }}
                className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                Get in Touch
                </button>
            </div>
            </div>
        </nav>

        {/* Contact Modal */}
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
}
