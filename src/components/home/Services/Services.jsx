
const Services = () => {
    const services = [
        {
            title: "Graphic Design",
            feature: [
                "Logos & Branding",
                "Web Design",
                "App Ui Design",
                "Ad Graphic Design",
                "Website Graphics",
                "App Screenshots",
                "Signage",
                "Brochures",
                "Social Media Graphics"
            ]
        },
        {
            title: "Motion Design",
            feature: [
                "Logo Animations",
                "Brand Videos",
                "Motion Ads",
                "Animated Social Content",
                "Explainer Videos",
                "2D Animation",
                "Animated Typography",
                "Lottie Animations",
                "Simple 3D Animation"
            ]
        },
    ]
    return (
        <div className="w-full relative py-20">
            <div className="container mx-auto px-5 xl:px-12">
                <div className="w-full text-center relative">
                    <h2 className="text-5xl railway text-white font-bold text-center pt-10">One service <br />
                        for all</h2>
                </div>

                <div className="pt-12 w-full">
                    {
                        services?.map((service, index) => (
                            <div key={index} className="w-full p-12 border-indigo-200/20 rounded-3xl border-[2px] bg-blue-600/5 backdrop-blur-sm hover:border-indigo-200/50 transition-all duration-300 my-7 text-center">
                                <h3 className="text-3xl text-[#bf94f6] font-semibold railway">{service.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-12">
                                    {
                                        service.feature.map((feature, index) => (
                                            <div key={index} className="w-full px-3 py-8 border-indigo-200/20 rounded-xl border-[2px] bg-blue-600/5 backdrop-blur-sm hover:border-indigo-200/50 transition-all duration-300 text-center">
                                                <h4 className="text-xl railway font-medium">{feature}</h4>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <p className="text-center px-12 pb-20 text-[#bfbfbf] text-2xl">Outsourcing a simple explainer video could cost € 5,000 to € 10,000 or more. <br />
                    With Design Plus Motion you get constant premium quality for a fraction of the price.</p>
            </div>
        </div>
    );
};

export default Services;