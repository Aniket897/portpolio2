import ContactBox from "./ContactBox"

const Contact = () => {
    return (
        <div className="w-[90vw] md:w-[70vw] mx-auto mt-[100px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <p className="text-3xl font-extrabold"><span className="text-heading">#</span>Contact</p>
                    <div className="w-[50px] md:w-[300px] h-[1px] bg-heading"></div>
                </div>
            </div>
            <div className="mt-[50px] md:mt-[100px] flex justify-between max-md:flex-col max-md:gap-[50px]">
                <p className="text-gray md:w-[50%]">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                <ContactBox />
            </div>
        </div>
    )
}

export default Contact