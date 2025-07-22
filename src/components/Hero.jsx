import CvBtn from "./CvBtn";
import SecondaryBtn from "./SecondaryBtn";

function Hero() {

    return(
        <div className="pt-6">
            <div className="bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
                <div className="md:w-4/6 mx-auto px-4 md:px-0 flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-7/12">
                        <h1 className="pt-4 text-slate-700 font-bold text-3xl md:text-5xl text-wrap">Hi, I'm Muhammed 👋</h1>
                        <p className="pt-4 text-slate-500 md:w-72">A Software Engineering Student & Web Developer,
                        focused on Full-Stack Web Development and building modern, useful tools.</p>
                        <div className="flex gap-2 pt-6">
                            <CvBtn />
                            <img src="./src/assets/world_icon.gif" alt="" className="w-12 rotate-12 select-none"/>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 pt-6 md:pt-0">
                        <img src="/src/assets/profile_picture.png" alt="" 
                            className="grayscale drop-shadow-slate-300 drop-shadow-2xl opacity-95"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;