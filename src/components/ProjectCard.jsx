import ImageCarousel from "./ImageCarousel";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

function ProjectCard({ project, children }) {

    let imgs = project.imgs

    return (
        <div className="w-full flex flex-col border border-slate-200 rounded-3xl overflow-hidden">
            <ImageCarousel imgs={imgs} />
            <div className="h-full p-4 flex flex-col gap-3 lg:gap-4">
                <div className="mt-auto">
                    {/* title */}
                    <h1 className="text-3xl text-slate-700">{project.title}</h1>
                    {/* date */}
                    <p className="text-slate-500">{project.date}</p>
                </div>
                {/* text */}
                <p className="max-h-20 text-slate-500 line-clamp-3">{project.text}</p>
                {/* technologies logo */}
                {children}
                {/* links */}
                <div className="flex items-center gap-3">
                    <SecondaryBtn width="100%" text="View Repo" href={project.links[0]} target="_blank" />
                    {
                    project.links[1] &&               
                    <PrimaryBtn width="100%" text="Try Now" href={project.links[1]} target="_blank" />
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard;