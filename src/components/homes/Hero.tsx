import RLogo from '../../assets/images/R.png';

export default function Hero() {
    return (
        <section id='home' className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-white rounded-4xl">

            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.5),_transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_rgba(255,240,220,0.4),_transparent_50%)]"></div>

            {/* Main content */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-20 text-center lg:text-left relative z-10">
                <div className='animate-fade-in-up'>
                <img 
                    src={RLogo}
                    alt="Red Studio Logo" 
                    className="w-64 lg:w-80 xl:w-96 opacity-90 drop-shadow-[10px_0_20px_#7dd3fc]"
                />
                </div>

                <div className="space-y-9 animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg text-shadow-sky-300 ">
                        <span className="">Branding.</span><br />
                        <span className="text-primary">Strategy.</span><br />
                        <span>Creativity.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-md">
                        <span className="font-bold text-primary">R.E.D</span> <span className="font-semibold">Studio™</span> transforms ideas into powerful digital identities combining strategy, creativity, and technology to help brands grow and connect.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <a href="#porto">
                            <button className="px-5 py-3 rounded-md bg-gradient-to-r from-red-900 to-primary border-2 border-primary text-white font-semibold hover:border-sky-300 transition-colors drop-shadow-[2px_2px_4px_#7dd3fc]">
                            Learn More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
