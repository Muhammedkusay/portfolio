import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

function StartAnimation() {
    
const comp = useRef(null)

useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        const t1 = gsap.timeline()

        t1.from('#intro-slider', {
            xPercent: '-100',
            duration: 1,
            delay: 0.5
        }).from(['#title-1', '#title-2', '#title-3'], {
            opacity: '0',
            rotateX: '45',
            duration: 0.75,
            stagger: 0.4
        }).to(['#title-1', '#title-2', '#title-3'], {
            opacity: '0',
            y: '-=30',
            delay: 0.5,
            duration: 0.3,
            stagger: 0.4
        }).to('#intro-slider', {
            xPercent: '-100',
            duration: 1
        }).from('#welcome-title', {
            opacity: '0',
            duration: 1
        }).to('#welcome-div', {
            yPercent: '-100',
            duration: 1,
            delay: 1
        })

    }, [comp])

    return () => ctx.revert()
}, [])


    return(
        <div className="relative" ref={comp}>
            <div id="intro-slider" className="absolute z-20 h-screen w-full bg-slate-50 p-10 flex flex-col gap-10">
                <h1 id="title-1" className="text-3xl lg:text-7xl">Software Engineer</h1>
                <h1 id="title-2" className="text-3xl lg:text-7xl">Web Developer</h1>
                <h1 id="title-3" className="text-3xl lg:text-7xl">Full-Stack Web Developer</h1>
            </div>
            <div id="welcome-div" className="absolute z-10 h-screen w-full bg-slate-900 text-white p-10 flex items-center justify-center gap-10">
                <h1 id="welcome-title" className="text-4xl lg:text-9xl">Welcome</h1>
            </div>
      </div>
    )
}

export default StartAnimation