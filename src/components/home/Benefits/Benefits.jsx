import Lottie from 'react-lottie-player'

import taskAnimation from '../../../utils/animation/taskAnimation.json'
import boxZoomAnimation from '../../../utils/animation/boxZoomAnimation.json'
import diamondAnimation from '../../../utils/animation/diamondAnimation.json'
import securityAnimation from '../../../utils/animation/securityAnimation.json'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useRef, useState } from 'react';
import parse from 'html-react-parser';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {

    const [isOpen, setIsOpen] = useState(null);

    const benefitsData = [
        {
            title: "Less meetings. More work.",
            desc: `<p class="text-2xl text-[#bf94f6] pb-5">Tired of meetings? We feel the same, that's why we work completely without them. Submit requests with ease.</p>
            <p class="text-2xl text-[#bf94f6] pb-5">Effortlessly comment or view active, queued, and completed tasks <i>(trust us, you will love it!)</i></p>
            `,
            highlight: "Submit a request and we will start working. We will revise the design until you are 100% satisfied!",
            animation: taskAnimation
        },
        {
            title: "10x Faster than hiring",
            desc: `<p class="text-2xl text-[#bf94f6] pb-5">Scale up or down as needed. You can pause or cancel whenever you need.</p>`,
            highlight: "One request? Pause and resume when you have further design needs.",
            animation: boxZoomAnimation
        },
        {
            title: "Consistent quality",
            desc: `<p class="text-2xl text-[#bf94f6] pb-5">With over 12 Years of experience we offer exceptional design quality right when you need it.</p>`,
            highlight: "No more vetting new designers. You will get consistent reliable quality every time.",
            animation: diamondAnimation
        },
        {
            title: "Bespoke designs. Fully yours.",
            desc: `<p class="text-2xl text-[#bf94f6] pb-5">Your designs are crafted exclusively for you, ensuring they are 100% yours.</p>`,
            highlight: "Your designs are made according to your specifications, and upon delivery, they will become entirely yours.",
            animation: securityAnimation
        },
    ];

    const openToggle = (index) => { 
        if(isOpen == index) {
            setIsOpen(null);
        } else {
            setIsOpen(index);
        }
    }

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
        <div className="w-full relative py-20">
            <div
                ref={addToRefsBubble}
                className="absolute w-60 h-60 rounded-full bubble-shadow z-[-1] bubble"
                style={{ top: "40%", right: "5%", background: "linear-gradient(132deg, rgba(81,53,237,1) 0%, rgba(2,0,36,1) 100%)" }}
            />

            <div className="container mx-auto px-5 xl:px-12">
                <div className="w-full text-center relative">
                    <div style={{
                        background: "linear-gradient(60deg, #100b31 0%, #010101 70%)"
                    }} className="absolute -top-[40%] left-[10%] w-[400px] h-[400px] rounded-full -z-[1] border border-white/10"></div>
                    
                    <h2 className="text-5xl railway text-white font-semibold text-center pb-8 pt-10">Subscription Benefits</h2>
                    <p className="w-full lg:w-[500px] text-2xl text-[#bf94f6]/80 text-center mx-auto">Once you experience them, you'll wonder how you ever managed without!</p>

                    <button className="text-[15px] font-semibold text-white mt-10 border border-white/20 px-8 py-3.5 rounded-e-full rounded-s-full bg-white/5 backdrop-blur-lg hover:border-[#e1caff] transition-all duration-300 hover-shadow mb-12">See Plans</button>
                </div>

                {
                    benefitsData?.map((benefit, index) => (
                        <div key={index} className={`flex justify-center items-center ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} py-6`}>
                            <div className="w-1/2">
                                <div className="w-10/12 mx-auto border-[2px] border-indigo-200/20 rounded-3xl bg-blue-600/5 bg-blend-multiply backdrop-blur-sm hover:border-indigo-200/50 transition-all duration-300 pt-2 pb-10 px-2">
                                    <button className='ms-auto block' onClick={() => openToggle(index)}><IoIosCloseCircleOutline size={40} className={`text-white/60 ${index == isOpen ? "rotate-0" : "rotate-45"} transition-all duration-300`} /></button>
                                    <div className={`w-11/12 mx-auto px-6 bg-[#2df966]/15 shadow-content rounded-3xl border-[2px] border-[#2df966] ${index == isOpen ? "scale-100 visible h-auto mt-2 mb-5 py-5" : "scale-0 invisible h-0 mt-0 mb-0"} transition-all duration-500`}>
                                        <p className='text-xl text-[#2df966]'>{benefit?.highlight}</p>
                                    </div>
                                    <div className={`w-full px-12 ${index == isOpen ? "opacity-45" : "opacity-100"} transition-all duration-500`}>
                                        <h4 className='text-4xl railway font-semibold'>{benefit?.title}</h4>
                                        <div className='pt-5'>
                                            {
                                                parse(benefit?.desc)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="w-8/12 mx-auto">
                                    <Lottie
                                        loop
                                        animationData={benefit?.animation}
                                        play
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Benefits;