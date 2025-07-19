
function LargeLogo({size}) {

    const logoSize = " text-" + size;

    return(
        <div className="select-none flex items-end gap-0.5">
            <p className={"w-fit px-2 py-1 font-bold rounded-md text-white bg-indigo-600 " + logoSize}>M</p>
            <p className={"hidden md:block text-gray-700" + logoSize}>uhammed</p>
        </div>
    )
}

export default LargeLogo;