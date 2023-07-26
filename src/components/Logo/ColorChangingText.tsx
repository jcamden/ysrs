import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getRandomArbitrary = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => getRandomInt(0, 255);

const getRandomRgb = (): [number, number, number] => [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
];

const getBrightRGB = (): [number, number, number] => {
  const rgb = getRandomRgb();
  const sum = rgb.reduce((accum, current) => accum + current, 0);
  return sum > 255 ? rgb : getBrightRGB();
};

const updateColor = (
  setColor: Dispatch<SetStateAction<[number, number, number]>>,
  interval?: number
) => {
  setColor(getBrightRGB());
  setTimeout(
    () => updateColor(setColor),
    interval ?? getRandomArbitrary(1000, 8000)
  );
};

export const ColorChangingText = ({
  initialRGB,
  text,
  interval,
  initialDelay,
}: {
  initialRGB?: [number, number, number];
  text: string;
  interval?: number;
  initialDelay?: number;
}) => {
  const [color, setColor] = useState(initialRGB ?? getBrightRGB());

  useEffect(() => {
    setTimeout(() => {
      updateColor(setColor, interval);
    }, initialDelay ?? 0);
  }, []);

  return (
    <span style={{ color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
      {text}
    </span>
  );
};
