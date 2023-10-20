"use client";

import { useLangContext } from "@/context/lang";
import Link from "next/link";

const Navbar = () => {
  //@ts-ignore
  const { lang } = useLangContext();
  return (
    <nav className="navbar">
      <Link href="#projects">{lang === "EN" ? "<projects>" : "<projets>"}</Link>
      <Link
        href={
          lang === "EN"
            ? "https://drive.google.com/file/d/1GlDrBZU2CKJ64uYyYQCK0btQYLLrPo5p/view?usp=share_link"
            : "https://drive.google.com/file/d/1JRiVI4PZHijBhYC2lWJW_HAXmvzsA6RE/view?usp=share_link"
        }
        target="_blank"
      >
        {lang === "EN" ? "<resume>" : "<cv>"}
      </Link>
      <Link href="https://wlog.wassimzo.xyz/" target="_blank">
        {"<blog>"}
      </Link>
      <Link href="#contact">{"<contact>"}</Link>
    </nav>
  );
};

export default Navbar;
