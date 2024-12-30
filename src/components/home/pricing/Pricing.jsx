import { useState } from "react";

const Pricing = () => {

    const [plans, setPlans] = useState("standard");

    return (
        <div className="w-full relative py-20">
            <div className="container mx-auto px-5 xl:px-12">
                <div className="w-full text-center relative">
                    <div style={{
                        background: "linear-gradient(160deg, #2e2a34 0%, #010101 60%)"
                    }} className="absolute -top-[30%] left-[0] w-[400px] h-[400px] rounded-full -z-[1] border border-pink-200/20"></div>

                    <h2 className="text-5xl railway text-white font-semibold text-center pb-8 pt-10">Simple Pricing</h2>
                    <p className="w-full lg:w-[500px] text-2xl text-[#bfbfbf]/80 text-center mx-auto">Your Plan. Your Way.</p>

                    <div className="flex w-full md:w-[400px] mx-auto mt-16 p-4 gap-3 border border-[#bfbfbf]/30 rounded-e-full rounded-s-full bg-black/5 backdrop-blur-lg">
                        <button onClick={() => setPlans("standard")} className={`w-1/2 ${plans == "standard" ? "bg-[#151419]" : "bg-transparent"} px-3 py-5 rounded-s-full rounded-e-full railway font-semibold border-none outline-none text-xl`}>Standard</button>
                        <button onClick={() => setPlans("professional")} className={`w-1/2 ${plans == "professional" ? "bg-[#151419]" : "bg-transparent"} px-3 py-5 rounded-s-full rounded-e-full railway font-semibold border-none outline-none text-xl`}>Professional</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;