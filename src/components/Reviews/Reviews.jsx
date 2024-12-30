import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MdOutlineFormatQuote, MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Aaron Micallef",
            title: "University of Malta",
            comment: "It has been an absolute pleasure working with Stephan. Communication was clear, and I found the final product to be extremely professional."
        },
        {
            id: 2,
            name: "Melvin",
            title: "NuronDigital Ltd",
            comment: "Designplusmotion created user-friendly interface designs and produced animated graphics & marketing materials for one of our main apps."
        },
        {
            id: 3,
            name: "Neuronfx",
            title: "Product review",
            comment: "We all want to give our clients the 'wow' factor and this delivered it in spades. Thanks for making me look brilliant."
        }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewRef = useRef(null);
    const sectionRef = useRef(null);

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    useEffect(() => {
        if (reviews && reviews.length > 0) {
            const tl = gsap.timeline();
            tl.fromTo(
                reviewRef.current.querySelectorAll('.review-text'),
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
            );
        }
    }, [currentIndex, reviews]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.to(sectionRef.current, { opacity: 1, scale: 1, duration: 0.5 });
                } else {
                    gsap.to(sectionRef.current, { opacity: 0, scale: 0.8, duration: 0.5 });
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    if (!reviews || reviews.length === 0) {
        return <div>No reviews available</div>;
    }

    return (
        <div ref={sectionRef} className="w-full py-20 opacity-0 scale-0.8 transition-all duration-500">
            <div className="container mx-auto px-5 xl:px-12">
                <div className="relative">
                    <div ref={reviewRef} className="py-12 px-20 text-center border-[2px] border-indigo-200/20 rounded-3xl bg-gradient-to-r from-[#040210] via-[#150f1a] to-[#05030e] backdrop-blur-lg hover:border-indigo-200/50 transition-all duration-300">
                        <MdOutlineFormatQuote className='text-center mx-auto text-[#bf94f6]' size={30} />
                        <p className="text-[#bf94f6] review-text text-5xl leading-[1.4] railway font-semibold">{reviews[currentIndex].comment}</p>
                        <h3 className="text-2xl font-normal mb-2 review-text text-[#bf94f6] pt-8">{reviews[currentIndex].name} - {reviews[currentIndex].title}</h3>
                    </div>
                    <button
                        onClick={prevReview}
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full transition-opacity duration-300 ${currentIndex === 0 ? 'opacity-0 cursor-not-allowed' : 'opacity-100'}`}
                        disabled={currentIndex === 0}
                    >
                        <MdArrowBackIosNew size={30} />
                    </button>
                    <button
                        onClick={nextReview}
                        className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full transition-opacity duration-300 ${currentIndex === reviews.length - 1 ? 'opacity-0 cursor-not-allowed' : 'opacity-100'}`}
                        disabled={currentIndex === reviews.length - 1}
                    >
                        <MdArrowForwardIos size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;