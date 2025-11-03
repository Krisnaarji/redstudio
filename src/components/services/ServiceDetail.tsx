
import { services } from "./ServiceData";

interface ServiceDetailProps {
    serviceId: string;
    onBack: () => void;
}

    export default function ServiceDetail({ serviceId, onBack }: ServiceDetailProps) {
    const service = services.find((s) => s.id === serviceId);
    if (!service) return <p className="text-white">Service not found.</p>;

    return (
        <section 
            className="rounded-4xl top-0 left-0 w-full h-full text-white px-6 md:px-20 py-16"
            style={{
                background: `
                    radial-gradient(circle at 30% 10%, rgba(255,255,255,0.5), transparent 35%),
                    radial-gradient(circle at 70% 80%, rgba(255,240,220,0.4), transparent 50%),
                    #000
                `
        }}>
        <button onClick={onBack} className="mt-20 bg-primary text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
            ← Back to Services
        </button>

        {/* Hero */}
        <div className="relative grid grid-cols-2 gap-8 mt-10 mb-30 min-h-[400px]">
            <div className="flex flex-col justify-center">
                <h1 className="text-7xl font-bold leading-tight mb-6">
                    {service.title}
                </h1>
                <p className="text-lg text-white leading-relaxed">
                    {service.heroText}
                </p>
            </div>
            
            <div className="relative flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center p-12">
                    {service.heroImages.map((img, i) => (
                        <div
                            key={i}
                            className="absolute w-70 h-100 rounded-4xl shadow-lg overflow-hidden"
                            style={{
                                transform: `rotate(${(i - 1) * 5}deg) translateX(${(i - 1) * 180}px)`,
                                zIndex: i === 1 ? 5 : 5,
                                backgroundColor: i === 1 ? '#000' : '#666'
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
        <div className="relative grid grid-cols-2 bg-gray-900/70 p-10 rounded-3xl mb-16 h-200">
            <div className="flex flex-col gap-8">
                <h3 className="font-semibold">W H Y ?</h3>
                <h2 className="text-6xl font-semibold text-left">
                {service.title}
                </h2>
                <p>is important for your business?</p>
            </div>
            <div className="grid md:grid-row-3 gap-6">
                {service.whyImportant.map((text, i) => (
                    <div key={i} className="bg-gray-800 p-6 rounded-xl relative flex flex-col">
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
        <div className="grid grid-cols-2">
            <div className="space-y-4 max-w-3xl mx-auto">
            {service.faq.map((faq, i) => (
                <details key={i} className="bg-gray-800 p-4 rounded-xl cursor-pointer">
                <summary className="font-semibold text-lg">{faq.q}</summary>
                <p className="mt-2 text-sm opacity-90">{faq.a}</p>
                </details>
            ))}
            </div>
            <h2 className="text-3xl font-semibold mb-6 item-center text-center">FAQ’s</h2>
        
        </div>
        </section>
    );
}
