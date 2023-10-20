"use client";

import { useLangContext } from "@/context/lang";
import React from "react";

const LangButton = () => {
  //@ts-ignore
  const { lang, toggleLang } = useLangContext();
  return (
    <button className="lang-button" onClick={toggleLang}>
      {lang === "FR" ? "EN" : "FR"}
    </button>
  );
};

export default LangButton;
