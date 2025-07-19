import ContactBtn from "./ContactBtn";

function Hero() {

    return(
        <div>
            <div className="b overflow-hidden rounded-br-[200px] md:rounded-br-full border-b-6 border-b-indigo-500">
                <div className="md:w-4/6 mx-auto px-4 md:px-0 flex flex-wrap items-center justify-between">
                    <div>
                        <h1 className="pt-4 text-gray-700 font-bold text-2xl md:text-5xl text-wrap">Hi, I'm Muhamad 👋</h1>
                        <p className="pt-4 text-gray-500 md:w-72">A passionate Software Engineer focused on Web Development and building modern, useful tools.</p>
                        <div className="flex gap-2 pt-6">
                            <a className="block w-fit px-4 py-2.5 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm cursor-pointer">
                                Download CV
                            </a>
                            <ContactBtn />
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 pt-6 md:pt-0">
                        <img src="/src/assets/profile_picture_min.png" alt="" 
                            className="grayscale drop-shadow-2xl opacity-95"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;