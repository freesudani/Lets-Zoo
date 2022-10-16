import { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FAQBoxProps } from "../types/types.types";
import { motion, AnimatePresence } from "framer-motion";
import { answerVariant } from "../animations/FAQAnimation";

const FAQBox: FC<FAQBoxProps> = (props) => {
  const showAnswer = () => {
    if (props.setActiveIndex) return props.setActiveIndex(props.index);
    else return;
  };

  const hideAnswer = () => {
    if (props.setActiveIndex) return props.setActiveIndex(null);
    else return;
  };

  return (
    <div className="my-5 mx-auto w-3/5">
      <AnimatePresence>
        <motion.div
          key="question"
          className="flex justify-between items-center rounded-md relative z-20  rounded-br-md shadow-sm px-5 py-2 font-roboto border-2 border-black"
        >
          <motion.div className="text-4xl text-gray-800 font-bold ml-1">
            <span className="mr-3">{props.id}</span>
            {props.question}
          </motion.div>
          <motion.div className="cursor-pointer">
            {props.isActive ? (
              <FaMinus className="text-2xl" onClick={() => hideAnswer()} />
            ) : (
              <FaPlus className="text-2xl" onClick={() => showAnswer()} />
            )}
          </motion.div>
        </motion.div>

        {props.isActive && (
          <motion.div
            key="answer"
            variants={answerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="p-2 text-2xl text-black border-l border-b border-r border-primary-200"
          >
            {props.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQBox;
