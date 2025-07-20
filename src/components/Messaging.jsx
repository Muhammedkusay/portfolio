import { useState } from "react"
import Logo from "./Logo"
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";


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
        <div className="lg:w-1/2 flex flex-col gap-4 pb-4 md:pb-6 border border-slate-200 rounded-2xl md:rounded-4xl shadow-sm">
            {/* img & name */}
            <div className="flex gap-3 items-center py-2.5 px-4 md:px-6 bg-slate-100 border-b border-b-slate-300 rounded-t-2xl md:rounded-t-4xl">
                <div className="w-10 md:w-12 rounded-full overflow-hidden border-2 border-indigo-500">
                    <img src="./src/assets/profile_2.jpg" alt="" />
                </div>
                <div>
                    <p className="text-slate-600 font-semibold text-lg">Muhammed K.</p>
                    <p className="text-slate-400 -mt-1">Software Engineer</p>
                </div>
                <div className="ml-auto p-2.5 text-slate-700 text-lg cursor-pointer hover:bg-slate-200 rounded-full">
                    <BsThreeDotsVertical />
                </div>
            </div>
            {/* show messages */}
            <div className="flex gap-2 items-end px-4 mt-auto md:px-6 max-h-72 overflow-hidden">
                <Logo />
                <div>                    
                    <p className="text-slate-700 bg-slate-100 p-3 rounded-xl border border-slate-200">
                        I’m Muhammed, a <span className="font-semibold">full-stack web developer</span> with a strong foundation in modern 
                        web technologies and a passion for building user-friendly web applications.
                        <span className="hidden md:inline"> Whether it’s crafting clean UIs or solving backend challenges, </span>
                        I’m always looking to grow and build better digital experiences.
                    </p>
                    <p className="text-slate-700 bg-slate-100 mt-1 p-2.5 py-2 rounded-xl border border-slate-200">
                        Type a message <span className="text-xl">👋</span>
                    </p>
                    {messages.map((message, key) => 
                        <p key={key} className="text-slate-700 bg-slate-100 mt-1 p-2.5 rounded-xl border border-slate-200">{message}</p>
                    )}
                </div>
            </div>
            {/* send message */}
            <form className="flex gap-3 px-4 md:px-6">
                <div className="w-full">
                    <input type="text" className="w-full text-md md:text-lg text-slate-500 bg-slate-100 p-2 rounded-xl focus:outline-2 focus:outline-indigo-500 border border-slate-200" placeholder="Say Hello!" value={value} onChange={e => setValue(e.target.value)}/>
                </div>
                <button type="submit" onClick={e => handleMessage(e)} className="bg-slate-100 p-2 px-2.5 rounded-xl border border-slate-200 hover:bg-slate-200 cursor-pointer">
                    <IoMdSend className="text-2xl text-indigo-500" />
                </button>
            </form>
        </div>
    )
}

export default Messaging