import { useLoadTime } from "@/hooks";
import {
  animated,
  EasingFunction,
  easings,
  useSpring,
} from "@react-spring/web";

interface LoadingProps {
  time?: number;
  hideText?: boolean;
  easing?: EasingFunction;
  color?: string;
  colorComplete?: string;
}

export const Loading = ({
  time = 1000,
  hideText,
  easing,
  color,
  colorComplete,
}: LoadingProps) => {
  const { x } = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 100,
    },
    delay: 0,
    config: {
      duration: time,
      easing: easing ?? easings.easeOutCirc,
    },
  });

  const { loaded } = useLoadTime(time);

  return (
    <div className="flex flex-col justify-center items-center text-base w-full">
      {!hideText && <div className="text-3xl font-ubuntu">Loading...</div>}
      <div className="rounded-full w-full">
        <animated.progress
          className={`progress w-full rounded-full ${color ?? ""} ${
            loaded ? colorComplete ?? "" : ""
          }`}
          value={x}
          max="100"
        ></animated.progress>
      </div>
    </div>
  );
};
