"use client";

import { createContext, useContext, useState } from "react";

const LangContext = createContext({});

export const LangContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<string>("EN");

  const toggleLang = () => {
    if (lang === "FR") setLang("EN");
    else setLang("FR");
  };
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => useContext(LangContext);
