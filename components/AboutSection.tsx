"use client";

import React from "react";
import Title from "./Title";
import TitleClose from "./TitleClose";
import { useLangContext } from "@/context/lang";

const AboutSection = () => {
  //@ts-ignore
  const { lang } = useLangContext();
  return (
    <section className="about">
      <Title valeur="<à propos>" value="<about me>" />
      <p className="text-4xl max-md:text-xl">
        {lang === "EN"
          ? "Wassim, 21 yo, based in Marseille (France). I started coding in 2018 and creating "
          : "Wassim, 21 ans, basé à Marseille (France). J'ai commencé à coder en 2018 et à créer des "}
        <span className="text-primary-blue font-semibold">
          {lang === "EN" ? "web applications " : "applications web "}
        </span>
        {lang === "EN"
          ? " in 2021 and i'm always seeking to improve my skills."
          : " En 2021, et je cherche toujours à améliorer mes compétences."}
      </p>
      <TitleClose valeur="</à propos>" value="</about me>" />
    </section>
  );
};

export default AboutSection;
