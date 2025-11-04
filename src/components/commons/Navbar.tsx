import redStudio from '../../assets/images/red-studio.png';

export default function Navbar(){
    return(
        <nav className="fixed top-0 left-0 right-0 z-50 ">
            <div className="max-w-7xl mx-auto lg:px-8 ">
                <div className="flex justify-between items-center h-20">
                    <a href="#home">
                    <div className="flex items-center ">
                        <img src={redStudio} alt="Red Studio" className="h-12 drop-shadow-[5px_5px_10px_white]"/>
                    </div>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-red-600 transition-colors font-medium">Home</a>
                        <a href="#porto" className="text-white hover:text-red-600 transition-colors font-medium">Works</a>
                        <a href="#service" className="text-white hover:text-red-600 transition-colors font-medium">Service</a>
                        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
                            Get in Touch
                        </button>
                    </div>

                    {/* <!-- Mobile Menu Button --> */}
                    <button className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}