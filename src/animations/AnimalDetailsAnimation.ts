export const animaldetailsVariant = {
  hidden: {
    y: "40px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 9,
      ease: "easeIn",
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
  },
};
