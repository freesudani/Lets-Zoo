import { FC, useEffect } from "react";
import ZooImage from "../images/daiga-ellaby-Sg_OwwU2Z9o-unsplash.jpg";
import ZooImage2 from "../images/anthony-yin-eEMm5-KDHms-unsplash.jpg";
import {
  aboutusVariantR,
  aboutusVariantL,
} from "../animations/AboutusAnimation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: FC = () => {
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
    <div className="h-fit  overflow-x-hidden w-screen pt-64 bg-contact bg-no-repeat bg-cover bg-center">
      <div>
        <h1 className="text-6xl font-bold font-roboto flex justify-center items-center">
          Let's Zoo
        </h1>
      </div>
      <div className="flex justify-around items-start px-10 my-20">
        <motion.div
          ref={ref}
          variants={aboutusVariantL}
          initial="hidden"
          animate={controls}
        >
          <img src={ZooImage} alt="Zoo photo" className="w-[50rem] h-full" />
        </motion.div>
        <motion.div
          className="w-[50rem]  flex flex-col justify-between items-start"
          ref={ref}
          variants={aboutusVariantR}
          initial="hidden"
          animate={controls}
        >
          <div>
            <h6 className="text-3xl text-secondary-200">Our History</h6>
          </div>
          <div>
            <h3 className="text-6xl my-5">Zoo Background</h3>
          </div>
          <div>
            <body className="text-xl text-justify ">
              The Zoo has continued its legacy of saving species started by
              Hornaday throughout its more than 42 years. By the 1980s it was
              emerging as a leader in animal care and conservation science, and
              hired its first full-time veterinarian. The second half of the
              20th century continued to bring conservation science breakthroughs
              at the Zoo. A research center dedicated to studying animal
              reproduction, behavior and ecology opened in 1965. A decade later,
              the Zoo expanded significantly when the Conservation Research
              Center The non-public, 3,200-acre research facility in Front
              Royal, Virginia, became the headquarters for scientists studying
              endangered species and their habitats. Today, the combined
              initiatives are collectively known as the Smithsonian’s National
              Zoo and Conservation Biology Institute.
            </body>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-around items-start flex-row-reverse px-10 my-20">
        <motion.div
          ref={ref}
          variants={aboutusVariantR}
          initial="hidden"
          animate={controls}
        >
          <img src={ZooImage2} alt="Zoo Photo2" className="w-[50rem] h-full" />
        </motion.div>
        <motion.div
          className="w-[50rem]  flex flex-col justify-between items-start"
          ref={ref}
          variants={aboutusVariantL}
          initial="hidden"
          animate={controls}
        >
          <div>
            <h6 className="text-3xl text-secondary-200">Our Goal</h6>
          </div>
          <div>
            <h3 className="text-6xl my-5">Zoo Mission</h3>
          </div>
          <div>
            <body className="text-xl text-justify ">
              We generate, share, and apply scientific knowledge vital to the
              conservation of animals, plants, and habitats worldwide. We help
              shape the vision of San Diego Zoo Wildlife Alliance to lead the
              fight against extinction.We generate, share, and apply scientific
              knowledge vital to the conservation of animals, plants, and
              habitats worldwide. We help shape the vision of San Diego Zoo
              Wildlife Alliance to lead the fight against extinction. Purpose
            </body>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
