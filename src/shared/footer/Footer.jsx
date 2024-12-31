import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full relative py-24 bg-[#000000] top-shadow">
      <div className="container mx-auto px-5 lg:px-12">
        <h1 className="w-full lg:w-[720px] text-5xl railway font-bold text-center mx-auto leading-[1.3]">Discover if our service suits your needs. (It absolutely does)</h1>
        <p className="w-full lg:w-[680px] text-2xl py-10 railway font-semibold text-[#bfbfbf] text-center mx-auto">Get a guided tour of Design Plus Motion and witness the game-changing impact it can have on your design sourcing.</p>

        <form className="flex justify-center items-stretch gap-0 w-full flex-col sm:flex-row sm:w-[500px] mx-auto pt-12">
          <div className="w-1/2">
            <input type="email" className="hover-shadow w-full bg-transparent outline-none border-[2px] border-purple-200/50 rounded-s-full py-3 px-5 text-[#9889ac] hover:border-purple-400 transition-all duration-300 railway font-semibold" placeholder="Your email address" />
          </div>
          <div className="w-1/2">
            <button className="block hover-shadow w-full bg-transparent outline-none border-[2px] border-purple-200/50 rounded-e-full py-3 px-5 text-white hover:border-purple-400 transition-all duration-300 railway font-semibold">Register your interest</button></div>
        </form>
        <div className="flex justify-center items-center gap-2 pt-2">
          <input id="check" className="h-8" type="checkbox" />
          <label htmlFor="check" className="flex text-[#e1caff]">
            <p>Yes, I would like to be contacted to discuss my needs.</p>
            <Link className="inline-block text-[#8063a4] font-bold ps-2" to="/privacy">Privacy Policy.</Link>
          </label>
        </div>

        <div className="pt-32 flex justify-between items-start">
          <div className="w-full md:w-[60%] flex gap-7 items-center">
            <img className="w-[60px]" src="/images/map.svg" alt="next step" />
            <h2>Next Step is based in the heart of <br /> Europe, on the sunny island of Malta.</h2>
          </div>
          <div className="w-full md:w-[40%] flex gap-4 items-start">
            <div className="w-1/2">
              <Link className="block pb-2" to="#">Latest Projects</Link>
              <Link className="block pb-2" to="#">Pricing</Link>
              <Link className="block pb-2" to="#">Contact</Link>
            </div>
            <div className="w-1/2">
              <Link className="block pb-2" to="#">Get Started</Link>
              <Link className="block pb-2" to="#">Terms and Conditions</Link>
              <Link className="block pb-2" to="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
