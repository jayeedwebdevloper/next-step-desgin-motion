import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Video() {
    const bubbleRefs = useRef([]);
    bubbleRefs.current = [];

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: { duration: 1 } });
        return () => tl.kill();
    }, []);

    const handleScrollAnimation = () => {
        bubbleRefs.current.forEach((bubble) => {
            gsap.to(bubble, { y: -window.pageYOffset, ease: "power1.out" });
        });
    };
    const addToRefsBubble = (el) => {
        if (el && !bubbleRefs.current.includes(el)) {
            bubbleRefs.current.push(el);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            handleScrollAnimation();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full h-auto py-14 relative">
            <div
                ref={addToRefsBubble}
                className="absolute w-[400px] h-[400px] rounded-full bubble-shadow z-[-1]"
                style={{ top: "80%", right: "0", background: "linear-gradient(132deg, rgba(81,53,237,1) 0%, rgba(2,0,36,1) 100%)" }}
            />
            <div
                ref={addToRefsBubble}
                className="absolute w-[280px] h-[280px] rounded-full bubble-shadow z-[-1]"
                style={{ bottom: "-80%", left: "2%", background: "linear-gradient(132deg, rgba(81,53,237,1) 0%, rgba(2,0,36,1) 100%)" }}
            />
            <div className="container mx-auto px-5 xl:px-12">
                <div className="w-11/12 p-4 border border-white/30 mx-auto rounded-lg bg-blue-600/10 bg-blend-multiply backdrop-blur-lg hover:border-[#e1caff] transition-all duration-300 shadow shadow-blue-400/20">
                    <div className="relative w-full h-[600px] bg-blue-700/5">
                        <img className="w-full h-full object-cover opacity-20" src="/images/videoThumb.jpg" alt="design and motion" />
                        <button className="w-44 h-44 background-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 playButton">
                            <img className="w-full" src="/images/play.svg" alt="play" />
                        </button>
                    </div>

                    <div className="py-6 text-center">
                        <h1 className="text-5xl railway font-bold text-center pt-4">Let's Talk!</h1>
                        <p className="text-2xl text-white/80 text-center leading-7 pt-3 font-thin">Learn more about how it <br />
                            works and how we can help you.</p>
                        <button className="font-semibold text-white mt-11 border border-white/20 px-8 py-3.5 rounded-e-full rounded-s-full bg-white/5 backdrop-blur-lg hover:border-[#e1caff] transition-all duration-300 hover-shadow">Book a call</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
