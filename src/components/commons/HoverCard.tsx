import { useState } from "react";

interface HoverCardProps {
    image: string;
    alt: string;
    children: React.ReactNode; 
    className?: string; 
}

export default function HoverCard({ image, alt, children, className }: HoverCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        
        <div
        className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        {/* Hover Overlay */}
        <div
            className={`absolute inset-0 bg-black/70 flex items-center justify-center text-white text-sm p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
            }`}
        >
            {children}
        </div>

        {/* Image */}
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
}
