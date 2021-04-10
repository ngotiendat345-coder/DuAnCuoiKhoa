export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const modalPopup = {
  hidden: { y: "-100vh", opacity: 0 },
  show: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
export const iframePopup = {
  hidden: { y: "-100vh", opacity: 0 },
  show: {
    y: "10vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
export const pathAnimation = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export const titleAnimation = {
  hidden: {
    position: "relative",
    top: -250,
  },
  visible: {
    top: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.2 },
  },
};

export const comboAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
export const containerAnimation = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
export const ketquaAnimation = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const PopUpMovie = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};
