import HoverCard from "../commons/HoverCard";
import AquaFlux from "../../assets/images/aquaflux.png";
import GrindCafe from "../../assets/images/grindCoffe.webp";
import Stryd from "../../assets/images/stryd.png";
import Finova from "../../assets/images/finova.png";
import PulseGYM from "../../assets/images/pulseGYM.png";
import Aero from "../../assets/images/aeroGuidelines.png";
import Lyra from "../../assets/images/lyra.png";

export default function Porto() {
  return (
    <section id="porto" className="py-10 pt-20 text-center">

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-[5px_5px_10px_#7dd3fc]">
        OUR WORKS
      </h1>
      <p className="text-white mb-10">
        A showcase of our passion for design and digital creativity.
      </p>

      <div
        className="
          grid 
          grid-cols-12 
          auto-rows-[200px]
          gap-10
          max-w-7xl 
          mx-auto
          justify-center
          place-items-center
          drop-shadow-[5px_5px_10px_#7dd3fc]
        "
      >
        {/* Grind Café */}
        <HoverCard
          image={GrindCafe}
          alt="Grind Café"
          className="col-span-3 w-[280px] h-[260px]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
          </p>
        </HoverCard>

        {/* Center Big — Stryd */}

        <HoverCard
          image={Stryd} 
          alt="Creative Solutions" 
          className="col-span-6 row-span-2 w-[500px] h-[370px] rounded-2xl" 
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
          </p>
        </HoverCard>

        {/* AquaFlux */}
        <HoverCard
          image={AquaFlux}
          alt="AquaFlux"
          className="col-span-3 w-[360px] h-[460px]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
          </p>
        </HoverCard>

        {/* Pulse GYM */}
        <HoverCard
          image={PulseGYM}
          alt="Pulse GYM"
          className="col-span-3 row-span-2 w-[360px] h-[380px]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
          </p>
        </HoverCard>

        {/* Aero Guidelines */}
        <HoverCard
          image={Aero}
          alt="Aero Design Guidelines"
          className="col-span-3 row-span-2 w-[400px] h-[200px]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
          </p>
        </HoverCard>

        {/* Lyra */}
        <HoverCard
          image={Lyra}
          alt="Lyra Branding"
          className="col-5 row-3 ml-12 w-[240px] h-[250px]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
          </p>
        </HoverCard>

        {/* Soundwave */}
        <HoverCard
          image={Finova}
          alt="Soundwave UI"
          className="col-8 row-3 -ml-8 w-[240px] h-[250px]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
          </p>
        </HoverCard>

        {/* Footer Quote */}
        <div className="col-span-12 row-4 -ml-8 w-[1200px] rounded-2xl overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            “Designed with heart, built with purpose.”
          </h1>
        </div>
        
      </div>
    </section>
  );
}
