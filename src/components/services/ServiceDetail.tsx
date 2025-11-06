import { useState, useEffect, useRef } from 'react';
import { services } from "./ServiceData";
import ContactModal from "../contacts/ContactModal";


interface ServiceDetailProps {
    serviceId: string;
    onBack: () => void;
    onServiceChange: (serviceId: string) => void;
}

export default function ServiceDetail({ serviceId, onBack, onServiceChange }: ServiceDetailProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const service = services.find((s) => s.id === serviceId);
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    
    // Scroll to this section when component mounts or serviceId changes
    useEffect(() => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [serviceId]);
    
    if (!service) return <p className="text-white">Service not found.</p>;

    return (
        <section 
            id='service'
            ref={sectionRef}
            className="rounded-4xl top-0 left-0 w-full h-full text-white px-6 md:px-20 py-30"
            style={{
                background: `
                    radial-gradient(circle at 30% 10%, rgba(255,255,255,0.5), transparent 35%),
                    radial-gradient(circle at 70% 80%, rgba(255,240,220,0.4), transparent 50%),
                    #000
                `
        }}>

        {/* Hero */}
        <div className="relative grid grid-cols-2 gap-8 mt-10 mb-30 min-h-[400px]">
            <div className="flex flex-col justify-center">
                <h1 className="text-7xl font-bold leading-tight mb-6">
                    {service.title}
                </h1>
                <p className="text-lg text-white leading-relaxed">
                    {service.heroText}
                </p>
                <div className='flex flex-rows gap-3'>
                <button onClick={onBack} className="px-5 py-3 mt-10 rounded-md bg-gradient-to-r from-red-900 to-primary border-2 border-primary text-white font-semibold hover:border-sky-300 transition-colors">
                    ← Back to Services
                </button>
                    <button onClick={() => setIsModalOpen(true)} className="px-5 py-3 mt-10 rounded-md bg-gradient-to-r from-red-900 to-primary border-2 border-primary text-white font-semibold hover:border-sky-300 transition-colors">
                        Book a Meeting
                    </button>
                
                </div>
            </div>
            
            <div className="relative flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center p-12 ">
                    {service.heroImages.map((img, i) => (
                        <div
                            key={i}
                            className="absolute w-70 h-100 rounded-4xl shadow-lg overflow-hidden backdrop-blur-sm border border-[#e8d5c4]/50 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1 cursor-pointer "
                            style={{
                                transform: `rotate(${(i - 1) * 5}deg) translateX(${(i - 1) * 180}px)`,
                                zIndex: i === 1 ? 5 : 5,
                            }}
                        >
                            <img 
                                src={img} 
                                alt={`hero-${i}`} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Why Important */}
        <div className="relative grid grid-cols-2 p-10 rounded-3xl mb-16 h-200 backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] cursor-pointer">
            <div className="flex flex-col gap-8">
                <h3 className="font-semibold">W H Y ?</h3>
                <h2 className="text-6xl font-semibold text-left">
                {service.title}
                </h2>
                <p>is important for your business?</p>
            </div>
            <div className="grid md:grid-row-3 gap-6">
                {service.whyImportant.map((text, i) => (
                    <div key={i} className="backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1 cursor-pointer p-6 rounded-xl relative flex flex-col">
                        <p className="text-4xl font-semibold text-gray-100 absolute top-6 left-6">
                            {i + 1}
                        </p>
                        <p className="text-lg text-gray-100 leading-relaxed text-right mt-auto">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        
        {/* FAQ */}
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 mb-32">
            <div className="space-y-4 w-full max-w-2xl">
                {service.faq.map((faq, i) => (
                    <div 
                        key={i} 
                        className="backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] cursor-pointer transition-all duration-300"
                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    >
                        <div className="font-semibold text-lg flex items-center justify-between">
                            {faq.q}
                            <span className={`text-2xl transform transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                                +
                            </span>
                        </div>
                        <div 
                            className={`grid transition-all duration-500 ease-in-out ${
                                openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <p className="mt-4 text-sm opacity-90">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-8xl font-semibold text-center">FAQ's</h2>
        </div>


        {/* Other Services */}
        <div className="mt-32 mb-16">
        <hr className='border border-[#e8d5c4]/50 mb-15'/>
            <h2 className="text-5xl font-bold text-center mb-16">Other Services</h2>
            
            <div className="grid grid-cols-3 gap-8 max-w-8xl mx-auto">
                {services
                    .filter(s => s.id !== serviceId)
                    .slice(0, 3)
                    .map((otherService) => (
                        <div
                            key={otherService.id}
                            onClick={() => onServiceChange(otherService.id)}
                            className="grid grid-row-3 backdrop-blur-sm rounded-3xl border border-[#e8d5c4]/50 p-8 shadow-[0_8px_30px_rgba(139,69,19,0.12),0_2px_8px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_40px_rgba(139,69,19,0.15),0_4px_12px_rgba(139,69,19,0.1)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                        >
                            <h3 className="text-2xl font-serif text-white mb-4 leading-tight">
                                {otherService.title}
                            </h3>
                            <p className="text-sky-200 text-sm leading-relaxed">
                                {otherService.heroText.substring(0, 100)}...
                            </p>
                            <button className="mt-6 text-left text-primary hover:text-red-400 transition-colors font-medium">
                                Learn More →
                            </button>
                        </div>
                    ))}
            </div>
        </div>

        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}

        </section>
    );
}