export const animalVariant = {
  hidden: {
    scale: 0.8,
  },
  visible: {
    scale: 1,
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
