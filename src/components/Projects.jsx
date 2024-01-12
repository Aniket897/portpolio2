import ProjectCard from "./ProjectCard"

const projects = [
    {
        image: "https://aniket-kangane.vercel.app/event-prime.png",
        techStack: ["REACT", "ExpressJs", "MongoDb", "NodeJs", "Stripe"],
        title: "Event-Prime clone",
        description: "event prime is a platform where companies can host events and sell tickets to customer",
        live: "https://event-prime-clone.vercel.app/",
        github: "https://github.com/Aniket897/event-prime-clone"
    },
    {
        image: "https://aniket-kangane.vercel.app/halloween-shop.png",
        techStack: ["REACT", "TailwindCSS", "Readux-toolkit"],
        title: "halloween-shop clone",
        description: "halloween shop is a ecommerce website where cusomer get products related to halloween",
        live: "https://halloween-shop-clone.vercel.app/",
        github: "https://github.com/Aniket897/halloween-shop-clone"
    },
    {
        image: "https://d33wubrfki0l68.cloudfront.net/655640d339b93419b086ce8d/screenshot_2023-11-16-16-18-55-0000.png",
        techStack: ["HTML", "CSS"],
        title: "bewkoof.com clone",
        description: "bewkoof.com is a ecommerce website.",
        live: "https://joyful-truffle-91c4b3.netlify.app/",
        github: "https://github.com/Aniket897/bewakoof.com-clone"
    }
]


const Projects = () => {
    return (
        <div className="w-[90vw] md:w-[70vw] mx-auto mt-[100px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <p className="text-3xl font-extrabold"><span className="text-heading">#</span>Projects</p>
                    <div className="w-[100px] md:w-[300px] h-[1px] bg-heading"></div>
                </div>
                <div>
                    <a href={'/works'} className="hover:text-heading duration-200 cursor-pointer">View all {`~~>`}</a>
                </div>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[50px] md:gap-3 mt-[50px]">
                {projects.map((item, index) => <ProjectCard key={index} project={item} />)}
            </div>
        </div>
    )
}

export default Projects;