
const ContactBox = () => {
    const EmailLink = () => {
        const recipient = 'aniketbkangane9637@gmail.com';
        const subject = '';
        const body = '';

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return (
            <a href={mailtoLink} className="flex items-center gap-1 p-3 cursor-pointer hover:text-heading duration-500"><ion-icon name="mail-unread-outline"></ion-icon> aniketbkangane9637@gmail.com</a>
        );
    }


    return (
        <div className="border border-gray">
            <p className="font-bold p-3 border-b border-b-gray">Message me Here</p>
            <div className=" flex flex-col gap-1">
                <a href="" target="_blank" className="flex items-center gap-1 p-3 cursor-pointer hover:text-heading duration-500"> <ion-icon name="logo-linkedin"></ion-icon> aniket kangane</a>
                {EmailLink()}
            </div>
        </div>
    )
}

export default ContactBox;