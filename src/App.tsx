import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Scrolltotop from "./components/Scrolltotop";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import FAQuestions from "./pages/FAQuestions";

import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Scrolltotop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="faq" element={<FAQuestions />} />
        <Route path="aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
