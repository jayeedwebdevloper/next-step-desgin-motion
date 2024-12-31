import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./Accordion.css";
import { FaPlus } from 'react-icons/fa';
import parse from 'html-react-parser';

const Accordion = ({ title, content, index, isOpen, toggleAccordion }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(contentRef.current,
                { height: 0, opacity: 0 },
                { height: contentRef.current.scrollHeight, opacity: 1, duration: 0.5, ease: 'power3.inOut' }
            );
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.inOut' });
        }
    }, [isOpen]);

    return (
        <div className="accordion w-full border-indigo-200/25 rounded-3xl border-[2px] bg-blue-200/5 backdrop-blur-xs hover:border-indigo-200/50 transition-all duration-300">
            <div className="accordion-header py-12 px-12 flex justify-between items-center" onClick={() => toggleAccordion(index)}>
                <h3 className='text-2xl railway font-semibold'>{title}</h3>
                <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                    <FaPlus size={20} className={`${isOpen ? "rotate-45" : "rotate-0"} transition-all duration-300`} />
                </div>
            </div>
            <div className="accordion-content" ref={contentRef}>
                <div className="accordion-content-inner px-12 bg-[#1c1c1c] py-12 w-11/12 mx-auto mb-12 rounded-3xl">
                    {
                        parse(content)
                    }
                </div>
            </div>
        </div>
    );
};

export default Accordion;