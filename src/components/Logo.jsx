
function Logo({size}) {

    const logoSize = " text-" + size;

    return(
        <div className="w-fit px-2 py-1 font-bold rounded-md text-white bg-indigo-600 select-none">
            <p className={logoSize}>M</p>
        </div>
    )
}

export default Logo;