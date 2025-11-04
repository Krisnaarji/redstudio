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
        <section id="service" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden rounded-4xl pb-10">
        {/* Subtle light gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.5),_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_rgba(255,240,220,0.4),_transparent_50%)]"></div>

        {/* Title */}
        <div className="text-right w-full max-w-6xl mb-8 relative z-10">
            <p className="text-[#2b2b2b] text-sm font-light tracking-[0.3em] mb-2">
            RED STUDIO
            </p>
        </div>

        <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-20 tracking-tight text-shadow-lg text-shadow-sky-300 relative z-10">
            OUR SERVICES
        </h1>

        <div className="relative max-w-6xl w-full">
            <div
            className="grid grid-cols-2 md:grid-cols-2 gap-x-32 gap-y-16 relative"
            style={{ zIndex: 1 }}
            >
            {/* Card 1: Social Media Management */}
            <a onClick={() => setSelectedService("social-media-management")}>
                <div className="backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-6 mb-4">
                    <div className="w-16 h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#b85450"
                        className="size-8"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    </div>
                    <div>
                    <h2 className="text-3xl font-serif text-white mb-3 leading-tight">
                        Social Media
                        <br />
                        Management
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-base leading-relaxed ml-0">
                    We create and manage content for your social media platforms.
                </p>
                </div>
            </a>

            {/* Card 2: Brand Development */}
            <a onClick={() => setSelectedService("brand-development")}>
                <div className="backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1 md:translate-y-[-20px] cursor-pointer">
                <div className="flex items-start gap-6 mb-4">
                    <div className="w-16 h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md rotate-45">
                    <div className="rotate-[-45deg]">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#b85450"
                        className="size-8"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                        </svg>
                    </div>
                    </div>
                    <div>
                    <h2 className="text-3xl font-serif text-white mb-3 leading-tight">
                        Brand
                        <br />
                        Development
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-base leading-relaxed ml-0">
                    Building a strong and cohesive brand identity from scratch.
                </p>
                </div>
            </a>

            {/* Card 3: Brand Guidelines */}
            <a onClick={() => setSelectedService("brand-guidelines")}>
                <div className="backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1 md:translate-y-[20px] cursor-pointer">
                <div className="flex items-start gap-6 mb-4">
                    <div className="w-16 h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md rotate-45">
                    <div className="rotate-[-45deg]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <rect
                            x="6"
                            y="4"
                            width="12"
                            height="16"
                            rx="1"
                            stroke="#b85450"
                            strokeWidth="2"
                        />
                        <line
                            x1="9"
                            y1="8"
                            x2="15"
                            y2="8"
                            stroke="#b85450"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="9"
                            y1="11"
                            x2="15"
                            y2="11"
                            stroke="#b85450"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="9"
                            y1="14"
                            x2="15"
                            y2="14"
                            stroke="#b85450"
                            strokeWidth="1.5"
                        />
                        </svg>
                    </div>
                    </div>
                    <div>
                    <h2 className="text-3xl font-serif text-white mb-3 leading-tight">
                        Brand
                        <br />
                        Guidelines
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-base leading-relaxed ml-0">
                    Establishing consistent brand standards and assets.
                </p>
                </div>
            </a>

            {/* Card 4: Digital Marketing Consultation */}
            <a onClick={() => setSelectedService("digital-marketing-consultation")}>
                <div className="backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-6 mb-4">
                    <div className="w-16 h-16 border-2 border-[#b85450] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
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
                    <h2 className="text-3xl font-serif text-white mb-3 leading-tight">
                        Digital Marketing
                        <br />
                        Consultation
                    </h2>
                    </div>
                </div>
                <p className="text-sky-200 text-base leading-relaxed ml-0">
                    Expert advice to enhance your online marketing strategy.
                </p>
                </div>
            </a>
            </div>
        </div>
        </section>
    );
}