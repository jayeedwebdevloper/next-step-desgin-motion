import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LogoLines() {
    const logoContainerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
        const container = logoContainerRef.current;

        if (container) {
            const totalWidth = container.scrollWidth / 2; // Adjusted to account for clone
            tl.fromTo(
                container,
                { x: 0 },
                { x: -totalWidth, duration: 20 }
            );
        }

        return () => tl.kill();
    }, []);

    const logos = [
        "MegaMotion.svg",
        "Neuronfx.svg",
        "Pinreel.svg",
        "Royal.svg",
        "stargate.svg",
        "University.svg"
    ];

    return (
        <div className="w-full overflow-hidden py-12">
            <div ref={logoContainerRef} className="flex whitespace-nowrap">
                {[...logos, ...logos].map((logo, index) => (
                    <img
                        key={index}
                        src={`/images/${logo}`}
                        alt={logo.replace(".svg", "")}
                        className="w-36 mx-12"
                    />
                ))}
            </div>
        </div>
    );
}