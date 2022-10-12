import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Scrolltotop from "./components/Scrolltotop";
import Contact from "./pages/Contact";

import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Scrolltotop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
