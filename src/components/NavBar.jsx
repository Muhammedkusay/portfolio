import LargeLogo from "./LargeLogo.jsx";
import SecondaryBtn from "./SecondaryBtn";

function NavBar() {

    return(
        <nav>
            <header className="md:w-4/5 mx-auto py-4 px-4 md:px-0 flex items-center justify-between">
                <LargeLogo/>
                <div className="flex gap-1">
                    {/* Home */}
                    <a href="/" className="group flex gap-1 text-slate-700 p-2 hover:bg-slate-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span className="max-w-0 group-hover:max-w-[100px] transition-all duration-400 ease-in-out overflow-hidden motion-reduce:transition-none">Home</span>
                    </a>
                    {/* About */}
                    <a href="/#about" className="group flex gap-1 text-slate-700 p-2 hover:bg-slate-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <span className="max-w-0 group-hover:max-w-[100px] transition-all duration-400 ease-in-out overflow-hidden motion-reduce:transition-none">About</span>
                    </a>
                    {/* Projects */}
                    <a href="/" className="group flex gap-1 text-slate-700 p-2 hover:bg-slate-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                        </svg>
                        <span className="max-w-0 group-hover:max-w-[100px] transition-all duration-400 ease-in-out overflow-hidden motion-reduce:transition-none">Projects</span>
                    </a>

                </div>
                <SecondaryBtn text={"Contact"} href={"/"}/>
            </header>
        </nav>
    )
}

export default NavBar;