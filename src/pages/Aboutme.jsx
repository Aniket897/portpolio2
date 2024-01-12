import Nav from "../components/Nav"
import Skills from "../components/Skills";

const Aboutme = () => {
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
        <div>
            <Nav title={"About-me"} des="who i am" />
            <div className="mt-[100px] flex items-center justify-between w-[70vw] mx-auto">
                <div className="w-[50%] flex flex-col gap-y-4 text-gray">
                    <p>👋 Hello, i’m Aniket!</p>

                    <p>a self-taught passionate FrontEnd developer from India. I've been building stuff on the 🌐 web since when I was in 10th standard, I've made countless projects and I also posses 🪄 magical powers of using react to build 🚀 delightful user interfaces.
                    </p>
                    <p>
                        Proactive React developer proficient in JavaScript and React.js framework. Solid understanding of frontend technologies including HTML, CSS. Collaborative team player with strong problem-solving skills and attention to detail. Experienced in integrating frontend components with server-side logic using Git for collaborative projects.</p>

                    <div className="mt-5  flex items-center gap-1">
                        {EmailLink()}
                        <a href="https://drive.google.com/file/d/1Oa4ZtRlLyCFHyLRpwOwwuVyzsG5hlISj/view?usp=sharing" target="_blank" className="btn-primary">Resume ~~></a>
                    </div>
                </div>
                <div className="rounded-full overflow-hidden w-[30%] aspect-square">
                    <img className="w-full h-full object-cover" src="/profile.png" alt="" />
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default Aboutme;