import { FC } from "react";
import Blackbox from "./Blackbox";

const Header: FC = () => {
  return (
    <div className="h-screen w-screen bg-header bg-cover bg-center bg-no-repeat flex items-center">
      <Blackbox
        title="All zoos are not the same"
        btntitle="about us"
        animation={1}
      />
    </div>
  );
};

export default Header;
