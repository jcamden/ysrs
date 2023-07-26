import { v4 } from "uuid";

import { ColorChangingText, getRandomInt } from "./ColorChangingText";

export const ColorChangingLetters = ({
  text,
  initialRGB,
  initialDelay,
}: {
  text: string;
  initialRGB?: [number, number, number];
  initialDelay?: number;
}) => (
  <>
    {text.split("").map((char) => (
      <ColorChangingText
        key={v4()}
        text={char}
        initialRGB={initialRGB}
        initialDelay={
          initialDelay
            ? getRandomInt(initialDelay, initialDelay + initialDelay / 2)
            : undefined
        }
      />
    ))}
  </>
);
