import { FC, useEffect } from "react";
import TestimonialBox from "./TestimonialBox";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonialVariant } from "../animations/TestimonialAnimation";

const Testimonials: FC = () => {
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
    <div className="w-screen h-screen py-32 bg-review bg-cover bg-center bg-no-repeat">
      <motion.div
        ref={ref}
        variants={testimonialVariant}
        initial="hidden"
        animate={controls}
        className="flex justify-center items-center mb-10"
      >
        <h1 className="text-8xl text-white capitalize">Testimonials</h1>
      </motion.div>
      <div className="grid grid-cols-3 justify-items-center">
        <TestimonialBox
          source="Micheal B"
          parag="Our family visiting from South Korea specifically requested to see the Toronto Zoo and we were delighted to take them in the early days of their visit, while they were still a bit jet lagged and needed fresh air and some exercise. Although I've been to the Toronto Zoo many many times, it has been over a decade since my last visit and this visit was one of the best experiences I've had. We saw more active animals than ever before. "
        />
        <TestimonialBox
          source="Ali Khan"
          parag="After seeing some of the poor reviews I was questioning taking the drive while visiting my mom. I am SO happy I decided to go with my instinct. The zoo is gorgeously laid out, animals have lots of room and lovely habitats. We were able to see all our ‘ must sees’ (although some were sleeping- obviously some animals are not going to be awake in the middle of the day when it is hot"
        />
        <TestimonialBox
          source="M A Toush"
          parag="This has got to be one of the most disappointing days out in Canada. Such a poor layout of the zoo, no logical way to walk around and you find yourself backtracking over the same area over and over again.The Canadian domain is in accessible to some. As the zoo mobile doesn’t go there and if you were unable to walk the steep hill"
        />
      </div>
    </div>
  );
};

export default Testimonials;
