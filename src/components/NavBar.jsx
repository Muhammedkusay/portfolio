import LargeLogo from "./LargeLogo.jsx";
import SecondaryBtn from "./SecondaryBtn";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { GoPaperclip } from "react-icons/go";


function NavBar() {

    return(
        <nav>
            <header className="md:w-4/5 mx-auto py-4 px-4 md:px-0 flex items-center justify-between">
                <LargeLogo/>
                <div className="flex gap-1">
                    {/* Home */}
                    <a href="/" className="group flex items-center gap-1 text-slate-700 p-2 hover:bg-slate-100 rounded-full">
                        <HiOutlineHome className="text-2xl"/>
                        <span className="max-w-0 group-hover:max-w-[100px] transition-all duration-400 ease-in-out overflow-hidden motion-reduce:transition-none">Home</span>
                    </a>
                    {/* About */}
                    <a href="/#about" className="group flex items-center  gap-1 text-slate-700 p-2 hover:bg-slate-100 rounded-full">
                        <HiOutlineInformationCircle className="text-2xl"/>
                        <span className="max-w-0 group-hover:max-w-[100px] transition-all duration-400 ease-in-out overflow-hidden motion-reduce:transition-none">About</span>
                    </a>
                    {/* Projects */}
                    <a href="/#projects" className="group flex items-center  gap-1 text-slate-700 p-2 hover:bg-slate-100 rounded-full">
                        <GoPaperclip className="text-2xl"/>
                        <span className="max-w-0 group-hover:max-w-[100px] transition-all duration-400 ease-in-out overflow-hidden motion-reduce:transition-none">Projects</span>
                    </a>

                </div>
                <SecondaryBtn text={"Contact"} href={"/"}/>
            </header>
        </nav>
    )
}

export default NavBar;