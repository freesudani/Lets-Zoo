import { FC } from "react";
import Directions from "../components/Directions";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Directions />
      <FAQ />
      <Testimonials />
    </div>
  );
};

export default Home;
