import { FC } from "react";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { formVariant, textVariant } from "../animations/FormAnimation";

const Contactus: FC = () => {
  return (
    <div className="w-screen h-[115vh] bg-contact bg-no-repeat bg-cover bg-center grid grid-cols-2 pt-64  px-20">
      <div className="flex flex-col justify-start items-start">
        <div className="mb-7">
          <h6 className="text-secondary-200 uppercase text-2xl">ASK US HERE</h6>
        </div>
        <div className="mb-16">
          <h1 className="text-secondary-100 capitalize text-6xl font-roboto font-bold">
            Drop Us a Line
          </h1>
        </div>
        <motion.div variants={textVariant} initial="hidden" animate="visible">
          <h3 className="text-black text-2xl ">
            If you may have any questions, just send your message here. we will
            get back to you shortly.
          </h3>
        </motion.div>
      </div>

      <motion.form
        variants={formVariant}
        initial="hidden"
        animate="visible"
        className="h-[50rem] flex flex-col justify-between "
      >
        <div>
          <input
            type="text"
            placeholder="Your Name*"
            className="w-4/5 p-5 rounded-xl border-2 border-black "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Email*"
            className="w-4/5 p-5 rounded-xl border-2 border-black "
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Your Phone*"
            className="w-4/5 p-5 rounded-xl border-2 border-black "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Subject*"
            className="w-4/5 p-5 rounded-xl border-2 border-black "
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message..."
            className="w-4/5 p-5 rounded-xl border-2 border-black "
          />
        </div>
        <div className="flex justify-between items-center w-4/5">
          <div className="w-10 h-10  border-2 border-black flex justify-center items-center">
            <TiTick className="text-4xl" />
          </div>
          <div className="ml-5">
            <h3 className="text-black text-xl  ">
              By signing and clicking 'Send Message', you affirm you have read
              all the information provided above, and all are correct.
            </h3>
          </div>
        </div>
        <div>
          <button className="secondarybt lgbt">Send Message</button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contactus;
