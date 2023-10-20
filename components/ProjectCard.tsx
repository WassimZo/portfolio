"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import liveIcon from "@/public/icons/live.svg";
import repoIcon from "@/public/icons/github.svg";
import { useLangContext } from "@/context/lang";

type Props = {
  left: boolean;
  title: string;
  description: string;
  descriptionFr: string;
  image: StaticImageData;
  repo: string;
  live: string;
};

const ProjectCard = ({
  left,
  title,
  description,
  descriptionFr,
  image,
  repo,
  live,
}: Props) => {
  //@ts-ignore
  const { lang } = useLangContext();
  return (
    <div className="project-card">
      <div
        className={`w-full px-[5%] flex flex-col gap-[10%] max-md:gap-[20px] max-lg:gap-[40px] max-lg:order-5 py-[10%] max-lg:text-center ${
          left ? "" : "order-5"
        }`}
      >
        <h1 className="text-5xl max-md:text-2xl text-primary-black font-semibold">
          {title}
        </h1>
        <p className="text-primary-black text-3xl max-md:text-xl h-full">
          {lang === "EN" ? description : descriptionFr}
        </p>
        <div className="w-full flex justify-center items-center gap-[20%] my-[40px]">
          <Link href={repo}>
            <Image src={repoIcon} width={40} height={40} alt="github-icon" />
          </Link>
          <Link href={live}>
            <Image src={liveIcon} width={40} height={40} alt="live-icon" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white rounded-2xl w-full">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className=" rounded-2xl w-full"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
