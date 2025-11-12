import { useState } from "react";
import ServiceDetail from "../services/ServiceDetail";

export default function Services() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    if (selectedService) {
        return (
        <ServiceDetail
            serviceId={selectedService}
            onBack={() => setSelectedService(null)}
            onServiceChange={(id) => setSelectedService(id)}
        />
        );
    }

    return (
        <section
        id="service"
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden rounded-4xl pb-16 sm:pb-20"
        >
        {/* Subtle light gradients */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.5),_transparent_50%)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_rgba(255,240,220,0.4),_transparent_50%)]" />

        <h1 className="pt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-10 sm:mb-16 lg:mb-20 tracking-tight text-shadow-lg text-shadow-red-900 relative z-10 text-center">
            OUR SERVICES
        </h1>

        <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-0">
            <div
            className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-y-16 gap-x-6 md:gap-x-10 lg:gap-x-32 relative"
            style={{ zIndex: 1 }}
            >
            {/* Card 1: Social Media Management */}
            <button
                type="button"
                onClick={() => setSelectedService("social-media-management")}
                className="text-left"
            >
                <div className="h-full backdrop-blur-sm rounded-3xl border border-red-900 p-6 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 lg:hover:-translate-y-1 cursor-pointer bg-black/10">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#b85450"
                        className="size-7 sm:size-8"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    </div>
                    <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2 sm:mb-3 leading-tight">
                        Social Media
                        <br />
                        Management
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-sm sm:text-base leading-relaxed">
                    We create and manage content for your social media platforms.
                </p>
                </div>
            </button>

            {/* Card 2: Brand Development */}
            <button
                type="button"
                onClick={() => setSelectedService("brand-development")}
                className="text-left"
            >
                <div className="h-full backdrop-blur-sm rounded-3xl border border-red-900 p-6 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 lg:hover:-translate-y-1 lg:translate-y-[-20px] cursor-pointer bg-black/10">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md rotate-45">
                    <div className="-rotate-45">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#b85450"
                        className="size-7 sm:size-8"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2 sm:mb-3 leading-tight">
                        Brand
                        <br />
                        Development
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-sm sm:text-base leading-relaxed">
                    Building a strong and cohesive brand identity from scratch.
                </p>
                </div>
            </button>

            {/* Card 3: Brand Guidelines */}
            <button
                type="button"
                onClick={() => setSelectedService("brand-guidelines")}
                className="text-left"
            >
                <div className="h-full backdrop-blur-sm rounded-3xl border border-red-900 p-6 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 lg:hover:-translate-y-1 lg:translate-y-[20px] cursor-pointer bg-black/10">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md rotate-45">
                    <div className="-rotate-45">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                        <rect x="6" y="4" width="12" height="16" rx="1" stroke="#b85450" strokeWidth="2" />
                        <line x1="9" y1="8" x2="15" y2="8" stroke="#b85450" strokeWidth="1.5" />
                        <line x1="9" y1="11" x2="15" y2="11" stroke="#b85450" strokeWidth="1.5" />
                        <line x1="9" y1="14" x2="15" y2="14" stroke="#b85450" strokeWidth="1.5" />
                        </svg>
                    </div>
                    </div>
                    <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2 sm:mb-3 leading-tight">
                        Brand
                        <br />
                        Guidelines
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-sm sm:text-base leading-relaxed">
                    Establishing consistent brand standards and assets.
                </p>
                </div>
            </button>

            {/* Card 4: Digital Marketing Consultation */}
            <button
                type="button"
                onClick={() => setSelectedService("digital-marketing-consultation")}
                className="text-left"
            >
                <div className="h-full backdrop-blur-sm rounded-3xl border border-red-900 p-6 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 lg:hover:-translate-y-1 cursor-pointer bg-black/10">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                        <path
                        d="M12 2C12 2 16 6 19 9C22 12 22 16 19 19L12 22L5 19C2 16 2 12 5 9C8 6 12 2 12 2Z"
                        stroke="#b85450"
                        strokeWidth="2"
                        fill="none"
                        />
                        <circle cx="12" cy="12" r="3" fill="#b85450" />
                    </svg>
                    </div>
                    <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2 sm:mb-3 leading-tight">
                        Digital Marketing
                        <br />
                        Consultation
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-sm sm:text-base leading-relaxed">
                    Expert advice to enhance your online marketing strategy.
                </p>
                </div>
            </button>
            </div>
        </div>
        </section>
    );
}
