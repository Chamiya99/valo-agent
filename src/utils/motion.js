

export function slideInFromLeft(delay) {
  return {
    hidden: { x: 300, y: 250, opacity: 0, scale: 0 },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
export function slideInFromLeftNew(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
export function slideOutFromLeft(delay) {
  return {
    hidden: { x: 0, y: 0, opacity: 1, scale: 1 },
    visible: {
      y: 250,
      x: 300,
      opacity: 0,
      scale: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
export function goLeft(delay) {
  return {
    hidden: { x: 0, y: 0 },
    visible: {
      x: 100,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromTop(delay) {
  return {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
}




export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : direction === "up-right"?-100:0,
      y: direction === "up" ? 100 : direction === "down" ? -100 :direction === "up-right"?-100:0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


export const showIn = (delay,duration) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition :{
        delay : delay,
        duration : duration,
        ease : "easeInOut",
      },
    },
  };
};


export const rotate = (delay,duration) => {
  return {
    hidden: {
      rotate : -360,
      opacity: 0,
    },
    show: {
      rotate:0,
      opacity: 1,
      transition :{
        delay : delay,
        duration : duration,
        ease : "easeInOut",
      },
    },
  };
};