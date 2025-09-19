import AboutMe from "@/Component/aboutme";
import ExperienceSection from "@/Component/experiencesection";
import Footer from "@/Component/footer";
import Header from "@/Component/header";
import HeroSection from "@/Component/herosection";
import SkillSection from "@/Component/skillsection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <SkillSection/>
      <ExperienceSection/>
      <Footer/>
    </>
  );  
  
}
