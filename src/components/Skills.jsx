import SkillBox from "./SkillBox"

const Skills = () => {
    return (
        <div className="w-[90vw] md:w-[70vw] mx-auto mt-[100px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <p className="text-3xl font-extrabold"><span className="text-heading">#</span>Skills</p>
                    <div className="w-[100px] md:w-[300px] h-[1px] bg-heading"></div>
                </div>
            </div>
            <div className="mt-[50px] grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[50px] md:gap-3">
                <SkillBox heading="Languages" skills={["Javascript" , "Python" , "Java" , "Typescript"]}/>
                <SkillBox heading="FrameWroks" skills={["React"]}/>
                <SkillBox heading="Tools" skills={["Vs code" , "Git" , "Github"]}/>
                <SkillBox heading="Others" skills={["HTML" , "CSS" , "TailwindCSS" , "Styled Components"]}/>
            </div>
        </div>
    )
}

export default Skills