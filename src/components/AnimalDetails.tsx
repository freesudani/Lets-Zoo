import { FC } from "react";
import { useParams } from "react-router";
import { data } from "../data/ListOfAnimals";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { animaldetailsVariant } from "../animations/AnimalDetailsAnimation";

const AnimalDetails: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const selectedAnimal = data.find(
    (Anim) => Anim.id.toString() === params.animalId
  );

  return (
    <div className="w-screen min-h-screen max-h-fit bg-black  pt-56 pb-14">
      <motion.div
        variants={animaldetailsVariant}
        initial="hidden"
        animate="visible"
        className="w-3/5 h-10/12 border-primary-200 border-4 rounded-2xl mx-auto "
      >
        <div>
          <img
            src={selectedAnimal?.image}
            alt={selectedAnimal?.title}
            className="w-full overflow-hidden"
          />
        </div>
        <div className="flex justify-center items-center my-5">
          <h1 className="text-6xl text-primary-200 uppercase">
            {selectedAnimal?.title}
          </h1>
        </div>
        <div className="flex justify-center items-center my-5 px-10">
          <h6 className="text-xl text-primary-200 uppercase text-justify">
            {selectedAnimal?.details}
          </h6>
        </div>
        <div className="flex justify-center items-center my-5">
          <button
            onClick={() => navigate(-1)}
            className="primarybt lgbt uppercase px-5 flex justify-around items-center"
          >
            Go Back
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimalDetails;
