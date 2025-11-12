import { useEffect, useRef, useState } from "react";
import AquaFlux from "../../assets/images/aquaflux.png";
import GrindCafe from "../../assets/images/grindCoffe.webp";
import Stryd from "../../assets/images/stryd.png";
import Finova from "../../assets/images/finova.png";
import PulseGYM from "../../assets/images/pulseGYM.png";
import Aero from "../../assets/images/aeroGuidelines.png";
import Lyra from "../../assets/images/lyra.png";

const works = [
  { image: Stryd, alt: "Stryd E-commerce", desc: "Modern e-commerce platform with responsive design and seamless user experience." },
  { image: AquaFlux, alt: "AquaFlux", desc: "Premium product branding and packaging design for lifestyle brand." },
  { image: GrindCafe, alt: "Grind Café", desc: "Complete brand identity and menu design for artisan coffee shop." },
  { image: PulseGYM, alt: "Pulse GYM", desc: "Dynamic fitness app interface with tracking and motivation features." },
  { image: Aero, alt: "Aero Guidelines", desc: "Comprehensive design system and brand guidelines documentation." },
  { image: Lyra, alt: "Lyra Branding", desc: "Elegant cosmetics brand identity with minimalist aesthetic." },
  { image: Finova, alt: "Finova", desc: "Finance technology platform with intuitive dashboard design." },
];

// Setup for the 3-copy loop
const loopedWorks = [...works, ...works, ...works];
const worksLength = works.length;
const middleStart = worksLength;

export default function Porto() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);

  const getCurrentCenteredVisualIndex = (scrollContainer: HTMLDivElement): number => {
    const cards = scrollContainer.querySelectorAll('.work-card');
    if (cards.length === 0) return 0;
    
    const containerCenter = scrollContainer.offsetWidth / 2;
    let centeredIndex = 0;
    let minDistance = Infinity;
    
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      const cardRect = cardElement.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const cardCenter = cardRect.left - containerRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        centeredIndex = index;
      }
    });
    return centeredIndex;
  };

  const scrollToIndex = (index: number, smooth = true) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const cards = scrollContainer.querySelectorAll('.work-card');
    if (cards.length === 0) return;

    const card = cards[index] as HTMLElement;
    if (!card) return;
    
    const containerWidth = scrollContainer.offsetWidth;
    const cardWidth = card.offsetWidth;
    const scrollPosition = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
    
    scrollContainer.scrollTo({
      left: scrollPosition,
      behavior: smooth ? 'smooth' : 'instant'
    });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const updateCardScales = () => {
      const cards = scrollContainer.querySelectorAll('.work-card');
      const containerCenter = scrollContainer.offsetWidth / 2;
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const cardCenter = cardRect.left - containerRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        
        if (distance < cardRect.width * 0.1) {
          cardElement.style.transform = 'scale(1.2)';
          cardElement.style.opacity = '1';
          cardElement.style.zIndex = '20';
        } 
        else if (distance < cardRect.width * 1.2) {
          cardElement.style.transform = 'scale(0.85)';
          cardElement.style.opacity = '0.5';
          cardElement.style.zIndex = '10';
        }
        else {
          cardElement.style.transform = 'scale(0.7)';
          cardElement.style.opacity = '0.3';
          cardElement.style.zIndex = '1';
        }
      });
    };

    const checkAndLoop = () => {
      const visualIndex = getCurrentCenteredVisualIndex(scrollContainer);
      const middleEnd = worksLength * 2 - 1; 
      
      if (visualIndex > middleEnd + 1) { 
        const targetIndex = visualIndex - worksLength; 
        scrollToIndex(targetIndex, false);
        return;
      } 
      
      if (visualIndex < middleStart - 1) { 
        const targetIndex = visualIndex + worksLength;
        scrollToIndex(targetIndex, false);
        return;
      }

      setCurrentIndex(visualIndex % worksLength);
    };

    const startAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      
      autoScrollRef.current = setInterval(() => {
        if (!isPausedRef.current) {
          const currentVisualIndex = getCurrentCenteredVisualIndex(scrollContainer);
          scrollToIndex(currentVisualIndex + 1, true); 
        }
      }, 3000); 
    };

    setTimeout(() => {
      scrollToIndex(middleStart, false); 
      updateCardScales();
      setCurrentIndex(0); 
      startAutoScroll();
    }, 100);

    let scrollEndTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      updateCardScales();
      
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        checkAndLoop(); 
      }, 150); 
    };

    scrollContainer.addEventListener('scroll', onScroll);
    scrollContainer.addEventListener('mouseenter', () => { isPausedRef.current = true; });
    scrollContainer.addEventListener('mouseleave', () => { isPausedRef.current = false; });

    // Cleanup
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      clearTimeout(scrollEndTimer);
      scrollContainer.removeEventListener('scroll', onScroll);
    };
  }, []); 

  const handleDotClick = (index: number) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const targetIndex = middleStart + index;
    
    scrollToIndex(targetIndex, true);
    setCurrentIndex(index);
  };

  const handleCardClick = (index: number) => {
    scrollToIndex(index, true); 
    setCurrentIndex(index % worksLength); 
  }

  return (
    <section id="porto" className="py-10 pt-20 text-center overflow-hidden bg-black min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-[5px_5px_10px_#7F1D1D]">
        OUR WORKS
      </h1>
      <p className="text-white mb-10 text-sm sm:text-base">
        A showcase of our passion for design and digital creativity.
      </p>

      {/* Scrolling Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 lg:w-80 bg-gradient-to-r from-black via-black/95 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-48 sm:w-64 lg:w-80 bg-gradient-to-l from-black via-black/95 to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex items-center gap-12 overflow-x-hidden scroll-smooth py-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {loopedWorks.map((work, index) => (
            <div
              key={index}
              className="work-card flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px] h-[360px] sm:h-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl drop-shadow-[5px_5px_10px_#7F1D1D] relative group cursor-pointer transition-all duration-700"
              style={{
                transformOrigin: 'center center',
                opacity: 0.5,
                transform: 'scale(0.85)'
              }}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={work.image}
                alt={work.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-left">
                  <h3 className="text-white font-bold text-xl mb-2">{work.alt}</h3>
                  <p className="text-white/90 text-sm">{work.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {works.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-red-600 w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}