import { GoDownload } from "react-icons/go";

function CvBtn() {

    return (
        <a href="/CV_en.pdf" download className="flex items-center gap-3 w-fit px-4 py-2.5 rounded-full bg-indigo-600 text-indigo-50 hover:bg-indigo-700">
            <GoDownload className="text-xl"/>
            Download CV
        </a>
    )
}

export default CvBtn;