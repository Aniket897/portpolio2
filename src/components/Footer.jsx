
const Footer = () => {
    return (
        <div className="border-t p-6 mt-[100px]">
            <div className="flex items-center justify-between max-md:flex-col md:w-[70vw] mx-auto">
                <div className="flex flex-col gap-y-5">
                    <div className="flex items-center gap-3">
                        <p>Aniket</p>
                        <p className="text-gray">aniketbkangane9637@gmail.com</p>
                    </div>
                    <div>
                        <p>Web designer and front-end developer based in Mumbai, India</p>
                    </div>
                </div>
                <div>
                    <p className="font-extrabold text-2xl max-sm:mt-[20px]">Socials</p>
                    <div>
                        <a className="flex items-center gap-3 hover:text-heading mt-3" href="https://www.linkedin.com/in/aniket-kangane/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon> Linkedin</a>
                        <a className="flex items-center gap-3 hover:text-heading mt-3" href="https://github.com/Aniket897" target="_blank"><ion-icon name="logo-github"></ion-icon> Github</a>
                    </div>
                </div>
            </div>
            <p className="text-center mt-[50px] text-heading">
                <p>© Copyright 2023. code by Aniket and design by Elies</p>
            </p>
        </div>
    )
}

export default Footer;