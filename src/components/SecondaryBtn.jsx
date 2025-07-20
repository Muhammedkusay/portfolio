
function SecondaryBtn({text, href}) {

    return (
        <a href={href} className="block w-fit px-4 py-2.5 rounded-full text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-gray-200 shadow-sm cursor-pointer">
            {text}
        </a>
    )
}

export default SecondaryBtn;