import parse from 'html-react-parser';
import "./pricing.css"

const PricingBox = ({ plans, plansData }) => {
    const currentPlan = plansData.find(plan => plan.title.toLowerCase() === plans.toLowerCase()) || plansData[0];

    return (
        <div className="w-full py-12 px-12 border-indigo-200/20 rounded-3xl border-[2px] bg-blue-200/5 backdrop-blur-xs hover:border-indigo-200/50 transition-all duration-300 my-12 bubble-shadow-light">
            <div className="flex items-center">
                <div className="w-1/2 text-start">
                    <h3 className="text-5xl text-[#bf94f6] font-bold railway text-start railway">{currentPlan?.title}</h3>
                    <div className='py-3'>
                        {
                            parse(currentPlan?.content)
                        }
                    </div>
                    <h1 className='text-4xl font-bold text-[#d3b1ff] pb-12'>€{currentPlan?.price?.toLocaleString()} <span className='text-2xl font-medium text-[#bf94f6]'>/{currentPlan?.frequency}</span></h1>

                    <button className='animate-button railway font-semibold text-xl'>
                        <span>Secure Your Spot</span>
                        <span>You will love it!</span>
                    </button>
                </div>
                <div className="w-1/2">
                    <div className="w-full lg:w-[500px] mx-auto border-indigo-200/20 rounded-3xl border-[2px] backdrop-blur-xs hover:border-indigo-200/50 transition-all duration-300 py-5">
                        <ul>
                            {
                                currentPlan?.features.map((feature, index) => (
                                    <li key={index} className='flex items-center justify-start py-3 px-5 gap-4'>
                                        <div className='w-2 h-2 rounded-full bg-[#bf94f6] flex items-center justify-center'></div>
                                        <p className='text-xl text-white'>{feature?.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingBox;