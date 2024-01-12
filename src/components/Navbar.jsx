import { Link, useLocation } from "react-router-dom"

const NavLinks = [
    { name: "home", href: "/" },
    { name: "works", href: "/works" },
    { name: "about-me", href: "/about-me" },
]


const Navbar = () => {

    const { pathname } = useLocation();

    return (
        <div className="w-[90vw] md:w-[70vw] mx-auto flex items-center justify-between py-4">
            <Link to={'/'} className="flex items-center gap-1">
                <img src="/logo.svg" alt="" />
                <p className="font-bold text-2xl">Aniket</p>
            </Link>
            <div className="flex items-center gap-9 max-md:hidden">
                {
                    NavLinks.map((item, index) => {
                        return (
                            <a href={item.href} className={`${pathname == item.href ? "text-white" : "text-gray hover:text-white"} cursor-pointer duration-300`} key={index}>#{item.name}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;