import { useState, useEffect, useRef } from "react";
import { services } from "./ServiceData";
import ContactModal from "../contacts/ContactModal";

interface ServiceDetailProps {
    serviceId: string;
    onBack: () => void;
    onServiceChange: (serviceId: string) => void;
}

export default function ServiceDetail({
    serviceId,
    onBack,
    onServiceChange,
}: ServiceDetailProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const service = services.find((s) => s.id === serviceId);
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
        if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
}, [serviceId]);

    if (!service) return <p className="text-white">Service not found.</p>;

    return (
        <section
        id="service"
        ref={sectionRef}
        className="rounded-4xl w-full text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20"
        style={{
            background: `
            radial-gradient(circle at 30% 10%, rgba(255,255,255,0.5), transparent 35%),
            radial-gradient(circle at 70% 80%, rgba(255,240,220,0.4), transparent 50%),
            #000
            `,
        }}
        >
        {/* ===== Hero ===== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-4 lg:mt-10 mb-16 lg:mb-28 min-h-[320px]">
            {/* Left: text */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                {service.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed opacity-95">
                {service.heroText}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                onClick={onBack}
                className="px-5 py-3 mt-6 sm:mt-8 rounded-md bg-gradient-to-r from-red-900 to-primary border-2 border-primary text-white font-semibold hover:border-sky-300 transition-colors"
                >
                ← Back to Services
                </button>
                <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-3 mt-6 sm:mt-8 rounded-md bg-gradient-to-r from-red-900 to-primary border-2 border-primary text-white font-semibold hover:border-sky-300 transition-colors"
                >
                Book a Meeting
                </button>
            </div>
            </div>

            {/* Right: stacked images */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
            <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-10 lg:p-12">
                {service.heroImages.map((img, i) => (
                <div
                    key={i}
                    className="
                    absolute rounded-4xl overflow-hidden backdrop-blur-sm
                    border border-[#e8d5c4]/50
                    shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)]
                    lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)]
                    transition-all duration-500 lg:hover:-translate-y-1
                    w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[26rem]
                    bg-black/10
                    "
                    style={{
                    // responsive horizontal spread using clamp so it scales nicely
                    transform: `translateX(calc(${i - 1} * clamp(40px, 10vw, 180px))) rotate(${
                        (i - 1) * 5
                    }deg)`,
                    zIndex: i === 1 ? 5 : 4,
                    }}
                >
                    <img src={img} alt={`hero-${i}`} className="w-full h-full object-cover" />
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* ===== Why Important ===== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-20 backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)]">
            <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="font-semibold tracking-[0.35em] text-sm sm:text-base">W H Y ?</h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-left">
                {service.title}
            </h2>
            <p className="text-base sm:text-lg opacity-90">is important for your business?</p>
            </div>

            <div className="grid grid-rows-3 gap-4 sm:gap-6">
            {service.whyImportant.map((text, i) => (
                <div
                key={i}
                className="relative flex flex-col p-5 sm:p-6 lg:p-8 backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 lg:hover:-translate-y-1"
                >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 absolute top-4 sm:top-6 left-4 sm:left-6">
                    {i + 1}
                </p>
                <p className="text-base sm:text-lg text-gray-100 leading-relaxed text-right mt-6 sm:mt-8 lg:mt-10">
                    {text}
                </p>
                </div>
            ))}
            </div>
        </div>

        {/* ===== FAQ ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-10 mb-24 lg:mb-32">
            {/* On mobile, put the title on top; keep right on desktop */}
            <h2 className="order-1 lg:order-2 text-5xl sm:text-6xl lg:text-8xl font-semibold text-center">
            FAQ&apos;s
            </h2>

            <div className="order-2 lg:order-1 space-y-4 w-full max-w-2xl mx-auto lg:mx-0">
            {service.faq.map((faq, i) => (
                <div
                key={i}
                className="backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-6 sm:p-7 lg:p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] cursor-pointer transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                <div className="font-semibold text-base sm:text-lg flex items-center justify-between">
                    {faq.q}
                    <span
                    className={`text-2xl transform transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                    }`}
                    >
                    +
                    </span>
                </div>
                <div
                    className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base opacity-90">{faq.a}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* ===== Other Services ===== */}
        <div className="mt-20 lg:mt-28 mb-12 lg:mb-16">
            <hr className="border border-[#e8d5c4]/50 mb-10 lg:mb-14" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-16">
            Other Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
            {services
                .filter((s) => s.id !== serviceId)
                .slice(0, 3)
                .map((otherService) => (
                <button
                    key={otherService.id}
                    onClick={() => onServiceChange(otherService.id)}
                    className="text-left grid grid-rows-[auto_1fr_auto] backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-6 sm:p-7 lg:p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] lg:hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 lg:hover:-translate-y-1 cursor-pointer bg-black/10"
                >
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4 leading-tight">
                    {otherService.title}
                    </h3>
                    <p className="text-sky-200 text-sm sm:text-base leading-relaxed">
                    {otherService.heroText.substring(0, 100)}…
                    </p>
                    <span className="mt-5 sm:mt-6 text-left text-primary hover:text-red-400 transition-colors font-medium">
                    Learn More →
                    </span>
                </button>
                ))}
            </div>
        </div>

        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
        </section>
    );
}
