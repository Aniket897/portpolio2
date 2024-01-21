
const Hero = () => {
    const EmailLink = () => {
        const recipient = 'aniketbkangane9637@gmail.com';
        const subject = '';
        const body = '';

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return (
            <a href={mailtoLink} className="btn-primary flex items-center justify-center gap-1"> <ion-icon name="mail-unread-outline"></ion-icon> email me !!</a>
        );
    }
    return (
        <div className=" w-[90vw] lg:w-[70vw] mx-auto flex mt-[50px] md:mt-[150px] max-md:flex-col items-center justify-between">
            <div className="md:w-[50%] flex flex-col gap-y-4" >
                <p className="text-5xl font-extrabold">Aniket is a <span className="text-heading">web designer</span> and <span className="text-heading">front-end developer</span></p>
                <p className="text-gray mt-3 text-xl">He crafts responsive websites where technologies meet creativity</p>
                {EmailLink()}
            </div>
            <div className="mt-[40px] md:mt-[-80px]">
                <img src="/heroimg.svg" alt="" />
                <div className="flex items-center justify-center p-2 border border-gray gap-3">
                    <div className="w-3 h-3 bg-heading"></div>
                    <p className="text-gray">Open for new opportunities
                        <span className="text-white"> Nothing</span></p>
                </div>
            </div>
        </div>
    )
}

export default Hero;