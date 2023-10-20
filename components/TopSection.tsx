import Link from "next/link";
import github from "@/public/icons/github.svg";
import linkedin from "@/public/icons/linkedin.svg";
import Navbar from "./Navbar";
import Image from "next/image";
import LangButton from "./LangButton";
import TopSectionText from "./TopSectionText";

const TopSection = () => {
  return (
    <section className="top">
      <Navbar />
      <div className="flex items-center gap-[5vw] max-md:gap-[10px]">
        <div className="flex flex-col items-center gap-[5vh]">
          <LangButton />
          <Link target="_blank" href="https://github.com/WassimZo">
            <Image src={github} width={30} height={30} alt="github icon" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/wassim-zouaoui-94354a1b8/"
          >
            <Image src={linkedin} width={30} height={30} alt="linkedin icon" />
          </Link>
          <div className="h-[200px] w-[1px] bg-primary-black/50" />
        </div>
        <TopSectionText />
        <div className="h-[400px] w-[1px] bg-primary-black/50 max-md:hidden" />
      </div>
    </section>
  );
};

export default TopSection;
