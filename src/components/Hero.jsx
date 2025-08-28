import CvBtn from "./CvBtn";
import HeroImg from "./HeroImg";
import WorldIcon from "/assets/world_icon.gif"

function Hero() {

    return(
        <div className="bg-[url(/assets/bg.webp)] bg-cover bg-no-repeat bg-center">
            <div className="pt-6 bg-gradient-to-b from-white to-transparent overflow-hidden">
                <div className="md:w-4/6 mx-auto px-4 md:px-0 flex flex-wrap items-center justify-between">
                    {/* hero section greeting */}
                    <div className="w-full md:w-7/12">
                        <h1 className="pt-4 text-slate-700 font-bold text-3xl md:text-5xl text-wrap">Hi, I'm Muhammed 👋</h1>
                        <p className="pt-4 text-slate-500 md:w-80">A Software Engineering Student & Web Developer.
                        I build modern, efficient web applications that turn ideas into practical solutions.</p>
                        <div className="flex gap-2 pt-6">
                            <CvBtn />
                            <img src={WorldIcon} alt="" className="w-12 z-50 rotate-12 select-none" loading="lazy"/>
                        </div>
                    </div>
                    {/* profile pic */}
                    <HeroImg />
                </div>
            </div>
        </div>
    )
}

export default Hero;