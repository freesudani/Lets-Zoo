import { FC, useEffect } from "react";
import { TestimonialProps } from "../types/types.types";
import { ImQuotesLeft } from "react-icons/im";
import { testimonialboxVariant } from "../animations/TestimonialAnimation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialBox: FC<TestimonialProps> = (props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={testimonialboxVariant}
      initial="hidden"
      animate={controls}
      className="flex flex-col justify-start items-center w-[30rem]"
    >
      <div>
        <ImQuotesLeft className="text-secondary-200 text-7xl" />
      </div>
      <div className="my-5">
        <h5 className="text-primary-200 text-3xl font-bold font-roboto">
          {props.source}
        </h5>
      </div>
      <div>
        <p className="text-white text-2xl text-justify">{props.parag}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialBox;
