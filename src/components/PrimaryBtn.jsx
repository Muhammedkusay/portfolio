
function PrimaryBtn({text, href}) {

    return (
        <a href={href} className="block w-fit px-4 py-2.5 rounded-full text-indigo-50 bg-indigo-600 hover:bg-indigo-700 shadow-sm cursor-pointer">
            {text}
        </a>
    )
}

export default PrimaryBtn;