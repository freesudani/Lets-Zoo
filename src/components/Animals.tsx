import { FC } from "react";
import { data } from "../data/ListOfAnimals";
import Animal from "./Animal";

const Animals: FC = () => {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden w-screen pt-64 pb-32 bg-contact bg-no-repeat bg-cover bg-center">
      <div className="text-center w-screen mb-10">
        <h1 className="text-6xl font-bold font-roboto">
          Animals Available In Our Premise
        </h1>
      </div>
      <div className="grid gap-y-10 grid-cols-3 justify-items-center">
        {data.map((animal, index) => {
          return (
            <Animal
              key={index}
              title={animal.title}
              id={animal.id}
              image={animal.image}
              details={animal.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Animals;
