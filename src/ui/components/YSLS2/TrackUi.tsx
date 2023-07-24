import { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import { v4 } from "uuid";

import { speak } from "./speak";
import { TrackInfo } from "./tracks";
import { useDisplay } from "./useDisplay";

interface TrackDisplayProps {
  trackInfo: TrackInfo;
}

interface IncrementTts {
  indexDisplayed: number;
  setTtsText: Dispatch<SetStateAction<string>>;
  trackInfo: TrackInfo;
}

const incrementTts = ({
  indexDisplayed,
  setTtsText,
  trackInfo,
}: IncrementTts) => {
  setTtsText(trackInfo[indexDisplayed + 1].tts);
};

export const TrackUI = ({ trackInfo }: TrackDisplayProps) => {
  const [indexDisplayed, setIndexDisplayed] = useState(0);
  const [ttsText, setTtsText] = useState(trackInfo[0].tts);
  const { display } = useDisplay({ trackInfo, indexDisplayed });

  useEffect(() => {
    speak({
      text: ttsText,
      onEnd: () => {
        if (indexDisplayed < trackInfo.length - 1) {
          incrementTts({ indexDisplayed, setTtsText, trackInfo });
          setIndexDisplayed(indexDisplayed + 1);
        }
      },
    });
  }, [ttsText]);

  return (
    <div className="flex flex-col justify-center items-center text-9xl font-ubuntu font-bold">
      {display.map((item) => (
        <div key={v4()}>{item}</div>
      ))}
    </div>
  );
};

export const MemoizedTrackUi = memo(TrackUI);
