import { FC } from "react";
import Directions from "../components/Directions";
import Header from "../components/Header";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Directions />
    </div>
  );
};

export default Home;
