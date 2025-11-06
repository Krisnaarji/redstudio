import ReactDOM from "react-dom";

interface ContactModalProps {
    onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] flex items-center justify-center">
        <div className="bg-white text-gray-900 rounded-2xl shadow-xl max-w-4xl w-full mx-4 p-8 relative overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-5xl"
            >
            &times;
            </button>

            {/* Content */}
            <div className="flex">

            <h1 className="text-4xl font-bold mb-4">Contact our team</h1>
            <p className="text-gray-600 m-4">
            Got any questions about the product or scaling on our platform? We’re here to help.
            Chat to our friendly team and get onboard in less than 5 minutes.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
            {/* Left – form */}
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="w-full border border-gray-300 rounded-md px-4 py-2" />
                <input type="text" placeholder="Last name" className="w-full border border-gray-300 rounded-md px-4 py-2" />
                </div>

                <input type="email" placeholder="you@company.com" className="w-full border border-gray-300 rounded-md px-4 py-2" />

                <input type="tel" placeholder="+55 (555) 555-5555" className="w-full border border-gray-300 rounded-md px-4 py-2" />
                

                <textarea rows={4} placeholder="Leave us a message..." className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea>

                <div>
                <p className="font-medium mb-2 ">Services</p>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                    {["Social Media Management", "Brand Development", "Digital Marketing Consultation","brand Guidelines",  "Other"].map((service) => (
                    <label key={service} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-black" />
                        {service}
                    </label>
                    ))}
                </div>
                </div>

                <button type="button" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
                Send message
                </button>
            </form>

            {/* Right – info */}
            <div className="space-y-8">
                <div>
                <h2 className="font-semibold text-lg mb-2">Chat with us</h2>
                <p className="text-gray-600 mb-3">Speak to our friendly team</p>
                    <p className="mb-2 text-black hover:underline">Message us on </p>
                        <a href="https://wa.me/15551234567" target="_blank">
                            <span className="[&>svg]:h-10 [&>svg]:w-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            </span>
                        </a>  
                </div>

                <div>
                <h2 className="font-semibold text-lg mb-2">Call us</h2>
                <p className="text-gray-600 mb-1">Call our team Mon–Fri from 10am to 6pm.</p>
                <a href="tel:+1555000000" className="text-black font-medium hover:underline">
                    +55 (555) 555-555
                </a>
                </div>

                <div>
                <h2 className="font-semibold text-lg mb-2">Visit us</h2>
                <p className="text-gray-600 mb-1">Chat to us in person at our Bussiness Hub.</p>
                <a href="https://www.google.com/maps/place/RED+SYSTEM+BALI+WEBSITE+DEVELOPER/@-8.6806916,115.2458622,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23fae714de88b:0x7216cd57648a4f83!8m2!3d-8.6806916!4d115.2484371!16s%2Fg%2F11h_sdf183?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-black font-medium hover:underline">
                    Jl. Tukad Anyar 1 No.1, Sanur, Denpasar Selatan, Kota Denpasar, Bali
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>,
        document.body
    );
}
