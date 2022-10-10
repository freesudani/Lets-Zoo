import { FC } from "react";
import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

const Scrolltotop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={
          isVisible
            ? "opacity-100 bg-secondary-200 hover:bg-secondary-100 focus:ring-secondary-200 inline-flex items-center rounded-full p-3 mr-3 mb-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
            : "opacity-0 bg-secondary-200 hover:bg-secondary-100 focus:ring-secondary-200 inline-flex items-center rounded-full p-3 mr-3 mb-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
        }
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Scrolltotop;
