import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="#projects">{"<projects>"}</Link>
      <Link
        href="https://drive.google.com/file/d/1xpG1dzYswSVlB-FkZIlhACFVHBKS5Y5Q/view?usp=drive_link"
        target="_blank"
      >
        {"<resume>"}
      </Link>
      <Link href="https://wlog.wassimzo.xyz/" target="_blank">
        {"<blog>"}
      </Link>
      <Link href="#contact">{"<contact>"}</Link>
    </nav>
  );
};

export default Navbar;
