import { FC } from "react";
import { Link } from "react-router-dom";
import { AnimalProps } from "../types/types.types";
import { animalVariant } from "../animations/AnimalAnimation";
import { motion } from "framer-motion";

const Animal: FC<AnimalProps> = (props) => {
  return (
    <motion.div
      variants={animalVariant}
      initial="hidden"
      animate="visible"
      className="w-4/5 h-[17rem] rounded-lg bg-black"
    >
      <div>
        <img src={props.image} alt={props.title} className="w-full h-[13rem]" />
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={`/information/${props.id}`}
          className="text-5xl text-primary-200 uppercase cursor-pointer"
        >
          {props.title}
        </Link>
      </div>
    </motion.div>
  );
};

export default Animal;
