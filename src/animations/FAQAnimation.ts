export const faqVariant = {
  hidden: {
    x: "18px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeIn",
    },
  },
};

export const answerVariant = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
    },
  },
};
