export const aboutusVariantR = {
  hidden: {
    x: "-20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 9,
      ease: "easeIn",
    },
  },
};

export const aboutusVariantL = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 9,
      ease: "easeIn",
    },
  },
};
