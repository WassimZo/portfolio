"use client";

import { useLangContext } from "@/context/lang";

const TitleClose = ({ value, valeur }: { value: string; valeur: string }) => {
  //@ts-ignore
  const { lang } = useLangContext();

  return <h1 className="title-close">{lang === "EN" ? value : valeur}</h1>;
};

export default TitleClose;
