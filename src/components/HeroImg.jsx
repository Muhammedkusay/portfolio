import { useLayoutEffect, useRef, useState } from "react"
import { FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import gsap from "gsap"
import ProfilePic from "/assets/profile_picture.webp"

function HeroImg() {

const comp = useRef(null)

    const [imgLoaded, setImgLoaded] = useState(false)

    useLayoutEffect(() => {

        if(!imgLoaded) return

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.to(['#element-1', '#element-2', '#element-3', '#element-4', '#element-5', '#element-6'], {
                top: (i) => ["35px", "150px", "250px", "80px", "180px", "330px"][i],
                left: (i) => ["35px", "18px", "7px", "70%", "80%", "92%"][i],
                rotate: (i) => ["-370deg", "-380deg", "-390deg", "370deg", "390deg", "410deg"][i],
                ease: 'power2.inOut',
                delay: '1.5',
                duration: 0.75,
                // stagger: 0.075,
            })
            .to(['#element-1', '#element-2', '#element-3', '#element-4', '#element-5', '#element-6'], {
                y: window.innerWidth < 768 ? '-=20' : '-=40',
                x: (i) => ["-=30", "-=30", "-=30", "+=20", "+=20", '+=20'][i],
                duration: (i) => ["16", "18", "20", "16", "18", '20'][i],
            })

        }, [comp])

        return () => ctx.revert()
    }, [imgLoaded])
    
    return(
        <div className="w-full relative md:w-5/12 pt-6 md:pt-0" ref={comp}>
            <div id="element-1" className="absolute bottom-1 left-1/2 w-fit h-fit text-3xl bg-gradient-to-br from-sky-500 to-sky-700 p-2 text-white rounded-xl">
                <FaReact/>
            </div>
            <div id="element-2" className="absolute -bottom-16 left-1/2 w-fit h-fit text-3xl bg-gradient-to-br from-orange-300 to-orange-500 p-2.5 text-white rounded-xl">
                <FaHtml5/>
            </div>
            <div id="element-3" className="absolute -bottom-16 left-1/2 w-fit h-fit text-4xl bg-gradient-to-br from-red-400 to-red-600 p-3.5 text-white rounded-2xl">
                <FaLaravel/>
            </div>
            <div id="element-4" className="absolute -bottom-16 left-1/2 w-fit h-fit text-3xl bg-gradient-to-br from-sky-500 to-sky-700 p-2 text-white rounded-xl">
                <SiPostgresql/>
            </div>
            <div id="element-5" className="absolute -bottom-16 left-1/2 w-fit h-fit text-4xl bg-gradient-to-br from-blue-600/80 to-blue-800 p-3 text-white rounded-2xl">
                <RiTailwindCssFill/>
            </div>
            <div id="element-6" className="absolute -bottom-16 left-1/2 w-fit h-fit text-4xl bg-gradient-to-br from-yellow-300 to-yellow-500 p-3 text-white rounded-xl">
                <IoLogoJavascript/>
            </div>
            <img src={ProfilePic} 
                alt="Profile"  
                onLoad={() => setImgLoaded(true)}  
                className="grayscale"/>
        </div>
    )
}

export default HeroImg