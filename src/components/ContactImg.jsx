import img from '/assets/contact.webp'
import gsap from "gsap"
import { useLayoutEffect, useRef } from 'react';
import { CiAt, CiMail, CiChat2 } from "react-icons/ci";

function ContactImg() {

const comp = useRef(null)

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.to(['#element-1', '#element-2', '#element-3'], {
                y: (i) => ["-=30", "-=34", "-=27"][i],
                x: (i) => ["-=27", "-=23", "+=30"][i],
                delay: '1',
                duration: 15,
                // stagger: 0.075,
            })
        }, [comp])

        return () => ctx.revert()
    }, [])

    return(
        <div ref={comp} className='relative hidden md:block w-1/2'>
            <img src={img} alt='contact img' className='mb-8 opacity-85'/>
            <div id="element-1" className="absolute top-[50px] left-[35px] w-fit h-fit text-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 text-white rounded-xl">
                <CiAt/>
            </div>
            <div id="element-2" className="absolute top-[150px] left-[20px] w-fit h-fit text-3xl bg-gradient-to-br from-orange-300 to-orange-500 p-2.5 text-white rounded-xl">
                <CiChat2/>
            </div>
            <div id="element-3" className="absolute top-[70px] left-[92%] w-fit h-fit text-4xl bg-gradient-to-br from-indigo-400 to-indigo-600 p-3.5 text-white rounded-2xl">
                <CiMail/>
            </div>
        </div>
    )
}

export default ContactImg