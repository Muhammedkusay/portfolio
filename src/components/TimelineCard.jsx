
function TimelineCard({month, year, company, img, children}) {

    return(
        <div className="flex-1 relative border border-slate-300 rounded-2xl p-4">
            
            <div className="absolute -left-15 top-1/2 -translate-y-1/2 lg:-top-9 lg:left-1/2 lg:-translate-x-1/2 bg-white px-2">
                <span className="hidden md:inline md:mr-1">{month}</span>
                {year}
            </div>

            <h3 className="font-bold pb-2 text-sm">{company}</h3>
            {children && <div className="h-[91%] flex flex-col text-sm">{children}</div>}

        </div>
    )
}

export default TimelineCard;