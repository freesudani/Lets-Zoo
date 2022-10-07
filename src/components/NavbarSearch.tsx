import { FC } from "react";
import { motion, useCycle } from "framer-motion";
import { searchVariant } from "../animations/SearchAnimation";

const NavbarSearch: FC = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <div className="flex justify-end items-center w-[18rem]">
      <div className=" ml-5 w-[0.5rem]">
        <motion.input
          variants={searchVariant}
          animate={animation}
          type="text"
          placeholder="search animal"
          className="h-[3rem] p-3 outline-none  font-roboto text-3xl placeholder:text-2xl  placeholder:capitalize"
        />
      </div>
      <div onClick={() => cycleAnimation()} className="mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-16 w-16 cursor-pointer text-white hover:text-secondary-200 active:text-secondary-200 transition-all ease-in duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavbarSearch;
