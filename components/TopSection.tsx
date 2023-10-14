import Link from "next/link";
import github from "@/public/icons/github.svg";
import linkedin from "@/public/icons/linkedin.svg";
import Navbar from "./Navbar";
import Image from "next/image";

const TopSection = () => {
  return (
    <section className="top">
      <Navbar />
      <div className="flex items-center gap-[5vw] max-md:gap-[10px]">
        <div className="flex flex-col items-center gap-[5vh]">
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
        <div className="flex flex-col gap-[5vh] py-[5vh] w-full max-md:items-center max-md:text-center">
          <h1 className="text-7xl max-xl:text-5xl max-md:text-3xl text-primary-black font-semibold ">
            Hi i'm Wassim
          </h1>
          <h1 className="text-7xl max-xl:text-5xl max-md:text-3xl text-primary-blue">
            A fullstack web developer
          </h1>
          <p className="text-4xl max-xl:text-4xl max-md:text-xl text-primary-black">
            Currently looking for an{" "}
            <span className="text-primary-blue">internship</span> in order to
            step up
          </p>
          <Link href="#contact">
            <button className="px-12 py-6 mr-auto max-md:mx-auto bg-primary-blue text-primary-light text-5xl max-xl:text-4xl max-md:text-xl font-[500] rounded-3xl shadow-2xl">
              Hire me
            </button>
          </Link>
        </div>
        <div className="h-[400px] w-[1px] bg-primary-black/50 max-md:hidden" />
      </div>
    </section>
  );
};

export default TopSection;
