import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);

    return (
        <div className={`w-full py-7 z-[200] bg-black/60 fixed left-0 right-0 backdrop-blur-3xl border-b border-white/20 transition-all duration-500 ${isScroll ? "visible top-0" : "invisible -top-full"}`}>
            <div className="container mx-auto px-5 xl:px-12">
                <nav className="w-full flex justify-between items-center">
                    <div className="logo w-[60px] flex-shrink-0">
                        <Link to={"/"}>
                            <img className="w-full" src="/images/logo.png" alt="design motion" />
                        </Link>
                    </div>
                    <div className="w-full flex-grow">
                        <ul className="flex justify-end items-center gap-[20px]">
                            <li>
                                <NavLink className="px-[20px] border-2 border-transparent hover:border-[#e1caff] py-3 rounded-3xl transition-all duration-300" to="/">Benefits</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-[20px] border-2 border-transparent hover:border-[#e1caff] py-3 rounded-3xl transition-all duration-300" to="/">Our Work</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-[20px] border-2 border-transparent hover:border-[#e1caff] py-3 rounded-3xl transition-all duration-300" to="/">Our Services</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-[20px] border-2 border-transparent hover:border-[#e1caff] py-3 rounded-3xl transition-all duration-300" to="/">Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-[20px] border-2 border-transparent hover:border-[#e1caff] py-3 rounded-3xl transition-all duration-300" to="/">FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-[20px] border-2 border-[#e1caff] hover:border-[#3830e3] py-3 rounded-3xl transition-all duration-300" to="/">Let's Talk!</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
