"use client";

const smoothEase = [0.22, 1, 0.36, 1];

export const topBar = (isOpen) => ({
  initial: { rotate: 0 },
  animate: { rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 },
  transition: { duration: 0.4, ease: smoothEase },
});
export const middleBar = (isOpen) => ({
  initial: { rotate: 0 },
  animate: { rotate: isOpen ? -45 : 0 },
  transition: { duration: 0.4, ease: smoothEase },
});
export const bottomBar = (isOpen) => ({
  initial: { rotate: 0 },
  animate: { rotate: isOpen ? 45 : 0, y: isOpen ? -6 : 0 },
  transition: { duration: 0.4, ease: smoothEase },
});

export const sideNav = (isOpen) => ({
  initial: { y: -300 },
  animate: { y: isOpen ? 0 : -300 },
  transition: { duration: 0.5, ease: smoothEase },
});

export const handWave = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 20, -10, 20, -10, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const slideUpStagger = {
  initial: { y: 50, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
      ease: smoothEase,
    },
  }),
};

export const image = {
  initial: { scale: 0, opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const leftFadeIn = (position, delay) => ({
  initial: {
    x: position,
    opacity: 0,
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      duration: delay,
      ease: smoothEase,
    },
  },
});

export const rightFadeIn = (position, delay) => ({
  initial: {
    x: position,
    opacity: 0,
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      duration: delay,
      ease: smoothEase,
    },
  },
});

export const available = {
  initial: {
    y: 80,
    opacity: 0,
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const fading = (delay) => ({
  initial: {
    opacity: 0,
    scale: 0,
  },
  after: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: delay,
      ease: smoothEase,
    },
  },
});
