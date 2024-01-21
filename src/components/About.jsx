
const About = () => {
    return (
        <div className="w-[90vw] md:w-[70vw] mx-auto mt-[100px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <p className="text-3xl font-extrabold"><span className="text-heading">#</span>About-me</p>
                    <div className="w-[100px] md:w-[300px] h-[1px] bg-heading"></div>
                </div>
            </div>
            <div className=" mt-[50px] md:mt-[100px] flex items-center justify-between max-md:flex-col max-md:gap-[60px]">
                <div className="md:w-[50%] flex flex-col gap-y-4 text-xl">
                    <p className=" text-gray">👋 Hello, i’m Aniket Kangane!</p>

                    <p className=" text-gray">a self-taught passionate FrontEnd developer from India. I've been building stuff on the 🌐 web since when I was in 10th standard, I've made countless projects and I also posses 🪄 magical powers of using react to build 🚀 delightful user interfaces.</p>

                    <div className="flex items-center gap-4">
                        {/* <button className="btn-primary">Contact Me</button> */}
                        <a href="https://drive.google.com/file/d/1Oa4ZtRlLyCFHyLRpwOwwuVyzsG5hlISj/view?usp=sharing" target="_blank" className="btn-primary">Resume ~~></a>
                    </div>
                </div>
                <div className="rounded-full overflow-hidden md:w-[30%] aspect-square">
                    <img className="w-full h-full object-cover" src="/profile.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About