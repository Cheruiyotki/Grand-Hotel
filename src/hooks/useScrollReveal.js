import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useScrollReveal(amount = 0.2) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return {
    ref,
    controls,
    variants: {
      hidden: { opacity: 0, y: 36 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };
}
