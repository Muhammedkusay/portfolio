import { useState } from "react"
import Logo from "./Logo"

function Messaging() {

    const [value, setValue] = useState(''); 
    const [messages, setMessages] = useState([]); 


    function handleMessage(e) {
        e.preventDefault()
        if(value.trim() !== '') {
            setMessages(messages => [...messages, value])
            setValue('')
        }
    }

    return(
        <div className="md:w-1/2 flex flex-col gap-4 pb-4 md:pb-6 border border-slate-200 rounded-2xl md:rounded-4xl shadow-sm">
            {/* img & name */}
            <div className="flex gap-3 items-center py-3 px-4 md:px-6 bg-slate-100 rounded-t-2xl md:rounded-t-4xl border border-gray-200">
                <div className="w-12 md:w-14 rounded-full overflow-hidden border-2 border-indigo-500">
                    <img src="./src/assets/profile_2.jpg" alt="" />
                </div>
                <div>
                    <p className="text-slate-600 font-semibold text-lg md:text-xl">Muhammed K.</p>
                    <p className="text-slate-400">Software Engineer</p>
                </div>
            </div>
            {/* show messages */}
            <div className="flex gap-2 items-end px-4 md:px-6 max-h-72 overflow-hidden">
                <Logo />
                <div>                    
                    <p className="text-slate-700 bg-slate-100 p-3 rounded-xl border border-slate-200">
                        I’m Muhammed, a <span className="font-semibold">full-stack web developer</span> with a strong foundation in modern 
                        web technologies and a passion for building user-friendly web applications.
                        <span className="hidden md:inline"> Whether it’s crafting clean UIs or solving backend challenges, </span>
                        I’m always looking to grow and build better digital experiences.
                    </p>
                    <p className="text-slate-700 bg-slate-100 mt-1 p-3 rounded-xl border border-slate-200">
                        Type a message <span className="text-xl">👋</span>
                    </p>
                    {messages.map((message, key) => 
                        <p key={key} className="text-slate-700 bg-slate-100 mt-1 p-3 rounded-xl border border-slate-200">{message}</p>
                    )}
                </div>
            </div>
            {/* send message */}
            <form className="flex gap-3 items-center px-4 md:px-6">
                <button type="submit" onClick={e => handleMessage(e)} className="bg-slate-100 p-2 rounded-xl border border-slate-200 hover:bg-slate-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 text-indigo-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </button>
                <div className="w-full">
                    <input type="text" className="w-full text-md md:text-lg text-slate-500 bg-slate-100 p-2 rounded-xl focus:outline-2 focus:outline-indigo-500 border border-slate-200" placeholder="Say Hello!" value={value} onChange={e => setValue(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default Messaging