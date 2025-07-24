
function ProgrammingBadget({text, children}) {

    return(
        <div className="size-11 md:w-fit md:h-11 md:px-2.5 flex items-center justify-center rounded-full bg-slate-50 border">

            {children && <span className="text-2xl text-slate-700">{children}</span>}
            {text && <p className="hidden md:block pl-1.5 text-slate-700 text-sm">{text}</p>}
        </div>
    )
}

export default ProgrammingBadget