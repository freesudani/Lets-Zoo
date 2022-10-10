import { FC } from "react";
import Directions from "../components/Directions";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Directions />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
