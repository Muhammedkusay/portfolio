import ImageCarousel from "./ImageCarousel";

function ProjectCard({ imgs, children }) {

    return (
        <div className="w-full lg:w-1/2 flex flex-col border border-slate-200 rounded-3xl overflow-hidden">
            <ImageCarousel imgs={imgs} />
            {children}
        </div>
    )
}

export default ProjectCard;