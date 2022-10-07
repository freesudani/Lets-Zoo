import { FC } from "react";
import NavbarList from "./NavbarList";
import LogoImage from "../images/2555683d4e41413081c286addb5bb349_prev_ui.png";
import NavbarSearch from "./NavbarSearch";

const Navbar: FC = () => {
  return (
    <nav className="absolute flex items-center justify-between top-0 left-0 w-full h-[10rem] px-8 bg-black bg-opacity-70 overflow-hidden">
      <div>
        <img src={LogoImage} alt="logo" className="h-[9rem] w-auto" />
      </div>
      <NavbarList />
      <NavbarSearch />
    </nav>
  );
};

export default Navbar;
