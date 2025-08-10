import { useState } from "react";

function ImageCarousel({ imgs }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative h-44 md:h-[350px] lg:h-72 mb-4">
                <img src={imgs[currentIndex]} alt={`Project screenshot ${currentIndex + 1}`} className="absolute" />
            <div>
                {/* right */}
                <button onClick={() => setCurrentIndex((currentIndex + 1) % imgs.length)} className="group text-slate-800 absolute right-0 mr-2 top-1/2 translate-y-1/2 bg-slate-50 opacity-90 cursor-pointer rounded-full p-2 shadow-sm border border-slate-400 hover:bg-slate-100 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 group-hover:-translate-y-1 transition-transform duration-150">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>

                {/* left */}
                <button onClick={() => setCurrentIndex((currentIndex - 1 + imgs.length) % imgs.length)} className="group text-slate-800 absolute left-0 ml-2 top-1/2 translate-y-1/2 bg-slate-50 opacity-90 cursor-pointer rounded-full p-2 shadow-sm border border-slate-400 hover:bg-slate-100 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 group-hover:-translate-y-1 transition-transform duration-150">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default ImageCarousel;