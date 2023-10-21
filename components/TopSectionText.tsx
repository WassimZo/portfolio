"use client";

import { useLangContext } from "@/context/lang";
import Link from "next/link";

const TopSectionText = () => {
  //@ts-ignore
  const { lang } = useLangContext();
  return (
    <div className="flex flex-col gap-[5vh] py-[5vh] w-full max-md:items-center max-md:text-center">
      <h1 className="text-7xl max-xl:text-5xl max-md:text-3xl text-primary-black font-semibold ">
        {lang === "EN" ? "Hi i'm Wassim" : "Salut c'est Wassim"}
      </h1>
      <h1 className="text-7xl max-xl:text-5xl max-md:text-3xl text-primary-blue">
        {lang === "EN"
          ? "A fullstack web developer"
          : "Développeur Web Fullstack"}
      </h1>
      <p className="text-4xl max-xl:text-4xl max-md:text-xl text-primary-black">
        {lang === "EN"
          ? "Currently looking for an "
          : "Actuellement à la recherche d'un "}
        <span className="text-primary-blue">
          {lang === "EN" ? "internship" : "stage"}
        </span>{" "}
        {lang === "EN"
          ? "in order to step-up"
          : "afin d'améliorer mes compétences"}
      </p>
      <Link href="#contact">
        <button className="px-12 py-6 mr-auto max-md:mx-auto bg-primary-blue hover:bg-primary-dark_blue text-primary-light text-5xl max-xl:text-4xl max-md:text-xl font-[500] rounded-3xl shadow-2xl">
          {lang === "EN" ? "Hire me" : "Contacte moi"}
        </button>
      </Link>
    </div>
  );
};

export default TopSectionText;
