import AboutMe from "@/Component/aboutme";
import ExperienceSection from "@/Component/experiencesection";
import Firstsection from "@/Component/firstsection";
import Footer from "@/Component/footer";
import Header from "@/Component/header";
import SkillSection from "@/Component/skillsection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Firstsection/>
      <AboutMe/>
      <SkillSection/>
      <ExperienceSection/>
      <Footer/>
    </>
  );  
  
}
