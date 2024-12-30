import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsImg() {
    const containerRef = useRef(null);
    const imageRefs = useRef([]);
    imageRefs.current = [];

    const addToRefs = (el) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    useGSAP(() => {
        const container = containerRef.current;
        const images = imageRefs.current;

        if (container && images.length) {
            gsap.set(images, { xPercent: 0, opacity: 1 });

            gsap.to(images, {
                xPercent: -100 * (images.length - 1) / 2,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "center center",
                    end: "+=2000",
                    scrub: true,
                    pin: true,
                },
            });
        }
    }, []);

    const screenshots = [
        "project1.jpg",
        "project2.jpg",
        "project3.jpg",
        "project4.jpg"
    ];

    return (
        <div ref={containerRef} className="w-full py-12 overflow-hidden">
            <div className="flex space-x-4">
                {screenshots.map((screenshot, index) => (
                    <img
                        key={index}
                        src={`/images/${screenshot}`}
                        alt={`Project ${index + 1}`}
                        ref={addToRefs}
                        className="w-[500px] rounded-2xl h-[600px] ms-36 object-cover"
                    />
                ))}
            </div>
        </div>
    );
}