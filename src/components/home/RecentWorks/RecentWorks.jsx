
const RecentWorks = () => {
    const screenshots = [
        "project1.jpg",
        "project2.jpg",
        "project3.jpg",
        "project4.jpg"
    ];
    return (
        <div className="w-full relative py-20">
            <div className="container mx-auto px-5 xl:px-12">
                <div className="w-full text-center relative">
                    <h2 className="text-5xl railway text-white font-bold text-center pt-10">Recent works <br />
                        to inspire</h2>

                    <button className="text-[15px] font-semibold text-white mt-10 border border-white/20 px-8 py-3.5 rounded-e-full rounded-s-full bg-white/5 backdrop-blur-lg hover:border-[#e1caff] transition-all duration-300 hover-shadow mb-12">See Recent Works</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative px-5 lg:px-16">
                    {screenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={`/images/${screenshot}`}
                            alt={`Project ${index + 1}`}
                            className="rounded-2xl object-cover w-full h-full hover:scale-105 transition-all duration-300"
                        />
                    ))}

                    <div style={{
                        background: "linear-gradient(60deg, #100b31 0%, #010101 70%)"
                    }} className="absolute bottom-[-25%] left-[-15%] w-[400px] h-[400px] rounded-full -z-[1] border border-white/10"></div>
                </div>
            </div>
        </div>
    );
};

export default RecentWorks;