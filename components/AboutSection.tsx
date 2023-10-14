import React from "react";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="title flex items-end">
        <h1 className="min-w-max">{"<about me>"}</h1>
        <div className="bg-primary-black/50 h-[1px] w-full" />
      </div>
      <p className="text-4xl max-md:text-xl">
        Wassim, 21 yo, based in Marseille (France). I started coding in 2018 and
        creating{" "}
        <span className="text-primary-blue font-semibold">
          web applications
        </span>{" "}
        in 2021 and i'm always seeking to improve my skills.
      </p>
      <h1 className="title-close">{"</about me>"}</h1>
    </section>
  );
};

export default AboutSection;
