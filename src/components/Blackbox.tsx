import { FC } from "react";
import { BlackboxProps } from "../types/types.types";
import { blackboxVariant1, blackboxVariant2 } from "../animations/Blackbox";
import { motion } from "framer-motion";

const Blackbox: FC<BlackboxProps> = (props) => {
  const blackVariant = () => {
    if (props.animation === 1) {
      return blackboxVariant1;
    }
    if (props.animation === 2) {
      return blackboxVariant2;
    }
  };

  return (
    <motion.div
      variants={blackVariant()}
      initial="hidden"
      animate="visible"
      className={
        props.animation === 1
          ? "w-fit h-2/5 bg-black bg-opacity-70 rounded-2xl ml-14 p-5 flex flex-col justify-evenly items-start"
          : "w-fit h-2/5 bg-black bg-opacity-70 rounded-2xl mr-14 p-5 flex flex-col justify-evenly items-end"
      }
    >
      <div>
        <h1 className="text-7xl text-white font-roboto font-bold capitalize">
          {props.title}
        </h1>
      </div>
      <div>
        <button
          className={
            props.animation === 1
              ? "lgbt secondarybt uppercase flex items-center justify-around"
              : "lgbt secondarybt uppercase flex flex-row-reverse items-center justify-around"
          }
        >
          <span className="text-3xl capitalize">{props.btntitle}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  props.animation === 1
                    ? "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    : "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              />
            </svg>
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Blackbox;