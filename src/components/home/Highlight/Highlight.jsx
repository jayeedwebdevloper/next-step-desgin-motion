import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoMdCheckmark } from 'react-icons/io';
import { PiCurrencyCircleDollar, PiMinusCircle } from 'react-icons/pi';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
    const bubbleRefs = useRef([]);
    bubbleRefs.current = [];

    const addToRefsBubble = (el) => {
        if (el && !bubbleRefs.current.includes(el)) {
            bubbleRefs.current.push(el);
        }
    };

    useGSAP(() => {
        bubbleRefs.current.forEach((bubble) => {
            gsap.fromTo(bubble,
                { y: 300 },
                {
                    y: -300,
                    scrollTrigger: {
                        trigger: bubble,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        });
    }, []);

    return (
        <div className="w-full relative pt-20 pb-20">
            <div
                ref={addToRefsBubble}
                className="absolute w-60 h-60 rounded-full bubble-shadow z-[-1] bubble"
                style={{ bottom: "25%", left: "5%", background: "linear-gradient(132deg, rgba(81,53,237,1) 0%, rgba(2,0,36,1) 100%)" }}
            />

            <div className="container px-5 mx-auto xl:px-12">
                <div className="w-full relative animate-element">
                    <div style={{
                        background: "linear-gradient(60deg, rgba(0,0,0,1) 0%, #201d25 100%)"
                    }} className="absolute -top-[25%] left-[10%] w-[400px] h-[400px] rounded-full -z-[1]"></div>

                    <h1 className="pt-16 pb-14 text-5xl text-white w-full lg:w-[580px] text-center mx-auto font-bold railway leading-[1.2]">Empower your brand with one flat monthly fee</h1>
                    <p className="text-[#c7b2e3] text-2xl text-center w-full lg:w-[460px] mx-auto pb-16">unreliable freelancers and costly agencies are a thing of the past.</p>
                </div>

                <div className="w-full flex justify-around items-stretch pt-12">
                    <div className="w-full xl:w-[350px] h-[420px] border-[2px] border-indigo-200/20 rounded-3xl bg-blue-600/5 bg-blend-multiply backdrop-blur-sm hover:border-indigo-200/50 transition-all duration-300">
                        <div style={{
                            background: "linear-gradient(60deg, rgba(81,53,237,0.6) 0%, rgba(2,0,36,0.6) 100%)"
                        }} className="w-[80px] h-[80px] rounded-full flex justify-center items-center mx-auto mt-[40px] border border-indigo-400/60">
                            <IoMdCheckmark className="size-10 text-white" />
                        </div>

                        <div className="w-full text-center pt-8">
                            <h3 className="railway font-bold text-white text-5xl">Easy <br /> sign-up</h3>
                            <p className="text-white text-xl pt-5">Yes! You can request <br /> your first design today</p>
                        </div>
                    </div>

                    <div className="w-full xl:w-[350px] h-[420px] border-[2px] border-indigo-200/20 rounded-3xl bg-blue-600/5 bg-blend-multiply backdrop-blur-sm hover:border-indigo-200/50 transition-all duration-300">
                        <div style={{
                            background: "linear-gradient(60deg, rgba(81,53,237,0.6) 0%, rgba(2,0,36,0.6) 100%)"
                        }} className="w-[80px] h-[80px] rounded-full flex justify-center items-center mx-auto mt-[40px] border border-indigo-400/60">
                            <PiMinusCircle className="size-10 text-white" />
                        </div>

                        <div className="w-full text-center pt-8">
                            <h3 className="railway font-bold text-white text-5xl">No <br /> contracts</h3>
                            <p className="text-white text-xl pt-5">You can pause or <br /> cancel anytime</p>
                        </div>
                    </div>

                    <div className="w-full xl:w-[350px] h-[420px] border-[2px] border-indigo-200/20 rounded-3xl bg-blue-600/5 bg-blend-multiply backdrop-blur-sm hover:border-indigo-200/50 transition-all duration-300">
                        <div style={{
                            background: "linear-gradient(60deg, rgba(81,53,237,0.6) 0%, rgba(2,0,36,0.6) 100%)"
                        }} className="w-[80px] h-[80px] rounded-full flex justify-center items-center mx-auto mt-[40px] border border-indigo-400/60">
                            <PiCurrencyCircleDollar className="size-10 text-white" />
                        </div>

                        <div className="w-full text-center pt-8">
                            <h3 className="railway font-bold text-white text-5xl">Fixed <br /> monthly rate</h3>
                            <p className="text-white text-xl pt-5">Complete peace of mind. <br />
                                Pay the same fixed price <br />
                                every month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlight;