import Faq from "../FAQ/Faq";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner/Banner";
import Benefits from "./Benefits/Benefits";
import Discussing from "./Discuss/Discussing";
import Highlight from "./Highlight/Highlight";
import LogoLines from "./LogoLines/LogoLines";
import Pricing from "./pricing/Pricing";
import ProjectsImg from "./ProjectsImg/ProjectsImg";
import RecentWorks from "./RecentWorks/RecentWorks";
import Services from "./Services/Services";
import Video from "./Video/Video";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Video />
      <LogoLines />
      <ProjectsImg />
      <Discussing />
      <Highlight />
      <Reviews />
      <Benefits />
      <RecentWorks />
      <Services />
      <Pricing />
      <Faq />
    </div>
  )
}
