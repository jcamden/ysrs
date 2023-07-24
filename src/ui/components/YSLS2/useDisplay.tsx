import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { v4 } from "uuid";

import { TrackDisplay } from "./TrackDisplay";
import { TrackInfo } from "./tracks";

const initializeTrackInfoDisplay = (display: string[]) => (
  <div key={v4()} className="mt-20">
    <TrackDisplay text={display} unrenderedText />
  </div>
);

const getInitialDisplay = (trackInfo: TrackInfo) =>
  trackInfo.map((item) => (
    <div key={v4()}>{initializeTrackInfoDisplay(item.display)}</div>
  ));

interface IncrementDisplayArgs {
  display: JSX.Element[];
  indexDisplayed: number;
  setDisplay: Dispatch<SetStateAction<JSX.Element[]>>;
  trackInfo: TrackInfo;
}
const incrementDisplay = ({
  display,
  indexDisplayed,
  setDisplay,
  trackInfo,
}: IncrementDisplayArgs) => {
  setDisplay(
    display.map((item, index) =>
      index === indexDisplayed ? (
        <div key={v4()} className="mt-20">
          <TrackDisplay text={trackInfo[index].display} />
        </div>
      ) : (
        item
      )
    )
  );
};

export const useDisplay = ({
  trackInfo,
  indexDisplayed,
}: {
  trackInfo: TrackInfo;
  indexDisplayed: number;
}) => {
  const [display, setDisplay] = useState(getInitialDisplay(trackInfo));

  useEffect(() => {
    incrementDisplay({
      display,
      indexDisplayed,
      setDisplay,
      trackInfo,
    });
  }, [indexDisplayed]);

  return { display };
};
