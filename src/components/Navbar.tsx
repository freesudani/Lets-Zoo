import { FC, useEffect, useState } from "react";
import NavbarList from "./NavbarList";
import { motion } from "framer-motion";
import { navbarVariant } from "../animations/NavbarAnimation";
import LogoImage from "../images/2555683d4e41413081c286addb5bb349_prev_ui.png";
import NavbarSearch from "./NavbarSearch";

const Navbar: FC = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("sticky bg-primary-200 bg-opacity-70")
        : setStickyClass("bg-black bg-opacity-70");
    }
  };

  return (
    <motion.nav
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className={`absolute flex items-center justify-between top-0 left-0 w-screen h-[10rem] px-8  overflow-hidden  ${stickyClass}`}
    >
      <div>
        <img src={LogoImage} alt="logo" className="h-[9rem] w-auto" />
      </div>
      <NavbarList />
      <NavbarSearch />
    </motion.nav>
  );
};

export default Navbar;
