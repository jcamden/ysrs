import { useState } from "react";

import { animated, easings, useSpring } from "@react-spring/web";

export const Loading = () => {
  const { x } = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 100,
    },
    delay: 0,
    config: {
      duration: 1000,
      easing: easings.easeOutCirc,
    },
  });

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div>Loading...</div>
      <div className="rounded-full">
        <animated.progress
          className="progress progress-primary w-56 rounded-full"
          value={x}
          max="100"
        ></animated.progress>
      </div>
    </div>
  );
};
