import { useState } from "react";
import PricingBox from "./PricingBox/PricingBox";
import { Link } from "react-router-dom";

const Pricing = () => {

    const [plans, setPlans] = useState("standard");
    const plansData = [
        {
            title: "Standard",
            price: 2495,
            frequency: "month",
            content: `<p class="text-white text-xl py-1">One Request at a time</p>
            <p class="text-xl py-1 text-[#7f7f7f]">Completely flexible, pause or cancel anytime.</p>`,
            features: [
                {
                    title: "1 Active Request at a time"
                },
                {
                    title: "Unlimited Requests to your Queue"
                },
                {
                    title: "Unlimited Revisions"
                },
                {
                    title: "Graphic & Motion Design"
                },
                {
                    title: "Web Design"
                },
                {
                    title: "5 Business Day Support"
                },
                {
                    title: "Pause or cancel anytime"
                }
            ]
        },
        {
            title: "Professional",
            price: 3495,
            frequency: "month",
            content: `
            <p class="text-white text-xl py-1">Two Requests at a time</p>
            <p class="text-white text-xl py-1">Includes both Web Design & Webflow Development</p>
            <p class="text-xl py-1 text-[#7f7f7f]">Completely flexible, pause or cancel anytime.</p>`,
            features: [
                {
                    title: "1 Active Request at a time"
                },
                {
                    title: "Unlimited Requests to your Queue"
                },
                {
                    title: "Unlimited Revisions"
                },
                {
                    title: "Graphic & Motion Design"
                },
                {
                    title: "Web Design + Webflow Development"
                },
                {
                    title: "5 Business Day Support"
                },
                {
                    title: "Pause or cancel anytime"
                }
            ]
        }
    ]

    return (
        <div className="w-full relative py-10">
            <div className="container mx-auto px-5 xl:px-12">
                <div className="w-full text-center relative">
                    <div style={{
                        background: "linear-gradient(160deg, #2e2a34 0%, #010101 60%)"
                    }} className="absolute -top-[5%] left-[-10%] w-[450px] h-[450px] rounded-full -z-[1] border border-pink-200/20"></div>

                    <h2 className="text-5xl railway text-white font-semibold text-center pb-8 pt-10">Simple Pricing</h2>
                    <p className="w-full lg:w-[500px] text-2xl text-[#bfbfbf]/80 text-center mx-auto">Your Plan. Your Way.</p>

                    <div className="flex w-full md:w-[350px] mx-auto mt-16 p-4 gap-3 border border-[#bfbfbf]/30 rounded-e-full rounded-s-full bg-black/5 backdrop-blur-lg">
                        <button onClick={() => setPlans("standard")} className={`w-1/2 ${plans == "standard" ? "bg-[#151419]" : "bg-transparent"} px-3 py-3 rounded-s-full rounded-e-full railway font-semibold border-none outline-none text-lg`}>Standard</button>
                        <button onClick={() => setPlans("professional")} className={`w-1/2 ${plans == "professional" ? "bg-[#151419]" : "bg-transparent"} px-3 py-3 rounded-s-full rounded-e-full railway font-semibold border-none outline-none text-lg`}>Professional</button>
                    </div>

                    <PricingBox plans={plans} plansData={plansData} />

                    <div style={{
                        background: "linear-gradient(160deg, #2e2a34 0%, #010101 60%)"
                    }} className="absolute bottom-[4%] right-[-10%] w-[250px] h-[250px] rounded-full -z-[1] border border-pink-200/20"></div>

                    <div className="w-full py-12 px-12 border-indigo-200/20 rounded-3xl border-[2px] bg-blue-200/5 backdrop-blur-xs hover:border-indigo-200/50 transition-all duration-300">
                        <Link to="#" className="block text-center font-semibold railway text-2xl text-white/60 hover:underline transition-all duration-300 underline-offset-8">Would like to know more? Book a call.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;