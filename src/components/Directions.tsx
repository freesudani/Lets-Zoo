import { FC } from "react";
import Blackbox from "./Blackbox";

const Directions: FC = () => {
  return (
    <div className="h-screen w-screen px-14 bg-map bg-cover bg-center bg-no-repeat flex flex-row-reverse items-center">
      <Blackbox
        title="directions to your favourite animal"
        btntitle="show map"
        animation={2}
      />
    </div>
  );
};

export default Directions;
