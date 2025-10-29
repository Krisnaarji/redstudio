// import Leker from '../../assets/images/monza-2024.jpg';
import AquaFlux from '../../assets/images/aquaflux.png';
import GrindCafe from '../../assets/images/grindCoffe.webp';
import Stryd from '../../assets/images/stryd.png';
import Soundwave from '../../assets/images/soundwave.png';
import PulseGYM from '../../assets/images/pulseGYM.png';
import Aero from '../../assets/images/aeroGuidelines.png';
import Lyra from '../../assets/images/lyra.png';
// import Stryd2 from '../../assets/images/stryd2.png';

export default function Porto() {
  return (
    <section className="py-10 pt-20 text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-[5px_5px_10px_#7dd3fc]">OUR WORKS</h1>
      <p className="text-white mb-10">
        A showcase of our passion for design and digital creativity.
      </p>

      {/* Grid */}
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
          border-sky-300
          drop-shadow-[5px_5px_10px_#7dd3fc]
        "
      >
        {/* Top Left new season*/}
        <div className="col-span-3 w-[280px] h-[260px] rounded-4xl overflow-hidden shadow-md">
          <img
            src={GrindCafe}
            alt="New Season"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Center Big */}
        <div className="col-span-6 row-span-2 w-[500px] h-[370px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Stryd}
            alt="Creative Solutions"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right */}
        <div className="col-span-3 w-[360px] h-[460px] rounded-2xl overflow-hidden shadow-md">
          <img
            src={AquaFlux}
            alt="Branding"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left */}
        <div className="col-span-3 row-span-2 w-[360px] h-[380px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={PulseGYM}
            alt="Design Conference"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right */}
        <div className="col-span-3 row-span-2 w-[400px] h-[200px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Aero}
            alt="75% Off"
            className="w-full h-full object-cover"
          />
        </div>      

        {/* Bottom Center Left */}
        <div className="col-5 row-3 ml-12 w-[240px] h-[250px] rounded-2xl overflow-hidden shadow-md">
          <img
            src={Lyra}
            alt="See 70% Off"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Center Right */}
        <div className="col-8 row-3 -ml-8 w-[240px] h-[250px] rounded-2xl overflow-hidden shadow-md">
          <img
            src={Soundwave}
            alt="The Future of Technology"
            className="w-full h-full object-cover"
          />
        </div>

      <div className="col-span-12 row-4 -ml-8 w-[1200px] rounded-2xl overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          “Designed with heart, built with purpose.”
        </h1>
      </div>
        
      </div>
    </section>
  );
}
