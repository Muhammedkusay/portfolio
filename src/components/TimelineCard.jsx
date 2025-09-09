import { GoArrowUpRight } from "react-icons/go";

function TimelineCard({month, year, company, url, children}) {

    return(
        <div className="flex-1 relative border border-slate-300 rounded-2xl p-4">
            
            <div className="absolute -left-15 top-1/2 -translate-y-1/2 lg:-top-9 lg:left-1/2 lg:-translate-x-1/2 bg-white px-2">
                <span className="hidden md:inline md:mr-1">{month}</span>
                {year}
            </div>

            <h3 className="font-bold pb-2 text-sm">{company}</h3>
            {children && <div className="h-[91%] flex flex-col text-sm">{children}</div>}

            {url && 
            <a href={url} target="_blank" alt={company} className="absolute bottom-4 right-4 flex items-center gap-2 cursor-pointer text-slate-600 hover:bg-slate-100 px-4 py-1 rounded-full">
                <span>Visit</span>
                <GoArrowUpRight />
            </a>}
        </div>
    )
}

export default TimelineCard;