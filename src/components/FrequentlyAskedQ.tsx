import { FC, useState } from "react";
import FAQBox from "./FAQBox";
import { data } from "../data/Questions";
import { motion } from "framer-motion";
import { faqVariant } from "../animations/FAQAnimation";

const FrequentlyAskedQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden w-screen pt-64 bg-contact bg-no-repeat bg-cover bg-center">
      <motion.div variants={faqVariant} initial="hidden" animate="visible">
        <div className="text-center w-screen mb-10">
          <h1 className="text-6xl font-bold font-roboto">
            Frequently Asked Questions
          </h1>
        </div>
        {data.map((q, index) => {
          const isActive = index === activeIndex;
          return (
            <FAQBox
              key={index}
              id={q.id}
              question={q.question}
              answer={q.answer}
              isActive={isActive}
              setActiveIndex={setActiveIndex}
              index={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default FrequentlyAskedQ;
