import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Scrolltotop from "./components/Scrolltotop";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
