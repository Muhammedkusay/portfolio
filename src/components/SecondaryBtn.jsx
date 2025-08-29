
function SecondaryBtn({text, href, target="_self", width="auto", children}) {

    return (
        <a href={href} style={{width: width}} target={target} className="flex items-center justify-center w-fit px-2.5 md:px-4 py-2.5 rounded-full text-slate-800 bg-slate-100 hover:bg-slate-200 border border-gray-200 cursor-pointer">
            <span>{text}</span>
            <span>{children}</span>
        </a>
    )
}

export default SecondaryBtn;