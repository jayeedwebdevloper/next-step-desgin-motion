import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Banner() {
    const bubbleRefs = useRef([]);
    bubbleRefs.current = [];
    const textRefs = useRef([]);
    textRefs.current = [];

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: { duration: 1 } });
        const [design, motion] = textRefs.current;

        tl.fromTo(
            design,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
            .to(design, { opacity: 0, duration: 0.5, delay: 1 })
            .fromTo(
                motion,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )
            .to(motion, { opacity: 0, duration: 0.5, delay: 1 });

        return () => tl.kill();
    }, []);

    const handleScrollAnimation = () => {
        bubbleRefs.current.forEach((bubble) => {
            gsap.to(bubble, { y: -window.pageYOffset, ease: "power1.out" });
        });
    };

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
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
        <div className="w-full relative">
            <div
                ref={addToRefsBubble}
                className="absolute w-32 h-32 rounded-full bubble-shadow z-[-1]"
                style={{ top: "40%", left: "15%", background: "linear-gradient(132deg, rgba(81,53,237,1) 0%, rgba(2,0,36,1) 100%)" }}
            />
            <div
                ref={addToRefsBubble}
                className="absolute w-24 h-24 rounded-full bubble-shadow z-[-1]"
                style={{ top: "90%", left: "5%", background: "linear-gradient(132deg, rgba(108,61,230,1) 0%, rgba(159,79,182,1) 34%, rgba(227,105,120,1) 100%)" }}
            />
            <div
                ref={addToRefsBubble}
                className="absolute w-10 h-10 rounded-full bubble-shadow z-[-1]"
                style={{ bottom: "-5%", left: "35%", background: "linear-gradient(132deg, rgba(108,61,230,1) 0%, rgba(159,79,182,1) 34%, rgba(227,105,120,1) 100%)" }}
            />
            <div
                ref={addToRefsBubble}
                className="absolute w-14 h-14 rounded-full bubble-shadow z-[-1]"
                style={{ top: "85%", left: "52%", background: "linear-gradient(132deg, rgba(108,61,230,1) 0%, rgba(159,79,182,1) 34%, rgba(227,105,120,1) 100%)" }}
            />
            <div
                ref={addToRefsBubble}
                className="absolute w-52 h-52 rounded-full bubble-shadow z-[-1]"
                style={{ top: "70%", left: "75%", background: "linear-gradient(132deg, rgba(81,53,237,1) 0%, rgba(2,0,36,1) 100%)" }}
            />

            <div className="container mx-auto px-5 xl:px-12 pt-[30px]">
                <div className="py-23 h-screen w-full flex justify-center items-center flex-col">
                    <img
                        className="w-[120px] mx-auto"
                        src="/images/logo.png"
                        alt="design and motion"
                    />

                    <h1 className="text-center font-bold text-white text-8xl pt-8 railway">
                        <span className="flex justify-between">
                            <span className="relative w-auto pe-12 block">
                                <span
                                    ref={addToRefs}
                                    className="absolute top-0 left-0 w-full text-center"
                                    style={{
                                        opacity: 0,
                                        whiteSpace: "nowrap",
                                        zIndex: 1
                                    }}
                                >
                                    Design
                                </span>
                                <span
                                    ref={addToRefs}
                                    className="absolute top-0 left-0 w-full text-center"
                                    style={{
                                        opacity: 0,
                                        whiteSpace: "nowrap",
                                        zIndex: 1
                                    }}
                                >
                                    Motion
                                </span>
                            </span>
                            <span className="w-60"></span>
                            <span className="ps-12">when</span>
                        </span>
                        you need it!
                    </h1>
                    <h2 className="text-2xl text-center text-[#a9a9a9] pt-8">Your on demand design team</h2>
                    <button className="text-[15px] font-semibold text-white mt-10 border border-white/20 px-8 py-3.5 rounded-e-full rounded-s-full bg-white/5 backdrop-blur-lg hover:border-[#e1caff] transition-all duration-300 hover-shadow">Register Your Interest</button>
                    <p className="text-xs font-bold text-[#a191b7] pt-2">Limited spots available</p>
                </div>
            </div>
        </div>
    );
}