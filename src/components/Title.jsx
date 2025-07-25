
function Title({text}) {

    return(
        <div className="w-full relative">
            <div className="md:w-fit mx-auto text-center py-6">
                <p className="-z-10 w-full md:w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-7xl lg:text-9xl font-bold text-slate-200">{text}</p>
                <h2 className="z-20 text-5xl md:text-6xl font-semibold text-slate-800">{text}</h2>
            </div>
        </div>
    )
}

export default Title