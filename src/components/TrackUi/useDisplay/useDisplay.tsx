import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { v4 } from "uuid";

import { TrackInfo } from "@/data/trackMetadata";

import { TrackDisplay } from "./TrackDisplay";

interface InitializeTrackInfoDisplayArgs {
  display: string[];
  noMt?: boolean;
}

const initializeTrackInfoDisplay = ({
  display,
  noMt,
}: InitializeTrackInfoDisplayArgs) => (
  <div key={v4()} className={noMt ? "" : "mt-20"}>
    <TrackDisplay text={display} hiddenText />
  </div>
);

const getInitialDisplay = (trackInfo: TrackInfo) =>
  trackInfo.map(({ display }, index) => (
    <div key={v4()}>
      {initializeTrackInfoDisplay({ display, noMt: index === 0 })}
    </div>
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
        <div key={v4()} className={index === 0 ? "" : "mt-20"}>
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
