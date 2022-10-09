import { FC } from "react";
import Blackbox from "./Blackbox";

const FAQ: FC = () => {
  return (
    <div className="w-screen h-screen bg-book bg-cover bg-center bg-no-repeat flex items-center">
      <Blackbox
        title="Frequently Asked Questions about us"
        btntitle="learn more"
        animation={1}
      />
    </div>
  );
};

export default FAQ;
