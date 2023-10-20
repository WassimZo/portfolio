"use client";

import { useLangContext } from "@/context/lang";
import { useEffect, useState } from "react";

const Title = ({ value, valeur }: { value: string; valeur: string }) => {
  //@ts-ignore
  const { lang } = useLangContext();

  return (
    <div className="title flex items-end">
      <h1 className="min-w-max">{lang === "EN" ? value : valeur}</h1>
      <div className="bg-primary-black/50 h-[1px] w-full" />
    </div>
  );
};

export default Title;
