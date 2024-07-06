import { Transition } from "framer-motion";

export const SBSpeakingBarAnim = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: {
        opacity: 0,
        y: 50,
      },
      onVis: { opacity: 1, y: 0 },
    },
    initial: "init",
    transition,
    viewport: { once: viewportOnce },
    whileInView: "onVis",
  };
};

export const fadeInFromTop = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: {
        opacity: 0,
        y: -20,
      },
      onVis: { opacity: 1, y: 0 },
    },
    initial: "init",
    transition,
    viewport: { once: viewportOnce },
    whileInView: "onVis",
  };
};

export const fadeInFromBottom = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: {
        opacity: 0,
        y: 20,
      },
      onVis: { opacity: 1, y: 0 },
    },
    initial: "init",
    transition,
    viewport: { once: viewportOnce },
    whileInView: "onVis",
  };
};

export const scaleUpFromCenter = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: {
        scale: 0,
        opacity: 0,
      },
      onVis: { scale: 1, opacity:1 },
    },
    initial: "init",
    transition,
    viewport: { once: viewportOnce },
    whileInView: "onVis",
  };
};

export const fadeInFromLeft = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: { opacity: 0, x: -50 },
      onVis: { opacity: 1, x: 0 },
    },
    initial: "init",
    transition,
    whileInView: "onVis",
    viewport: { once: viewportOnce },
  };
};

export const fadeInFromRight = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: { opacity: 0, x: 50 },
      onVis: { opacity: 1, x: 0 },
    },
    initial: "init",
    transition,
    whileInView: "onVis",
    viewport: { once: viewportOnce },
  };
};

export const fadeIn = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: { opacity: 0 },
      onVis: { opacity: 1 },
    },
    initial: "init",
    transition,
    viewport: { once: viewportOnce },
    whileInView: "onVis",
  };
};

export const strechY = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
}) => {
  const { transition, viewportOnce = true } = props;
  return {
    variants: {
      init: {
        height: 0,
      },
      onVis: { height: "100%" },
    },
    initial: "init",
    transition,
    viewport: { once: viewportOnce },
    whileInView: "onVis",
  };
};

export const customStrechX = (props: {
  transition?: Transition;
  viewportOnce?: boolean;
  from: any;
  to: any;
}) => {
  const { transition, from, to, viewportOnce = true } = props;
  return {
    variants: {
      init: {
        width: from ? from : "0",
      },
      onVis: { width: to ? to : "100%" },
    },
    initial: "init",
    transition,
    viewport: { once: viewportOnce },
    whileInView: "onVis",
  };
};
