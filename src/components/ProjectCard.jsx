
const ProjectCard = ({project}) => {
  return (
    <div className="border border-gray">
        <img src={project.image} alt="" />
        <div className="flex items-center flex-wrap gap-4 text-gray p-4 border-y border-y-gray">
            {project.techStack.map((item ,index) => <p key={index}>{item}</p>)}
        </div>
        <div className="p-4 flex flex-col gap-y-3">
            <h1 className="font-bold text-xl">{project.title}</h1>
            <p className=" text-gray">{project.description}</p>
            <div className="flex items-center gap-4">
                <a href={project.live} rel="noreferrer" target="_blank" className="btn-primary cursor-pointer">Live</a>
                <a href={project.github}  rel="noreferrer" target="_blank" className="btn-primary cursor-pointer">Github</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;