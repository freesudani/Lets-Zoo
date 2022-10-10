import React, { FC } from "react";
import LogoImage from "../images/2555683d4e41413081c286addb5bb349_prev_ui.png";
import { Link } from "react-router-dom";
import { GrFacebookOption, GrMailOption } from "react-icons/gr";

const Footer: FC = () => {
  return (
    <div className="w-screen h-[90vh] bg-black flex flex-col justify-center items-center">
      <div className="my-5 flex flex-col justify-center items-center">
        <div>
          <img src={LogoImage} alt="logo" className="h-[30rem] w-auto" />
        </div>
        <div className="text-center text-5xl font-bold capitalize">
          <h2 className="text-primary-200">let's zoo</h2>
          <h2 className="text-secondary-200">bringing wildlife to you</h2>
        </div>
      </div>
      <ul className="flex justify-between w-2/4 my-3 text-white text-3xl capitalize">
        <li>
          <Link
            to="/"
            className="text-white hover:text-secondary-200 transition-all ease-in duration-300"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/aboutus"
            className="text-white hover:text-secondary-200 transition-all ease-in duration-300"
          >
            about us
          </Link>
        </li>
        <li>
          <Link
            to="/information"
            className="text-white hover:text-secondary-200 transition-all ease-in duration-300"
          >
            information
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            className="text-white hover:text-secondary-200 transition-all ease-in duration-300 uppercase"
          >
            faq
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className="text-white hover:text-secondary-200 transition-all ease-in duration-300"
          >
            contacts
          </Link>
        </li>
      </ul>
      <div className="w-1/12 flex justify-between items-center my-7">
        <div className="w-14 h-14 rounded-lg bg-white hover:bg-secondary-200 transition-all ease-in duration-300 flex justify-center items-center">
          <GrFacebookOption className="text-4xl " />
        </div>
        <div className="w-14 h-14 rounded-lg bg-white hover:bg-secondary-200 transition-all ease-in duration-300  flex justify-center items-center">
          <GrMailOption className="text-4xl " />
        </div>
      </div>
      <div className="w-[90vw] mt-5 border-t-2 border-white ">
        <p className="p-5 text-white text-lg text-center ">
          © 2022 Let's Zoo All Rights Reserved. Designed with by M.Dahiya
        </p>
      </div>
    </div>
  );
};

export default Footer;
