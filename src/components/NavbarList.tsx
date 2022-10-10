import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavbarList: FC = () => {
  return (
    <ul className="flex justify-between w-2/4 text-white text-3xl capitalize">
      <li>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive
              ? "text-secondary-200 transition-all ease-in duration-300"
              : "text-white transition-all ease-in duration-300"
          }
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={(navData) =>
            navData.isActive
              ? "text-secondary-200 transition-all ease-in duration-300"
              : "text-white transition-all ease-in duration-300"
          }
        >
          about us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/information"
          className={(navData) =>
            navData.isActive
              ? "text-secondary-200 transition-all ease-in duration-300"
              : "text-white transition-all ease-in duration-300"
          }
        >
          information
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={(navData) =>
            navData.isActive
              ? "text-secondary-200 transition-all ease-in duration-300 uppercase"
              : "text-white transition-all ease-in duration-300 uppercase"
          }
        >
          faq
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={(navData) =>
            navData.isActive
              ? "text-secondary-200 transition-all ease-in duration-300"
              : "text-white transition-all ease-in duration-300"
          }
        >
          contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarList;
